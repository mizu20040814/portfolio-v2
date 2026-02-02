// Technology used in a project
export interface Technology {
    name: string;
    icon: string;
}

// Work project type definition
export interface Work {
    id: string;
    title: string;
    description: string;
    technologies: Technology[];
    image: string;
    link?: string;
    award?: string;
    featured?: boolean;
    thanks?: {
        label: string;
        url: string;
    }[];
}

// Skill type definition
export interface Skill {
    name: string;
    icon: string; // devicon class name
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}
