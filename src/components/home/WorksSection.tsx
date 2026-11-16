import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";
import { workPath } from "@/data/works-helpers";
import TechIcon from "@/components/ui/TechIcon";
import AwardText from "@/components/ui/AwardText";

export default function WorksSection() {
    // works.ts で featured: true の作品だけを Home に載せる
    const featuredWorks = works.filter((work) => work.featured);

    return (
        <section
            data-reveal="0.1"
            className="flex items-center bg-gray-900"
            id="works"
        >
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl text-white">
                        <span
                            className="custom-borderline"
                        >
                            Works
                        </span>
                    </h2>
                </div>

                {featuredWorks.map((work, index) => {
                    // 偶数番目は文章が左、奇数番目は画像が左（モバイルでは常に文章が上）
                    const imageFirst = index % 2 === 1;
                    const isLast = index === featuredWorks.length - 1;
                    return (
                        <div
                            key={work.id}
                            className={`grid lg:grid-cols-2 gap-8${isLast ? "" : " mb-16"}`}
                        >
                            {imageFirst && (
                                <div className="order-2 lg:order-1 relative h-64 lg:h-auto">
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        className="object-cover"
                                        style={{ objectPosition: work.imagePosition }}
                                    />
                                </div>
                            )}
                            <div
                                className={
                                    imageFirst
                                        ? "order-1 lg:order-2 text-white"
                                        : "text-white"
                                }
                            >
                                <h3 className="text-2xl mb-4">
                                    <span className="custom-borderline">
                                        {work.title}
                                    </span>
                                </h3>
                                <p className="mb-4">{work.description}</p>
                                {work.award && <AwardText award={work.award} />}
                                <hr className="my-4 border-gray-600" />
                                <div className="card-dark-border bg-gray-900 p-4">
                                    <h4 className="text-lg mb-4">
                                        Technologies Used
                                    </h4>
                                    <hr className="mb-4 border-gray-600" />
                                    <div className="flex flex-wrap gap-4">
                                        {work.technologies.map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="text-center"
                                            >
                                                <TechIcon icon={tech.icon} />
                                                <div className="text-sm mt-1">
                                                    {tech.name}
                                                </div>
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
                            {!imageFirst && (
                                <div className="relative h-64 lg:h-auto">
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        className="object-cover"
                                        style={{ objectPosition: work.imagePosition }}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
