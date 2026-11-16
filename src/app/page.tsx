import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillSection from "@/components/home/SkillSection";
import WorksSection from "@/components/home/WorksSection";
import ContactSection from "@/components/home/ContactSection";
import { SITE_URL } from "@/lib/site";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
    alternates: { canonical: "/" },
};

// 検索エンジン向けの構造化データ（人物）。サイトに書いてある事実だけを載せる
const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    jobTitle: "Web Developer",
    affiliation: {
        "@type": "CollegeOrUniversity",
        name: profile.university,
    },
    sameAs: [profile.github],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
                }}
            />
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <WorksSection />
            <ContactSection />
        </>
    );
}
