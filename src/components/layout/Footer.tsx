import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-400 mb-4">
                    &copy; {new Date().getFullYear()} {profile.name}. All rights
                    reserved.
                </p>
                <div className="flex justify-center space-x-6">
                    <Link
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#d9232d] transition-colors"
                    >
                        GitHub
                    </Link>
                    <Link
                        href={`mailto:${profile.email}`}
                        className="text-gray-400 hover:text-[#d9232d] transition-colors"
                    >
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    );
}
