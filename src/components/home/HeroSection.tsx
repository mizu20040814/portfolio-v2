import { preload } from "react-dom";

// ヒーロー背景（.bg-hero の画像）は LCP 候補。CSS 背景のままだと CSS を読むまで
// 取得が始まらないので、<head> に preload（fetchpriority=high）を出して先に取りに行く。
const HERO_IMAGE = "/images/granville_island_L.webp";

export default function HeroSection() {
    preload(HERO_IMAGE, { as: "image", fetchPriority: "high" });

    return (
        <section className="h-svh flex items-center bg-hero -mt-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-white">
                    <h1
                        className="hero-fade-up text-5xl md:text-6xl font-normal"
                        style={{ animationDelay: "0.3s" }}
                    >
                        Hello World,
                    </h1>
                    <p
                        className="hero-fade-up pt-6 text-lg md:text-xl"
                        style={{ animationDelay: "0.7s" }}
                    >
                        Code is the spell.
                        <br />
                        Programming is the magic.
                        <br />
                        I&apos;m a programmer — a wizard of the digital realm.
                    </p>
                </div>
            </div>
        </section>
    );
}
