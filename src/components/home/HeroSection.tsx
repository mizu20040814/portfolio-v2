"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="h-screen flex items-center bg-hero -mt-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                        className="text-5xl md:text-6xl font-normal"
                    >
                        Hello World,
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.7,
                        }}
                        className="pt-6 text-lg md:text-xl"
                    >
                        Code is the spell.
                        <br />
                        Programming is the magic.
                        <br />
                        I&apos;m a programmer — a wizard of the digital realm.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
