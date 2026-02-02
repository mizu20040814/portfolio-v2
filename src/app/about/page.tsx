import type { Metadata } from "next";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import SkillSection from "@/components/home/SkillSection";
import HobbySection from "@/components/about/HobbySection";
import WorkExperienceSection from "@/components/about/WorkExperienceSection";

export const metadata: Metadata = {
    title: "About Me | Mizuki Tamura",
    description: "About Mizuki Tamura - Skills, Hobby, and Work Experience",
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
