"use client";

import { useState } from "react";
import Image from "next/image";

const bassImages = [
    "/images/bass_1.jpg",
    "/images/bass_2.jpg",
    "/images/bass_3.jpg",
    "/images/bass_4.jpg",
    "/images/bass_5.jpg",
];

export default function HobbySection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? bassImages.length - 1 : prev - 1,
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === bassImages.length - 1 ? 0 : prev + 1,
        );
    };

    return (
        <section className="flex items-center bg-gray-900" id="hobby">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl text-white">
                        <span className="custom-borderline animate-border">
                            My Hobby
                        </span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image Carousel */}
                    <div className="relative h-96">
                        <div className="relative w-full h-full overflow-hidden">
                            {bassImages.map((img, index) => (
                                <Image
                                    key={img}
                                    src={img}
                                    alt={`Bass guitar ${index + 1}`}
                                    fill
                                    className={`object-cover transition-opacity duration-500 ${
                                        index === currentIndex
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                />
                            ))}
                        </div>
                        {/* Navigation buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-black/70"
                        >
                            &#10094;
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-black/70"
                        >
                            &#10095;
                        </button>
                    </div>

                    {/* Content */}
                    <div className="text-white">
                        <h3 className="text-2xl mb-4">
                            <span className="custom-borderline animate-border">
                                Playing Bass Guitar
                            </span>
                        </h3>
                        <p className="mb-6">
                            For me, music is more than just a hobby — it&apos;s
                            a source of inspiration.
                            <br />I play bass in a band and enjoy discovering
                            new sounds across all kinds of genres.
                        </p>
                        <hr className="my-6 border-gray-600" />
                        <h3 className="text-2xl mb-4">
                            <span className="custom-borderline animate-border">
                                My Playlist
                            </span>
                        </h3>
                        <iframe
                            style={{ borderRadius: 0 }}
                            src="https://open.spotify.com/embed/playlist/6xHYVwrJ1BH2GkhxiHqfpJ?utm_source=generator"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="mt-4"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
