import { timeline } from "@/data/timeline";

// 経歴のタイムライン。順番に意味があるので <ol>、日付は <time>（modern-web-guidance: html）
export default function TimelineSection() {
    return (
        <section className="flex items-center bg-gray-900" id="timeline">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl text-white">
                        <span className="custom-borderline animate-border">
                            Timeline
                        </span>
                    </h2>
                </div>
                <ol className="max-w-3xl mx-auto border-l border-gray-600 text-white">
                    {timeline.map((entry) => (
                        <li key={entry.date + entry.title} className="relative pl-8 pb-10 last:pb-0">
                            <span
                                aria-hidden="true"
                                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
                            />
                            <time dateTime={entry.date} className="text-sm text-gray-300">
                                {entry.label}
                            </time>
                            <h3 className="text-xl mt-1">{entry.title}</h3>
                            {entry.description && (
                                <p className="mt-2 text-gray-200">{entry.description}</p>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
