import type { Metadata } from "next";
import WorksContent from "./WorksContent";

export const metadata: Metadata = {
    title: "Works | Mizuki Tamura",
    description:
        "Mizuki Tamura's project portfolio - Web applications and development works built with passion and purpose.",
    openGraph: {
        type: "website",
        locale: "ja_JP",
        url: "https://portfolio-v2-mizu2s-projects-22f926d0.vercel.app/works",
        siteName: "PortFolio | Mizuki Tamura",
        title: "Works | Mizuki Tamura",
        description:
            "Mizuki Tamura's project portfolio - Web applications and development works built with passion and purpose.",
        images: [
            {
                url: "/images/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Mizuki Tamura Works",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Works | Mizuki Tamura",
        description:
            "Mizuki Tamura's project portfolio - Web applications and development works built with passion and purpose.",
        images: ["/images/og-image.webp"],
    },
};

export default function WorksPage() {
    return <WorksContent />;
}
