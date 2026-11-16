// お問い合わせフォームの入力ルール。フォーム（ブラウザ側の制約）とサーバーアクション（本当の検査）で同じ値を使う。
export const CONTACT_LIMITS = {
    name: 100,
    email: 254,
    message: 5000,
} as const;

// 送信までがこれより速いものは人の入力ではないとみなす（ミリ秒）
export const MIN_FILL_TIME_MS = 3000;

export type ContactFormValues = {
    name: string;
    email: string;
    message: string;
};

export type ContactFormState =
    | { status: "idle" }
    | { status: "success"; message: string }
    // 失敗したときは入力を返し、フォームのリセット後も内容が消えないようにする
    | { status: "error"; message: string; values: ContactFormValues };

// type="email" と同じくらいゆるい形の確認。厳密さより、正しいアドレスを落とさないことを優先する。
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(values: ContactFormValues): string | null {
    const { name, email, message } = values;
    if (!name || name.length > CONTACT_LIMITS.name) {
        return "Please enter your name.";
    }
    if (
        !email ||
        email.length > CONTACT_LIMITS.email ||
        !EMAIL_PATTERN.test(email)
    ) {
        return "Please enter a valid email address.";
    }
    if (!message || message.length > CONTACT_LIMITS.message) {
        return `Please enter a message (up to ${CONTACT_LIMITS.message} characters).`;
    }
    return null;
}
