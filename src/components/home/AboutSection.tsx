import Link from "next/link";

export default function AboutSection() {
    return (
        <section
            data-reveal="0.3"
            className="min-h-screen flex items-center bg-gray-900"
            id="aboutme"
        >
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto text-white">
                    <h2 className="text-3xl md:text-4xl">
                        <span
                            className="custom-borderline"
                        >
                            About Me
                        </span>
                    </h2>
                    <h3 className="pt-6 text-2xl">
                        <span
                            className="custom-borderline"
                        >
                            Mizuki Tamura
                        </span>
                    </h3>
                    <p className="pt-6">
                        Doshisha University Faculty of Science and Engineering
                        <br />
                        Department of Intelligent Information Engineering and
                        Sciences
                        <br />
                        20 years old, born in Nagasaki, now living in Kyoto
                    </p>
                    <hr className="my-6 border-gray-600" />
                    <p>
                        I am currently learning web application development,
                        mainly using JavaScript and Firebase through personal
                        projects. I am also familiar with HTML, CSS, Node.js,
                        and Bootstrap. My experience working as a USJ crew
                        member has helped me develop strong communication
                        skills, which I consider one of my key strengths.
                    </p>
                    <Link href="/about">
                        <button className="btn-outline-accent mt-6">
                            View More
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
