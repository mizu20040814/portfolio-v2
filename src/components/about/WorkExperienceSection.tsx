import Image from "next/image";

export default function WorkExperienceSection() {
    return (
        <section className="flex items-center bg-white" id="part-time-work">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl">
                        <span className="custom-borderline animate-border">
                            Part-time Work Experience
                        </span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="order-1 lg:order-2 relative h-64 lg:h-96">
                        <Image
                            src="/images/usj_nintendoworld.jpg"
                            alt="Super Nintendo World at USJ"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl mb-4">
                            <span className="custom-borderline animate-border">
                                Crew Member at Universal Studios Japan
                            </span>
                        </h3>
                        <p className="mb-4">
                            I currently work as a crew member at the 1UP Factory
                            in Super Nintendo World, located inside Universal
                            Studios Japan. Through assisting with the sale of
                            character merchandise, I have developed a strong
                            sense of hospitality, teamwork, and the ability to
                            make quick decisions.
                        </p>
                        <p className="mb-4">
                            Working in a fast-paced, high-pressure environment
                            has taught me to stay calm under pressure and to
                            always prioritize providing guests with a memorable
                            and enjoyable experience.
                        </p>
                        <hr className="my-6" />
                        <p>
                            I frequently interact with guests from overseas,
                            which has helped me improve both my intercultural
                            communication and English customer service skills.
                            <br />
                            My English proficiency and hospitality in guest
                            interactions were officially recognized, and I was
                            certified as an official English-speaking crew
                            member by Universal Studios Japan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
