import { TimelineEntry } from "@/types";

// About の Timeline。新しいものが上。日付と文面はここだけを直せばよい
// （Vault の Profile ノートの「経歴」と同じ内容。内定先は載せない）
export const timeline: TimelineEntry[] = [
    {
        date: "2026-06",
        label: "Jun 2026",
        title: "Scored 800 on the TOEIC",
    },
    {
        date: "2026-03",
        label: "Mar 2026",
        title: "Joined a research lab",
        description:
            "Graduation research: automatically discovering cross-disciplinary connections between conference presentations.",
    },
    {
        date: "2025-11",
        label: "Nov 2025",
        title: "Released Ryoshin-reki and a student web media site",
        description:
            "A daily calendar app for Doshisha's 150th anniversary and the web media that delivers its updates.",
    },
    {
        date: "2025-08",
        label: "Aug 2025",
        title: "Built Rakuten Shareable at Rakuten Group's summer job program",
        description:
            "A one-week team program. I was in charge of the frontend.",
    },
    {
        date: "2025-05",
        label: "May 2025",
        title: "Certified as an official English-speaking crew member at USJ",
        description:
            "Recognized for English proficiency and hospitality in guest interactions.",
    },
    {
        date: "2025-04",
        label: "Apr 2025",
        title: "Joined the Doshisha ROHM Memorial Project",
        description:
            "A one-year project team developing an app for Doshisha's 150th anniversary.",
    },
    {
        date: "2025-03",
        label: "Mar 2025",
        title: "Excellence Award at Open Hack U 2025 OSAKA",
        description:
            "Built Tabit, a Chrome extension that organizes tabs, at a hackathon organized by LINE Yahoo.",
    },
    {
        date: "2023-08",
        label: "Aug 2023",
        title: "Started as a crew member at Universal Studios Japan",
        description:
            "1UP Factory in Super Nintendo World: merchandise sales and guest service.",
    },
    {
        date: "2023-04",
        label: "Apr 2023",
        title: "Entered Doshisha University",
        description:
            "Faculty of Science and Engineering, Department of Intelligent Information Engineering and Sciences. Expected to graduate in March 2027.",
    },
];
