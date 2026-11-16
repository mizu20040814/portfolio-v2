import { Profile } from "@/types";

// プロフィールの文面はここにまとめる。Home・About・Contact・フッター・metadata から参照する。
export const profile: Profile = {
    name: "Mizuki Tamura",
    university: "Doshisha University",
    faculty: "Faculty of Science and Engineering",
    department:
        "Department of Intelligent Information Engineering and Sciences",
    // 年齢はここから計算する（静的生成なので、ビルドした日の年齢になる）
    birthDate: "2004-08-14",
    hometown: "Nagasaki",
    currentCity: "Kyoto",
    email: "mizu20040814@gmail.com",
    github: "https://github.com/mizu20040814",
    bio: "I am currently learning web application development, mainly using JavaScript and Firebase through personal projects. I am also familiar with HTML, CSS, Node.js, and Bootstrap. My experience working as a USJ crew member has helped me develop strong communication skills, which I consider one of my key strengths.",
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
