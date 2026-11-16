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
    grade: string; // 例: "4th year"
    research: string;
    english: string;
    birthDate: string; // YYYY-MM-DD
    hometown: string;
    currentCity: string;
    email: string;
    github: string;
    bio: string;
}

// One section of a work's case study (e.g. Background, Challenges, Results)
export interface CaseStudySection {
    heading: string;
    paragraphs: string[];
}

// Work project type definition
export interface Work {
    id: string;
    title: string;
    description: string;
    technologies: Technology[];
    image: string;
    imagePosition?: string; // object-position（例: "left top"）。省略時は中央
    link?: string;
    award?: Award;
    featured?: boolean; // Home の Works に載せる
    // 作品詳細ページ（/works/[id]）用。書いたものだけ表示する
    period?: string; // 例: "2025.06 – 2025.07"
    team?: string; // 例: "Team of 4"
    role?: string; // 例: "Frontend, Chrome extension logic"
    caseStudy?: CaseStudySection[];
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

// One entry on the About page timeline
export interface TimelineEntry {
    date: string; // <time datetime> の値（YYYY または YYYY-MM）
    label: string; // 表示用の日付（例: "Apr 2023"）
    title: string;
    description?: string;
}
