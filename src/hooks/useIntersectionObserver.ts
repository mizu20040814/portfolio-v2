"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * IntersectionObserverを使用して要素の可視性を検出するカスタムフック
 * @param options - オプション設定
 * @param options.threshold - 可視性のしきい値 (0-1)、デフォルト: 0.3
 * @param options.rootMargin - ルート要素のマージン、デフォルト: "0px"
 * @param options.triggerOnce - 一度だけトリガーするか、デフォルト: true
 * @returns ref - 監視対象の要素に設定するref
 * @returns isVisible - 要素が可視状態かどうか
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
    options: UseIntersectionObserverOptions = {},
) {
    const { threshold = 0.3, rootMargin = "0px", triggerOnce = true } = options;

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.disconnect();
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
}
