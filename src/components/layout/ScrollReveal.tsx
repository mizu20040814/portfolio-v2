"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * data-reveal を付けた要素が画面に入ったら is-visible クラスを付ける。
 * 下線アニメーションの開始だけに使うので、React の state は持たず DOM のクラスを直接切り替える。
 * しきい値は data-reveal の値（0〜1、省略時 0.3）。
 */
export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        const targets = document.querySelectorAll<HTMLElement>(
            "[data-reveal]:not(.is-visible)",
        );
        const observers: IntersectionObserver[] = [];

        targets.forEach((target) => {
            const threshold = Number(target.dataset.reveal) || 0.3;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        target.classList.add("is-visible");
                        observer.disconnect();
                    }
                },
                { threshold },
            );
            observer.observe(target);
            observers.push(observer);
        });

        return () => observers.forEach((observer) => observer.disconnect());
    }, [pathname]);

    return null;
}
