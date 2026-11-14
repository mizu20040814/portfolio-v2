import { skillCategories } from "@/data/skills";
import TechIcon from "@/components/ui/TechIcon";

export default function SkillSection() {
    return (
        <section
            data-reveal="0.2"
            className="flex items-center bg-white"
            id="skills"
        >
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl mb-8">
                        <span
                            className="custom-borderline"
                        >
                            Skills
                        </span>
                    </h2>

                    <div className="space-y-6">
                        {skillCategories.map((category) => (
                            <div
                                key={category.title}
                                className="card-sharp shadow-md bg-white"
                            >
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-4">
                                        {category.title}
                                    </h3>
                                    <hr className="mb-4" />
                                    <div className="flex flex-wrap gap-6">
                                        {category.skills.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="text-center"
                                            >
                                                <TechIcon icon={skill.icon} />
                                                <div className="mt-1 text-sm">
                                                    {skill.name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
