import { SkillCategory } from "@/types";

// Vault の Profile（技術スタック・スキル）に合わせた一覧
export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: "html5-plain" },
            { name: "CSS", icon: "css3-plain" },
            { name: "JavaScript", icon: "javascript-plain" },
            { name: "TypeScript", icon: "typescript-plain" },
            { name: "React", icon: "react-original" },
            { name: "Next.js", icon: "nextjs-plain" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: "nodejs-plain" },
            { name: "Express", icon: "express-original" },
            { name: "Ruby on Rails", icon: "rails-plain" },
            { name: "Go", icon: "go-plain" },
            { name: "Firebase", icon: "firebase-plain" },
            { name: "Supabase", icon: "supabase-original" },
        ],
    },
    {
        title: "Others",
        skills: [
            { name: "Python", icon: "python-plain" },
            { name: "Java", icon: "java-plain" },
            { name: "C", icon: "c-plain" },
            { name: "C++", icon: "cplusplus-plain" },
            { name: "MATLAB", icon: "matlab-plain" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "VSCode", icon: "vscode-plain" },
            { name: "Git", icon: "git-plain" },
            { name: "GitHub", icon: "github-original" },
        ],
    },
];
