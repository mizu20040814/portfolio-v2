import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: "html5-plain" },
            { name: "CSS", icon: "css3-plain" },
            { name: "Bootstrap", icon: "bootstrap-plain" },
            { name: "JavaScript", icon: "javascript-plain" },
            { name: "TypeScript", icon: "typescript-plain" },
            { name: "React", icon: "react-original" },
            { name: "Flutter", icon: "flutter-plain" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: "nodejs-plain" },
            { name: "Firebase", icon: "firebase-plain" },
            { name: "Java Servlet", icon: "java-plain" },
        ],
    },
    {
        title: "Others",
        skills: [
            { name: "Java", icon: "java-plain" },
            { name: "Python", icon: "python-plain" },
            { name: "C", icon: "c-plain" },
            { name: "C++", icon: "cplusplus-plain" },
        ],
    },
    {
        title: "Tools",
        skills: [
            {
                name: "Visual Studio",
                icon: "visualstudio-plain",
            },
            { name: "VSCode", icon: "vscode-plain" },
            { name: "Git", icon: "git-plain" },
            { name: "GitHub", icon: "github-original" },
            { name: "Figma", icon: "figma-plain" },
        ],
    },
];
