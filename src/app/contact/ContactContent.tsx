"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ContactContent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex items-center bg-contact-page -mt-20">
            <div className="container mx-auto px-4 py-20 text-white">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl">
                        <span
                            className={`custom-borderline ${isVisible ? "animate-border" : ""}`}
                        >
                            Contact
                        </span>
                    </h1>
                    <h2 className="pt-6 text-2xl">
                        <span
                            className={`custom-borderline ${isVisible ? "animate-border" : ""}`}
                        >
                            Name : Mizuki Tamura
                        </span>
                    </h2>
                    <p className="pt-6">
                        Doshisha University Faculty of Science and Engineering
                        <br />
                        Department of Intelligent Information Engineering and
                        Sciences
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
