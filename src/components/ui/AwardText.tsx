import { Award } from "@/types";

// 受賞の一文。works.ts の award から組み立てる
export default function AwardText({ award }: { award: Award }) {
    return (
        <p className="font-bold mb-4">
            Received the <span className="text-accent">{award.title}</span> at{" "}
            {award.event},
            <br />
            organized by {award.organizer}.
        </p>
    );
}
