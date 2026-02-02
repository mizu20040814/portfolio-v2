"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex items-center bg-notfound -mt-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-white">
                    <h1 className="text-5xl md:text-6xl font-normal mb-6">
                        <span
                            className={`custom-borderline ${isVisible ? "animate-border" : ""}`}
                        >
                            404 NOT FOUND
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Sorry, you&apos;re straysheep. That&apos;s all we know.
                    </p>
                    <hr className="my-6 border-gray-500" />
                    <Link href="/" className="btn-outline-accent inline-block">
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
