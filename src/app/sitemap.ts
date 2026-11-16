import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { works } from "@/data/works";
import { workPath } from "@/data/works-helpers";

export default function sitemap(): MetadataRoute.Sitemap {
    const workPaths = works.map((work) => workPath(work.id));
    return ["/", "/about", "/works", "/contact", ...workPaths].map((path) => ({
        url: new URL(path, SITE_URL).toString(),
    }));
}
