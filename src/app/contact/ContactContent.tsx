import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactContent() {
    return (
        <>
            <section className="min-h-svh flex items-center bg-contact-page -mt-20">
                <div className="container mx-auto px-4 py-20 text-white">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl">
                            <span className="custom-borderline animate-border">
                                Contact
                            </span>
                        </h1>
                        <h2 className="pt-6 text-2xl">
                            <span className="custom-borderline animate-border">
                                Name : Mizuki Tamura
                            </span>
                        </h2>
                        <p className="pt-6">
                            Doshisha University Faculty of Science and
                            Engineering
                            <br />
                            Department of Intelligent Information Engineering
                            and Sciences
                            <br />
                            Gmail :{" "}
                            <a
                                href="mailto:mizu20040814@gmail.com"
                                className="hover:underline focus-visible:underline"
                            >
                                mizu20040814@gmail.com
                            </a>
                        </p>
                        <hr className="my-6 border-gray-400" />
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="https://github.com/mizu20040814"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline-accent inline-block"
                            >
                                Access to GitHub
                            </Link>
                            <a
                                href="#message"
                                className="btn-outline-accent inline-block"
                            >
                                Send a message
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* 最初の画面は今のまま残し、フォームはその下に置く */}
            <section
                id="message"
                className="bg-gray-900 border-b border-gray-700 scroll-mt-20"
            >
                <div className="container mx-auto px-4 py-20 text-white">
                    <div className="max-w-3xl mx-auto">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    );
}
