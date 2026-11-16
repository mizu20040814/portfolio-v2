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
        featured: true,
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
        award: {
            title: "Excellence Award",
            event: "Open Hack U 2025 OSAKA",
            organizer: "LINE Yahoo",
        },
        featured: true,
    },
    {
        id: "ryoshin-reki",
        title: "Ryoshin-reki & Doshisha Student Media",
        description:
            "A daily calendar app for the 150th anniversary of Doshisha, developed with Doshisha University, Doshisha Kori High School, and manamu Inc. as part of the ROHM Memorial Project. I built the whole app by myself, along with a student web media site that delivers the app's updates: news, columns, interviews with professors, and stories about campus life from a student's perspective.",
        technologies: [
            { name: "Next.js", icon: "nextjs-plain" },
            { name: "Supabase", icon: "supabase-original" },
        ],
        image: "/images/img_for_doshisha_media.webp",
        imagePosition: "left top",
        link: "https://doshisha-media-app.vercel.app/",
        period: "Apr 2025 – Mar 2026 (released Nov 2025)",
        team: "Project team of 5",
        role: "All development (app and web media)",
    },
    {
        id: "rakuten-shareable",
        title: "Rakuten Shareable",
        description:
            "Built at Rakuten Group's summer job program. A platform that uses AI to suggest the supplies each person needs in a disaster, and lets users share and exchange the supplies they need or can give away with people nearby.",
        technologies: [
            { name: "React", icon: "react-original" },
            { name: "Go", icon: "go-plain" },
        ],
        // スクリーンショットがないので Works ページの背景画像を使う
        image: "/images/works_coding.webp",
        period: "Aug 2025 (1 week)",
        team: "Team of 5",
        role: "Frontend (requirements, UI and API design were done together)",
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
        thanks: [
            { label: "Unsplash — Images", url: "https://unsplash.com/ja" },
            {
                label: "NORTH STREET — Design Reference",
                url: "https://northstreetcreative.com/",
            },
        ],
    },
];
