// Technology used in a project
export interface Technology {
    name: string;
    icon: string;
}

// Award shown on a work
export interface Award {
    title: string;
    event: string;
    organizer: string;
}

// Profile text shared across pages
export interface Profile {
    name: string;
    university: string;
    faculty: string;
    department: string;
    birthDate: string; // YYYY-MM-DD
    hometown: string;
    currentCity: string;
    email: string;
    github: string;
    bio: string;
}

// Work project type definition
export interface Work {
    id: string;
    title: string;
    description: string;
    technologies: Technology[];
    image: string;
    link?: string;
    award?: Award;
    featured?: boolean; // Home の Works に載せる
    thanks?: {
        label: string;
        url: string;
    }[];
}

// Skill type definition
export interface Skill {
    name: string;
    icon: string; // public/icons/ 内の SVG ファイル名（拡張子なし、例: "html5-plain"）
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}
