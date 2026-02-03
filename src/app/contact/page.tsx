import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact | Mizuki Tamura",
    description:
        "Contact Mizuki Tamura - Web developer at Doshisha University. Get in touch via email or GitHub.",
    openGraph: {
        type: "website",
        locale: "ja_JP",
        url: "https://portfolio-v2-mizu2s-projects-22f926d0.vercel.app/contact",
        siteName: "PortFolio | Mizuki Tamura",
        title: "Contact | Mizuki Tamura",
        description:
            "Contact Mizuki Tamura - Web developer at Doshisha University. Get in touch via email or GitHub.",
        images: [
            {
                url: "/images/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Contact Mizuki Tamura",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | Mizuki Tamura",
        description:
            "Contact Mizuki Tamura - Web developer at Doshisha University. Get in touch via email or GitHub.",
        images: ["/images/og-image.webp"],
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
