import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";
import { workPath } from "@/data/works-helpers";
import TechIcon from "@/components/ui/TechIcon";
import AwardText from "@/components/ui/AwardText";

export default function WorksContent() {
    return (
        <>
            {/* Hero Section */}
            <section className="h-svh flex items-center bg-works-page -mt-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-white">
                        <h1
                            className="text-4xl md:text-5xl font-normal animate-fade-up"
                            style={{ "--fade-delay": "0.3s" } as CSSProperties}
                        >
                            <span
                                className="custom-borderline animate-border"
                            >
                                Works
                            </span>
                        </h1>
                        <p
                            className="pt-6 text-lg md:text-xl animate-fade-up"
                            style={{ "--fade-delay": "0.7s" } as CSSProperties}
                        >
                            Turning ideas into interactive experiences —
                            <br />
                            Here are some of the projects I&apos;ve built with
                            passion and purpose.
                        </p>
                    </div>
                </div>
            </section>

            {/* Works List：About と同じく、作品ごとに暗い背景と白い背景を交互にする */}
            {works.map((work, index) => {
                const dark = index % 2 === 0;
                const imageFirst = index % 2 === 1;
                const rule = dark ? "border-gray-600" : "border-gray-300";
                return (
                    <section
                        key={work.id}
                        className={dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
                    >
                        <div className="container mx-auto px-4 py-20">
                            <div className="grid lg:grid-cols-2 gap-8">
                                <div
                                    className={`relative h-64 lg:h-auto min-h-64 ${
                                        imageFirst ? "order-2 lg:order-1" : "order-2"
                                    }`}
                                >
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        className="object-cover"
                                        style={{ objectPosition: work.imagePosition }}
                                    />
                                </div>
                                <div
                                    className={
                                        imageFirst
                                            ? "order-1 lg:order-2"
                                            : "order-1 lg:order-first"
                                    }
                                >
                                    <h2 className="text-2xl mb-4">
                                        <span className="custom-borderline animate-border">
                                            {work.title}
                                        </span>
                                    </h2>
                                    <p className="mb-4">{work.description}</p>

                                    {/* Special thanks（PortFolio など） */}
                                    {work.thanks && (
                                        <>
                                            <hr className={`my-4 ${rule}`} />
                                            <p className="mb-4">
                                                Special thanks to ...
                                                <br />
                                                {work.thanks.map((thank, i) => (
                                                    <span key={thank.url}>
                                                        <Link
                                                            href={thank.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={
                                                                dark
                                                                    ? "custom-link custom-link-light"
                                                                    : "custom-link"
                                                            }
                                                        >
                                                            {thank.label}
                                                        </Link>
                                                        {i < work.thanks!.length - 1 && <br />}
                                                    </span>
                                                ))}
                                            </p>
                                        </>
                                    )}

                                    {work.award && <AwardText award={work.award} />}
                                    <hr className={`my-4 ${rule}`} />
                                    <div
                                        className={`card-dark-border p-4 ${
                                            dark ? "bg-gray-900" : "bg-white"
                                        }`}
                                    >
                                        <h3 className="text-lg mb-4">Technologies Used</h3>
                                        <hr className={`mb-4 ${rule}`} />
                                        <div className="flex flex-wrap gap-4">
                                            {work.technologies.map((tech) => (
                                                <div key={tech.name} className="text-center">
                                                    <TechIcon icon={tech.icon} />
                                                    <div className="text-sm mt-1">{tech.name}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Link
                                        href={workPath(work.id)}
                                        className="btn-outline-accent inline-block mt-6"
                                    >
                                        View More
                                        <span className="sr-only"> about {work.title}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
}
