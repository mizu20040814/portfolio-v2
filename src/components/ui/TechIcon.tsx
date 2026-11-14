import Image from "next/image";

// 技術アイコン（public/icons/ の SVG。devicon v2.15.1 のフォントと同じ図形と色）。
// 名前は隣のテキストが担うので alt="" にして読み上げ対象から外す。
export default function TechIcon({ icon }: { icon: string }) {
    return (
        <Image
            src={`/icons/${icon}.svg`}
            alt=""
            width={40}
            height={40}
            className="tech-icon"
        />
    );
}
