"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

export default function WorksSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Only show first 2 works on home page
    const featuredWorks = works.slice(0, 2);

    return (
        <section
            ref={sectionRef}
            className="flex items-center bg-gray-900"
            id="works"
        >
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl text-white">
                        <span
                            className={`custom-borderline ${isVisible ? "animate-border" : ""}`}
                        >
                            Works
                        </span>
                    </h2>
                </div>

                {/* UniShare */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    <div className="text-white">
                        <h3 className="text-2xl mb-4">
                            <span
                                className={`custom-borderline ${isVisible ? "animate-border" : ""}`}
                            >
                                {featuredWorks[0].title}
                            </span>
                        </h3>
                        <p className="mb-4">{featuredWorks[0].description}</p>
                        <hr className="my-4 border-gray-600" />
                        <div className="card-dark-border bg-gray-900 p-4">
                            <h5 className="text-lg mb-4">Technologies Used</h5>
                            <hr className="mb-4 border-gray-600" />
                            <div className="flex flex-wrap gap-4">
                                {featuredWorks[0].technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="text-center"
                                    >
                                        <i
                                            className={`${tech.icon} devicon-lg`}
                                        ></i>
                                        <div className="text-sm mt-1">
                                            {tech.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link
                            href={featuredWorks[0].link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-accent inline-block mt-6"
                        >
                            View More
                        </Link>
                    </div>
                    <div className="relative h-64 lg:h-auto">
                        <Image
                            src={featuredWorks[0].image}
                            alt={featuredWorks[0].title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Tabit */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="order-2 lg:order-1 relative h-64 lg:h-auto">
                        <Image
                            src={featuredWorks[1].image}
                            alt={featuredWorks[1].title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2 text-white">
                        <h3 className="text-2xl mb-4">
                            <span
                                className={`custom-borderline ${isVisible ? "animate-border" : ""}`}
                            >
                                {featuredWorks[1].title}
                            </span>
                        </h3>
                        <p className="mb-4">{featuredWorks[1].description}</p>
                        {featuredWorks[1].award && (
                            <p className="font-bold mb-4">
                                Received the{" "}
                                <span className="text-accent">
                                    Excellence Award
                                </span>{" "}
                                at Open Hack U 2025 OSAKA,
                                <br />
                                organized by LINE Yahoo.
                            </p>
                        )}
                        <hr className="my-4 border-gray-600" />
                        <div className="card-dark-border bg-gray-900 p-4">
                            <h5 className="text-lg mb-4">Technologies Used</h5>
                            <hr className="mb-4 border-gray-600" />
                            <div className="flex flex-wrap gap-4">
                                {featuredWorks[1].technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="text-center"
                                    >
                                        <i
                                            className={`${tech.icon} devicon-lg`}
                                        ></i>
                                        <div className="text-sm mt-1">
                                            {tech.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link
                            href={featuredWorks[1].link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-accent inline-block mt-6"
                        >
                            View More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
