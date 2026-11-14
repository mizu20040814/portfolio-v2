import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

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

            {/* Works List */}
            <section className="bg-gray-900">
                <div className="container mx-auto px-4 py-20">
                    {works.map((work, index) => (
                        <div
                            key={work.id}
                            className="grid lg:grid-cols-2 gap-8 py-12"
                        >
                            {/* Alternate layout */}
                            {index % 2 === 0 ? (
                                <>
                                    <div className="text-white">
                                        <h2 className="text-2xl mb-4">
                                            <span className="custom-borderline animate-border">
                                                {work.title}
                                            </span>
                                        </h2>
                                        <p className="mb-4">
                                            {work.description}
                                        </p>

                                        {/* Special thanks for portfolio */}
                                        {work.thanks && (
                                            <>
                                                <hr className="my-4 border-gray-600" />
                                                <p className="mb-4">
                                                    Special thanks to ...
                                                    <br />
                                                    {work.thanks.map(
                                                        (thank, i) => (
                                                            <span key={i}>
                                                                <Link
                                                                    href={
                                                                        thank.url
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="custom-link custom-link-light"
                                                                >
                                                                    {
                                                                        thank.label
                                                                    }
                                                                </Link>
                                                                {i <
                                                                    work.thanks!
                                                                        .length -
                                                                        1 && (
                                                                    <br />
                                                                )}
                                                            </span>
                                                        ),
                                                    )}
                                                </p>
                                            </>
                                        )}

                                        {work.award && (
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
                                            <h3 className="text-lg mb-4">
                                                Technologies Used
                                            </h3>
                                            <hr className="mb-4 border-gray-600" />
                                            <div className="flex flex-wrap gap-4">
                                                {work.technologies.map(
                                                    (tech) => (
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
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                        {work.link && (
                                            <Link
                                                href={work.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-outline-accent inline-block mt-6"
                                            >
                                                View More
                                            </Link>
                                        )}
                                    </div>
                                    <div className="relative h-64 lg:h-auto min-h-64">
                                        <Image
                                            src={work.image}
                                            alt={work.title}
                                            fill
                                            sizes="(min-width: 1024px) 50vw, 100vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="order-2 lg:order-1 relative h-64 lg:h-auto min-h-64">
                                        <Image
                                            src={work.image}
                                            alt={work.title}
                                            fill
                                            sizes="(min-width: 1024px) 50vw, 100vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="order-1 lg:order-2 text-white">
                                        <h2 className="text-2xl mb-4">
                                            <span className="custom-borderline animate-border">
                                                {work.title}
                                            </span>
                                        </h2>
                                        <p className="mb-4">
                                            {work.description}
                                        </p>
                                        {work.award && (
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
                                            <h3 className="text-lg mb-4">
                                                Technologies Used
                                            </h3>
                                            <hr className="mb-4 border-gray-600" />
                                            <div className="flex flex-wrap gap-4">
                                                {work.technologies.map(
                                                    (tech) => (
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
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                        {work.link && (
                                            <Link
                                                href={work.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-outline-accent inline-block mt-6"
                                            >
                                                View More
                                            </Link>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
