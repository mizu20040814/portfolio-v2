"use client";

import { useEffect, useRef, useState } from "react";
import { skillCategories } from "@/data/skills";

export default function AboutHeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center bg-aboutme -mt-20"
            id="aboutme"
        >
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto text-white">
                    <h2 className="text-4xl md:text-5xl">
                        <span
                            className={`custom-borderline ${isVisible ? "animate-border" : ""}`}
                        >
                            About Me
                        </span>
                    </h2>
                    <h3 className="pt-6 text-2xl">
                        <span
                            className={`custom-borderline ${isVisible ? "animate-border" : ""}`}
                        >
                            Mizuki Tamura
                        </span>
                    </h3>
                    <p className="pt-6">
                        Doshisha University Faculty of Science and Engineering
                        <br />
                        Department of Intelligent Information Engineering and
                        Sciences
                        <br />
                        20 years old, born in Nagasaki, now living in Kyoto
                    </p>
                    <hr className="my-6 border-gray-400" />
                    <p>
                        I am currently learning web application development,
                        mainly using JavaScript and Firebase through personal
                        projects. I am also familiar with HTML, CSS, Node.js,
                        and Bootstrap. My experience working as a USJ crew
                        member has helped me develop strong communication
                        skills, which I consider one of my key strengths.
                    </p>
                </div>
            </div>
        </section>
    );
}
