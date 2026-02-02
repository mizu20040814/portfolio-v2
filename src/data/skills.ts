import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: "devicon-html5-plain colored" },
            { name: "CSS", icon: "devicon-css3-plain colored" },
            { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
            { name: "JavaScript", icon: "devicon-javascript-plain colored" },
            { name: "TypeScript", icon: "devicon-typescript-plain colored" },
            { name: "React", icon: "devicon-react-original colored" },
            { name: "Flutter", icon: "devicon-flutter-plain colored" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: "devicon-nodejs-plain colored" },
            { name: "Firebase", icon: "devicon-firebase-plain colored" },
            { name: "Java Servlet", icon: "devicon-java-plain colored" },
        ],
    },
    {
        title: "Others",
        skills: [
            { name: "Java", icon: "devicon-java-plain colored" },
            { name: "Python", icon: "devicon-python-plain colored" },
            { name: "C", icon: "devicon-c-plain colored" },
            { name: "C++", icon: "devicon-cplusplus-plain colored" },
        ],
    },
    {
        title: "Tools",
        skills: [
            {
                name: "Visual Studio",
                icon: "devicon-visualstudio-plain colored",
            },
            { name: "VSCode", icon: "devicon-vscode-plain colored" },
            { name: "Git", icon: "devicon-git-plain colored" },
            { name: "GitHub", icon: "devicon-github-original colored" },
            { name: "Figma", icon: "devicon-figma-plain colored" },
        ],
    },
];
