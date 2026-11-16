import { Profile } from "@/types";

// プロフィールの文面はここにまとめる。Home・About・Contact・フッター・metadata から参照する。
export const profile: Profile = {
    name: "Mizuki Tamura",
    university: "Doshisha University",
    faculty: "Faculty of Science and Engineering",
    department:
        "Department of Intelligent Information Engineering and Sciences",
    grade: "4th year",
    research:
        "Automatically discovering cross-disciplinary connections between conference presentations",
    english: "TOEIC 800, official English-speaking crew at Universal Studios Japan",
    // 年齢はここから計算する（静的生成なので、ビルドした日の年齢になる）
    birthDate: "2004-08-14",
    hometown: "Nagasaki",
    currentCity: "Kyoto",
    email: "mizu20040814@gmail.com",
    github: "https://github.com/mizu20040814",
    bio: "I am a fourth-year student at Doshisha University who builds web applications with React, Next.js, and TypeScript, along with backends in Go and Supabase. I have shipped products at a hackathon, at a company job program, and in a university project where I developed an app on my own. My experience as an English-speaking crew member at USJ has helped me develop strong communication skills, which I consider one of my key strengths.",
};

// 誕生日から満年齢を計算する
export function getAge(birthDate: string, today: Date = new Date()): number {
    const [y, m, d] = birthDate.split("-").map(Number);
    let age = today.getFullYear() - y;
    const beforeBirthday =
        today.getMonth() + 1 < m ||
        (today.getMonth() + 1 === m && today.getDate() < d);
    if (beforeBirthday) age -= 1;
    return age;
}
