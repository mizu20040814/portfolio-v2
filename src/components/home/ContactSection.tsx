import Link from "next/link";

export default function ContactSection() {
    return (
        <section
            data-reveal="0.3"
            className="min-h-screen flex items-center bg-hero"
            id="contact"
        >
            <div className="container mx-auto px-4 py-20 text-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl">
                        <span
                            className="custom-borderline"
                        >
                            Contact
                        </span>
                    </h2>
                    <h3 className="pt-6 text-2xl">
                        <span
                            className="custom-borderline"
                        >
                            Name : Mizuki Tamura
                        </span>
                    </h3>
                    <p className="pt-6">
                        Doshisha University Faculty of Science and Engineering
                        <br />
                        Department of Intelligent Information Engineering and
                        Sciences
                        <br />
                        Gmail : mizu20040814@gmail.com
                    </p>
                    <hr className="my-6 border-gray-400" />
                    <Link
                        href="https://github.com/mizu20040814"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-accent inline-block"
                    >
                        Access to GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}
