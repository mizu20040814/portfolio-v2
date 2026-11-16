import ProfileSummary from "@/components/ui/ProfileSummary";
import { profile } from "@/data/profile";

export default function AboutHeroSection() {
    return (
        <section
            className="min-h-svh flex items-center bg-aboutme -mt-20"
            id="aboutme"
        >
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto text-white">
                    <h1 className="text-4xl md:text-5xl">
                        <span
                            className="custom-borderline animate-border"
                        >
                            About Me
                        </span>
                    </h1>
                    <h2 className="pt-6 text-2xl">
                        <span
                            className="custom-borderline animate-border"
                        >
                            {profile.name}
                        </span>
                    </h2>
                    <ProfileSummary />
                    <hr className="my-6 border-gray-400" />
                    <p>{profile.bio}</p>
                    <p className="pt-4">
                        Graduation research: {profile.research}
                        <br />
                        English: {profile.english}
                    </p>
                </div>
            </div>
        </section>
    );
}
