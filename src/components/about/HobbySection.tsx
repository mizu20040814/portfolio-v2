"use client";

import { useState } from "react";
import Image from "next/image";

const bassImages = [
    "/images/bass_1.webp",
    "/images/bass_2.webp",
    "/images/bass_3.webp",
    "/images/bass_4.webp",
    "/images/bass_5.webp",
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
                    <div
                        className="relative h-96"
                        role="region"
                        aria-roledescription="carousel"
                        aria-label="Bass guitar photos"
                    >
                        <div className="relative w-full h-full overflow-hidden">
                            {bassImages.map((img, index) => (
                                <div
                                    key={img}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={`${index + 1} / ${bassImages.length}`}
                                    aria-hidden={index !== currentIndex}
                                    className={`absolute inset-0 transition-opacity duration-500 ${
                                        index === currentIndex
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Bass guitar ${index + 1}`}
                                        fill
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        fetchPriority={
                                            index === 0 ? undefined : "low"
                                        }
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Navigation buttons */}
                        <button
                            type="button"
                            onClick={prevSlide}
                            aria-label="Previous photo"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-black/70"
                        >
                            <span aria-hidden="true">&#10094;</span>
                        </button>
                        <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="Next photo"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-black/70"
                        >
                            <span aria-hidden="true">&#10095;</span>
                        </button>
                        <p className="sr-only" aria-live="polite">
                            {`Photo ${currentIndex + 1} of ${bassImages.length}`}
                        </p>
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
                            title="Mizuki's playlist on Spotify"
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
