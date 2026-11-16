"use server";

import {
    MIN_FILL_TIME_MS,
    validateContact,
    type ContactFormState,
    type ContactFormValues,
} from "@/lib/contact";

const SUCCESS_MESSAGE =
    "Thank you! Your message has been sent. I'll get back to you soon.";
const FALLBACK_MESSAGE =
    "Sorry, your message could not be sent. Please email me directly at mizu20040814@gmail.com.";

const field = (formData: FormData, key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
};

/**
 * お問い合わせを Resend（https://resend.com 無料枠: 1日100通・月3,000通）でメールとして送る。
 *
 * 環境変数（Vercel の Project Settings → Environment Variables で設定）:
 * - RESEND_API_KEY      必須。Resend の API キー
 * - CONTACT_TO_EMAIL    任意。受け取るアドレス（既定: Resend アカウントのメール）
 * - CONTACT_FROM_EMAIL  任意。差出人。独自ドメインを Resend で認証するまでは onboarding@resend.dev のまま
 */
export async function sendContact(
    _prev: ContactFormState,
    formData: FormData,
): Promise<ContactFormState> {
    const values: ContactFormValues = {
        // 件名に入るので改行は空白にする
        name: field(formData, "name").replace(/[\r\n]+/g, " "),
        email: field(formData, "email"),
        message: field(formData, "message"),
    };

    // スパム対策 1: 人には見えない欄（ハニーポット）に何か入っていればボット
    // スパム対策 2: 表示から送信までが速すぎればボット（JS が動いたときだけ時刻が入る）
    // どちらもボットに気づかれないよう、成功したふりをして何も送らない
    const honeypot = field(formData, "website");
    const startedAt = Number(field(formData, "started_at"));
    const tooFast =
        Number.isFinite(startedAt) &&
        startedAt > 0 &&
        Date.now() - startedAt < MIN_FILL_TIME_MS;
    if (honeypot || tooFast) {
        return { status: "success", message: SUCCESS_MESSAGE };
    }

    // ブラウザ側の制約は飛ばせるので、サーバーでも必ず確かめる
    const invalid = validateContact(values);
    if (invalid) {
        return { status: "error", message: invalid, values };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("[contact] RESEND_API_KEY is not set");
        return { status: "error", message: FALLBACK_MESSAGE, values };
    }

    try {
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from:
                    process.env.CONTACT_FROM_EMAIL ??
                    "Portfolio Contact <onboarding@resend.dev>",
                to: [process.env.CONTACT_TO_EMAIL ?? "mizu20040814@gmail.com"],
                // 返信ボタンで相手に直接返せるようにする
                reply_to: values.email,
                subject: `[Portfolio] Message from ${values.name}`,
                // HTML を組み立てずテキストだけで送り、入力がそのまま HTML として解釈されないようにする
                text: `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
            }),
            signal: AbortSignal.timeout(10_000),
        });
        if (!res.ok) {
            console.error(
                "[contact] Resend error",
                res.status,
                await res.text(),
            );
            return { status: "error", message: FALLBACK_MESSAGE, values };
        }
    } catch (error) {
        console.error("[contact] Failed to reach Resend", error);
        return { status: "error", message: FALLBACK_MESSAGE, values };
    }

    return { status: "success", message: SUCCESS_MESSAGE };
}
