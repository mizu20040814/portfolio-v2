import { works } from "@/data/works";

export function getWork(id: string) {
    return works.find((work) => work.id === id);
}

export function workPath(id: string) {
    return `/works/${id}`;
}

// 一覧と詳細で同じ作品の画像に付ける view-transition-name（1ページに同じ名前は1つだけ）
export function workImageTransitionName(id: string) {
    return `work-image-${id}`;
}
