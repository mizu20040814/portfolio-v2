import type { Metadata } from "next";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import SkillSection from "@/components/home/SkillSection";
import HobbySection from "@/components/about/HobbySection";
import WorkExperienceSection from "@/components/about/WorkExperienceSection";

export const metadata: Metadata = {
    title: "About Me | Mizuki Tamura",
    description: "About Mizuki Tamura - Skills, Hobby, and Work Experience",
    alternates: { canonical: "/about" },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/about",
        siteName: "PortFolio | Mizuki Tamura",
        title: "About Me | Mizuki Tamura",
        description:
            "About Mizuki Tamura - Skills, Hobby, and Work Experience",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "About Mizuki Tamura",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Me | Mizuki Tamura",
        description:
            "About Mizuki Tamura - Skills, Hobby, and Work Experience",
        images: ["/images/og-image.jpg"],
    },
};

export default function AboutPage() {
    return (
        <>
            <AboutHeroSection />
            <SkillSection />
            <HobbySection />
            <WorkExperienceSection />
        </>
    );
}
