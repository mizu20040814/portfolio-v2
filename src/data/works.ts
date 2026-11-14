import { Work } from "@/types";

export const works: Work[] = [
    {
        id: "unishare",
        title: "UniShare",
        description:
            "A web service that facilitates the smooth transfer and matching of furniture and household items no longer needed after graduation to current students within the same university.",
        technologies: [
            { name: "HTML", icon: "html5-plain" },
            { name: "CSS", icon: "css3-plain" },
            { name: "Bootstrap", icon: "bootstrap-plain" },
            { name: "JavaScript", icon: "javascript-plain" },
            { name: "Firebase", icon: "firebase-plain" },
        ],
        image: "/images/img_for_unishare.webp",
        link: "https://github.com/mizu20040814/UniShare_forGitHub",
    },
    {
        id: "tabit",
        title: "Tabit",
        description:
            "Tabit is a Chrome extension that organizes your tabs based on viewing time or the order they were opened, with automatic grouping for better clarity. It also supports priority tab settings and keyboard shortcuts, offering a smoother and more efficient browsing experience.",
        technologies: [
            { name: "HTML", icon: "html5-plain" },
            { name: "CSS", icon: "css3-plain" },
            { name: "Bootstrap", icon: "bootstrap-plain" },
            { name: "JavaScript", icon: "javascript-plain" },
        ],
        image: "/images/img_for_hacku.webp",
        link: "https://hacku.yahoo.co.jp/hacku2025_osaka/",
        award: "Excellence Award at Open Hack U 2025 OSAKA, organized by LINE Yahoo.",
        featured: true,
    },
    {
        id: "portfolio",
        title: "PortFolio",
        description:
            "This portfolio website is built with Next.js (App Router), React, TypeScript, and Tailwind CSS, and deployed on Vercel. All pages are statically generated, with attention to performance, accessibility, and responsive design across various devices.",
        technologies: [
            { name: "Next.js", icon: "nextjs-plain" },
            { name: "React", icon: "react-original" },
            { name: "TypeScript", icon: "typescript-plain" },
            { name: "Tailwind CSS", icon: "tailwindcss-plain" },
        ],
        image: "/images/granville_island_L.webp",
        link: "https://github.com/mizu20040814/portfolio-v2",
        thanks: [
            { label: "Unsplash — Images", url: "https://unsplash.com/ja" },
            {
                label: "NORTH STREET — Design Reference",
                url: "https://northstreetcreative.com/",
            },
        ],
    },
];
