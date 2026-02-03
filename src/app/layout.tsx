import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
                url: "/og-image.png",
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
        images: ["/og-image.png"],
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
        <html lang="ja">
            <head>
                {/* Google Fonts - Lora */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
                    rel="stylesheet"
                />
                {/* Devicon for skill icons */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
                />
            </head>
            <body className="antialiased">
                <Header />
                <main className="pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
