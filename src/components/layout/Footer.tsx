import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-400 mb-4">
                    &copy; {new Date().getFullYear()} Mizuki Tamura. All rights
                    reserved.
                </p>
                <div className="flex justify-center space-x-6">
                    <Link
                        href="https://github.com/mizu20040814"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#d9232d] transition-colors"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="mailto:mizu20040814@gmail.com"
                        className="text-gray-400 hover:text-[#d9232d] transition-colors"
                    >
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    );
}
