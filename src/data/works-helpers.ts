import { works } from "@/data/works";

export function getWork(id: string) {
    return works.find((work) => work.id === id);
}

export function workPath(id: string) {
    return `/works/${id}`;
}
