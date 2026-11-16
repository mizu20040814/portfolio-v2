import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/data/works";
import { getWork, workPath } from "@/data/works-helpers";
import { profile } from "@/data/profile";
import TechIcon from "@/components/ui/TechIcon";
import AwardText from "@/components/ui/AwardText";

type Props = { params: Promise<{ id: string }> };

// works.ts にある作品だけを静的生成し、それ以外の id は 404 にする
export const dynamicParams = false;

export function generateStaticParams() {
    return works.map((work) => ({ id: work.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const work = getWork((await params).id);
    if (!work) return {};
    const title = `${work.title} | Works | ${profile.name}`;
    return {
        title,
        description: work.description,
        alternates: { canonical: workPath(work.id) },
        openGraph: {
            type: "article",
            locale: "en_US",
            url: workPath(work.id),
            siteName: `PortFolio | ${profile.name}`,
            title,
            description: work.description,
            images: [
                {
                    url: "/images/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${work.title} by ${profile.name}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: work.description,
            images: ["/images/og-image.jpg"],
        },
    };
}

export default async function WorkDetailPage({ params }: Props) {
    const work = getWork((await params).id);
    if (!work) notFound();

    const facts = [
        { label: "Period", value: work.period },
        { label: "Team", value: work.team },
        { label: "Role", value: work.role },
    ].filter((fact) => fact.value);
    const hasCaseStudy = (work.caseStudy?.length ?? 0) > 0;

    return (
        <article className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 pt-12 pb-20">
                {/* パンくず（modern-web-guidance: breadcrumbs） */}
                <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-300">
                    <ol className="flex flex-wrap items-center">
                        <li>
                            <Link href="/works" className="hover:underline focus-visible:underline">
                                Works
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <span aria-hidden="true" className="mx-2 text-gray-500">
                                /
                            </span>
                            <Link
                                href={workPath(work.id)}
                                aria-current="page"
                                className="font-semibold text-white hover:underline focus-visible:underline"
                            >
                                {work.title}
                            </Link>
                        </li>
                    </ol>
                </nav>

                <h1 className="text-4xl md:text-5xl mb-6">
                    <span className="custom-borderline animate-border">
                        {work.title}
                    </span>
                </h1>
                <p className="max-w-3xl mb-4">{work.description}</p>
                {work.award && <AwardText award={work.award} />}

                {facts.length > 0 && (
                    <dl className="grid sm:grid-cols-3 gap-4 max-w-3xl mt-6">
                        {facts.map((fact) => (
                            <div key={fact.label} className="card-dark-border p-4">
                                <dt className="text-sm text-gray-300">{fact.label}</dt>
                                <dd className="mt-1">{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                )}

                <div className="relative h-64 md:h-[28rem] mt-10">
                    <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        preload
                        sizes="(min-width: 1536px) 1504px, (min-width: 1280px) 1248px, 100vw"
                        className="object-cover"
                    />
                </div>

                {/* 本文（caseStudy）がまだない作品は、技術とリンクだけを左寄せで出す */}
                <div
                    className={
                        hasCaseStudy
                            ? "grid lg:grid-cols-3 gap-12 mt-12"
                            : "mt-12 max-w-xl"
                    }
                >
                    {hasCaseStudy && (
                    <div className="lg:col-span-2">
                        {work.caseStudy!.map((section) => (
                            <section key={section.heading} className="mb-10">
                                <h2 className="text-2xl mb-4">
                                    <span className="custom-borderline animate-border">
                                        {section.heading}
                                    </span>
                                </h2>
                                {section.paragraphs.map((paragraph, i) => (
                                    <p key={i} className="mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </section>
                        ))}
                    </div>
                    )}

                    <aside className="space-y-6">
                        <div className="card-dark-border bg-gray-900 p-4">
                            <h2 className="text-lg mb-4">Technologies Used</h2>
                            <hr className="mb-4 border-gray-600" />
                            <div className="flex flex-wrap gap-4">
                                {work.technologies.map((tech) => (
                                    <div key={tech.name} className="text-center">
                                        <TechIcon icon={tech.icon} />
                                        <div className="text-sm mt-1">{tech.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {work.thanks && (
                            <p>
                                Special thanks to ...
                                <br />
                                {work.thanks.map((thank, i) => (
                                    <span key={thank.url}>
                                        <Link
                                            href={thank.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-link custom-link-light"
                                        >
                                            {thank.label}
                                        </Link>
                                        {i < work.thanks!.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        )}

                        <div className="flex flex-wrap gap-4">
                            {work.link && (
                                <Link
                                    href={work.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline-accent inline-block"
                                >
                                    Visit Project
                                </Link>
                            )}
                            <Link href="/works" className="btn-outline-accent inline-block">
                                Back to Works
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
