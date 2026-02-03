import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// next/font を使用してGoogle Fontsを最適化
// - 自動的にセルフホスティング（外部リクエスト不要）
// - display: 'swap' でFOIT/FOUTを最小化
// - subsets指定でファイルサイズを削減
const lora = Lora({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lora",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: "PortFolio | Mizuki Tamura",
    description:
        "Mizuki Tamura's portfolio website - Web developer, Doshisha University",
    keywords: [
        "portfolio",
        "web developer",
        "Mizuki Tamura",
        "Doshisha University",
    ],
    authors: [{ name: "Mizuki Tamura" }],
    creator: "Mizuki Tamura",
    openGraph: {
        type: "website",
        locale: "ja_JP",
        url: "https://portfolio-v2-mizu2s-projects-22f926d0.vercel.app/",
        siteName: "PortFolio | Mizuki Tamura",
        title: "PortFolio | Mizuki Tamura",
        description:
            "Mizuki Tamura's portfolio website - Web developer, Doshisha University",
        images: [
            {
                url: "/images/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Mizuki Tamura Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "PortFolio | Mizuki Tamura",
        description:
            "Mizuki Tamura's portfolio website - Web developer, Doshisha University",
        images: ["/images/og-image.webp"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={lora.variable}>
            <head>
                {/* Devicon for skill icons - preloadでパフォーマンス最適化 */}
                <link
                    rel="preload"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
                    as="style"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
                />
            </head>
            <body className={`${lora.className} antialiased`}>
                <Header />
                <main className="pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
