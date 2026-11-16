"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContact } from "./actions";
import { CONTACT_LIMITS, type ContactFormState } from "@/lib/contact";

const initialState: ContactFormState = { status: "idle" };

type Field = HTMLInputElement | HTMLTextAreaElement;

/**
 * エラーの見た目（CSS の :user-invalid）と読み上げ（aria-invalid）を同じタイミングで切り替える。
 * modern-web-guidance の accessible-error-announcement に沿い、
 * - aria-invalid は最初から "false" にしておく（未設定だと Firefox/Safari が空の必須欄を最初から「無効」と読む）
 * - エラー文は表示中だけ aria-describedby に入れる（隠れていても参照されると読まれるため）
 * - 欄を離れたときに出たエラーは、ページに1つの polite なライブリージョンで少し遅らせて読む
 */
function useAccessibleErrors(
    formRef: React.RefObject<HTMLFormElement | null>,
    announcerRef: React.RefObject<HTMLDivElement | null>,
) {
    useEffect(() => {
        const form = formRef.current;
        const announcer = announcerRef.current;
        if (!form || !announcer) return;

        const flagged = new WeakSet<Field>();
        const announced = new WeakSet<Field>();
        let announceTimer: ReturnType<typeof setTimeout> | undefined;
        let announcedField: Field | null = null;

        const isField = (el: EventTarget | null): el is Field =>
            el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;

        const linkError = (el: Field, shown: boolean) => {
            const errorId = el.dataset.error;
            if (!errorId) return;
            const ids = (el.getAttribute("aria-describedby") ?? "")
                .split(/\s+/)
                .filter((id) => id && id !== errorId);
            if (shown) ids.push(errorId);
            if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
            else el.removeAttribute("aria-describedby");
        };

        const announceError = (el: Field) => {
            const error = el.dataset.error
                ? document.getElementById(el.dataset.error)
                : null;
            if (!error) return;
            const label = el.labels?.[0]?.textContent
                ?.replace(/\*/g, "")
                .trim();
            clearTimeout(announceTimer);
            announcer.textContent = "";
            announcedField = el;
            // 次の欄にフォーカスが移ったときの読み上げと重ならないよう、少し待つ
            announceTimer = setTimeout(() => {
                announcer.textContent = `${label ? `${label}: ` : ""}${error.textContent?.trim() ?? ""}`;
            }, 500);
        };

        const sync = (el: EventTarget | null, announce = false) => {
            if (!isField(el) || el.type === "hidden" || !el.dataset.error)
                return;
            if (el.matches(":user-invalid")) {
                if (announce && !announced.has(el)) {
                    announceError(el);
                    announced.add(el);
                }
                el.setAttribute("aria-invalid", "true");
                linkError(el, true);
                flagged.add(el);
            } else if (
                flagged.has(el) ||
                el.getAttribute("aria-invalid") !== "true"
            ) {
                el.setAttribute("aria-invalid", "false");
                linkError(el, false);
                flagged.delete(el);
                announced.delete(el);
                if (announcedField === el) {
                    clearTimeout(announceTimer);
                    announcer.textContent = "";
                }
            }
        };

        Array.from(form.elements).forEach((el) => sync(el));

        const onBlur = (e: Event) => sync(e.target, true);
        const onInput = (e: Event) => {
            if (isField(e.target) && e.target.hasAttribute("aria-invalid"))
                sync(e.target);
        };
        // 送信に失敗すると未入力の欄にも invalid が飛ぶ。フォーカスが最初の欄に移って読まれるので、ここでは読まない
        const onInvalid = (e: Event) => {
            if (isField(e.target)) announced.add(e.target);
            sync(e.target);
        };
        const onReset = () => {
            setTimeout(() =>
                Array.from(form.elements).forEach((el) => sync(el)),
            );
        };

        form.addEventListener("blur", onBlur, true);
        form.addEventListener("input", onInput);
        form.addEventListener("invalid", onInvalid, true);
        form.addEventListener("reset", onReset);
        return () => {
            clearTimeout(announceTimer);
            form.removeEventListener("blur", onBlur, true);
            form.removeEventListener("input", onInput);
            form.removeEventListener("invalid", onInvalid, true);
            form.removeEventListener("reset", onReset);
        };
    }, [formRef, announcerRef]);
}

