import Link from "next/link";
import ProfileSummary from "@/components/ui/ProfileSummary";
import { profile } from "@/data/profile";

export default function AboutSection() {
    return (
        <section
            data-reveal="0.3"
            className="min-h-svh flex items-center bg-gray-900"
            id="aboutme"
        >
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto text-white">
                    <h2 className="text-3xl md:text-4xl">
                        <span
                            className="custom-borderline"
                        >
                            About Me
                        </span>
                    </h2>
                    <h3 className="pt-6 text-2xl">
                        <span
                            className="custom-borderline"
                        >
                            {profile.name}
                        </span>
                    </h3>
                    <ProfileSummary />
                    <hr className="my-6 border-gray-600" />
                    <p>{profile.bio}</p>
                    <Link
                        href="/about"
                        className="btn-outline-accent inline-block mt-6"
                    >
                        View More
                    </Link>
                </div>
            </div>
        </section>
    );
}
