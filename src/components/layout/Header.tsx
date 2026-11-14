"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/works", label: "Works" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);
    // アイコンの切り替えと aria-expanded のためだけに開閉状態を持つ。
    // 開閉・Esc・外側クリックで閉じる処理はネイティブの popover に任せる。
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm has-[:popover-open]:shadow-none">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900"
            >
                Skip to content
            </a>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl text-gray-900 hover:text-[#d9232d] transition-colors"
                    >
                        PortFolio
                    </Link>

                    {/* Desktop Navigation */}
                    <nav
                        aria-label="Primary"
                        className="hidden md:flex items-center space-x-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={
                                    pathname === link.href ? "page" : undefined
                                }
                                className="nav-link-custom text-gray-700 hover:text-[#d9232d] py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden text-[#d9232d] p-2"
                        popoverTarget="mobile-menu"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                        aria-label="Menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation（ヘッダーの直下に、以前と同じ白い帯として表示） */}
            <div
                id="mobile-menu"
                ref={menuRef}
                popover="auto"
                onToggle={(e) => setIsOpen(e.newState === "open")}
                className="mobile-menu md:hidden bg-white/95 backdrop-blur-sm shadow-sm"
            >
                <nav aria-label="Primary (mobile)" className="container mx-auto px-4 pb-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={
                                pathname === link.href ? "page" : undefined
                            }
                            className="block py-2 text-gray-700 hover:text-[#d9232d] nav-link-custom"
                            onClick={() => menuRef.current?.hidePopover()}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