export default function ContactForm() {
    const [state, formAction, pending] = useActionState(
        sendContact,
        initialState,
    );
    const formRef = useRef<HTMLFormElement>(null);
    const announcerRef = useRef<HTMLDivElement>(null);
    const startedAtRef = useRef<HTMLInputElement>(null);

    useAccessibleErrors(formRef, announcerRef);

    // 表示した時刻を入れる（速すぎる送信をボットとみなすため）。JS が動かないときは空のまま
    useEffect(() => {
        if (startedAtRef.current)
            startedAtRef.current.value = String(Date.now());
    }, [state]);

    // 送信後に React はフォームをリセットする。失敗したときは defaultValue に入力を戻し、消えないようにする
    const values = state.status === "error" ? state.values : undefined;

    return (
        <form
            ref={formRef}
            action={formAction}
            aria-labelledby="contact-form-heading"
            className="contact-form"
        >
            <h2 id="contact-form-heading" className="text-2xl">
                <span className="custom-borderline">Send a message</span>
            </h2>
            <p className="pt-4 text-sm text-gray-200">
                Fields marked <span aria-hidden="true">*</span>
                <span className="contact-sr-only">with an asterisk</span> are
                required.
            </p>

            <div className="contact-field">
                <label htmlFor="contact-name">
                    Name <span aria-hidden="true">*</span>
                </label>
                <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    enterKeyHint="next"
                    required
                    maxLength={CONTACT_LIMITS.name}
                    defaultValue={values?.name}
                    data-error="contact-name-error"
                />
                <p id="contact-name-error" className="contact-error">
                    Please enter your name.
                </p>
            </div>

            <div className="contact-field">
                <label htmlFor="contact-email">
                    Email <span aria-hidden="true">*</span>
                </label>
                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    enterKeyHint="next"
                    required
                    maxLength={CONTACT_LIMITS.email}
                    defaultValue={values?.email}
                    data-error="contact-email-error"
                />
                <p id="contact-email-error" className="contact-error">
                    Please enter a valid email address (e.g. name@example.com).
                </p>
            </div>

            <div className="contact-field">
                <label htmlFor="contact-message">
                    Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    maxLength={CONTACT_LIMITS.message}
                    defaultValue={values?.message}
                    aria-describedby="contact-message-hint"
                    data-error="contact-message-error"
                />
                <p id="contact-message-hint" className="text-sm text-gray-300">
                    Up to {CONTACT_LIMITS.message.toLocaleString("en-US")}{" "}
                    characters. Japanese is welcome.
                </p>
                <p id="contact-message-error" className="contact-error">
                    Please enter a message.
                </p>
            </div>

            {/* ハニーポット: 人には見えず、読み上げにも Tab 移動にも出ない。ボットだけが埋める */}
            <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>
            <input ref={startedAtRef} type="hidden" name="started_at" />

            <button
                type="submit"
                // 二重送信を防ぐためだけに無効にする（入力エラーで送信を止める目的では使わない）
                disabled={pending}
                className="btn-outline-accent mt-6 disabled:cursor-wait disabled:opacity-70"
            >
                {pending ? "Sending…" : "Send message"}
            </button>

            {/* 送信結果。role="status" で読み上げる */}
            <p
                role="status"
                className={`pt-4 ${state.status === "error" ? "contact-error-text" : ""}`}
            >
                {state.status === "idle" ? "" : state.message}
            </p>

            {/* 欄を離れたときに出たエラーを読み上げるライブリージョン */}
            <div
                ref={announcerRef}
                aria-live="polite"
                className="contact-sr-only"
            />
        </form>
    );
}
