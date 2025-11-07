import { Card } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        About <span className="text-primary">iwájóó</span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                        iwájóó is a non-profit dedicated to advancing AI
                        education and advocacy across Africa. We believe every
                        African deserves access to the knowledge and
                        opportunities that AI offers.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20">
                    <Card className="p-6 sm:p-8" data-testid="card-mission">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-semibold">Mission</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            To make AI learning and innovation accessible to
                            every African, fostering communities that build,
                            create, and shape Africa's place in the global AI
                            landscape.
                        </p>
                    </Card>

                    <Card className="p-6 sm:p-8" data-testid="card-vision">
                        <div className="flex items-center gap-3 mb-4">
                            <Eye className="h-8 w-8 text-accent" />
                            <h3 className="text-2xl font-semibold">Vision</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            To build an Africa that is informed, empowered, and
                            actively shaping the future of Artificial
                            Intelligence.
                        </p>
                    </Card>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        {
                            icon: Users,
                            title: "AI Literacy",
                            description:
                                "We make AI understandable and useful for all Africans, from students to professionals.",
                        },
                        {
                            icon: Target,
                            title: "Research & Development",
                            description:
                                "iwájóó supports African-led research that explores how AI can solve local challenges.",
                        },
                        {
                            icon: Eye,
                            title: "Community Engagement",
                            description:
                                "Our growing community connects learners, creators, and experts across Africa.",
                        },
                    ].map((value, i) => (
                        <div
                            key={i}
                            className="text-center space-y-3"
                            data-testid={`value-${i}`}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                                <value.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="text-lg font-semibold">
                                {value.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}