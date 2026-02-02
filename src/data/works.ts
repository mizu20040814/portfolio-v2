import { Work } from "@/types";

export const works: Work[] = [
    {
        id: "unishare",
        title: "UniShare",
        description:
            "A web service that facilitates the smooth transfer and matching of furniture and household items no longer needed after graduation to current students within the same university.",
        technologies: [
            { name: "HTML", icon: "devicon-html5-plain colored" },
            { name: "CSS", icon: "devicon-css3-plain colored" },
            { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
            { name: "JavaScript", icon: "devicon-javascript-plain colored" },
            { name: "Firebase", icon: "devicon-firebase-plain colored" },
        ],
        image: "/images/img_for_unishare.jpg",
        link: "https://github.com/mizu20040814/UniShare_forGitHub",
    },
    {
        id: "tabit",
        title: "Tabit",
        description:
            "Tabit is a Chrome extension that organizes your tabs based on viewing time or the order they were opened, with automatic grouping for better clarity. It also supports priority tab settings and keyboard shortcuts, offering a smoother and more efficient browsing experience.",
        technologies: [
            { name: "HTML", icon: "devicon-html5-plain colored" },
            { name: "CSS", icon: "devicon-css3-plain colored" },
            { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
            { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        ],
        image: "/images/img_for_hacku.jpg",
        link: "https://hacku.yahoo.co.jp/hacku2025_osaka/",
        award: "Excellence Award at Open Hack U 2025 OSAKA, organized by LINE Yahoo.",
        featured: true,
    },
    {
        id: "portfolio",
        title: "PortFolio",
        description:
            "This portfolio website was developed using HTML, CSS, Bootstrap, JavaScript, and Node.js. It is hosted on XServer, and deployed with careful attention to performance and responsive design across various devices.",
        technologies: [
            { name: "HTML", icon: "devicon-html5-plain colored" },
            { name: "CSS", icon: "devicon-css3-plain colored" },
            { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
            { name: "JavaScript", icon: "devicon-javascript-plain colored" },
            { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        ],
        image: "/images/granville_island_L.jpg",
        link: "https://github.com/mizu20040814/PortFolio",
        thanks: [
            { label: "Unsplash — Images", url: "https://unsplash.com/ja" },
            {
                label: "NORTH STREET — Design Reference",
                url: "https://northstreetcreative.com/",
            },
        ],
    },
];
