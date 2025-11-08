import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Scale,
    Brain,
    Shield,
    Cpu,
    Sparkles,
    MessageSquare,
} from "lucide-react";

const tracks = [
    {
        icon: Brain,
        name: "Machine Learning Engineer",
        description:
            "Build and deploy ML models for African healthcare, agriculture, and fintech. Contribute to 3+ production models in 6 months.",
        cta: "Volunteer",
    },
    {
        icon: Cpu,
        name: "Data Scientist",
        description:
            "Analyze African datasets to uncover insights for policy and business decisions. Lead 2+ data projects quarterly.",
        cta: "Volunteer",
    },
    {
        icon: Shield,
        name: "Large Language Model Engineer",
        description:
            "Fine-tune and deploy Large Language Models for African languages and contexts. Build multilingual chatbots, translation systems, and AI assistants for local use cases.",
        cta: "Volunteer",
    },
    {
        icon: Scale,
        name: "AI Policy Advocate",
        description:
            "Shape AI regulations with African governments and institutions. Influence 2+ policy documents annually.",
        cta: "Volunteer",
    },
    {
        icon: Sparkles,
        name: "AI Community Builder",
        description:
            "Organize local AI meetups, workshops, and hackathons across Africa.",
        cta: "Volunteer",
    },
    {
        icon: MessageSquare,
        name: "AI Research Contributor",
        description:
            "Contribute to cutting-edge AI research papers focused on African contexts. Co-author 1+ publication annually.",
        cta: "Volunteer",
    },
];

export default function ProgramsSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Volunteer with us
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                        Join our volunteer programs designed to build AI expertise,
                        foster innovation, and create lasting impact across Africa.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tracks.map((track, i) => (
                        <Card
                            key={i}
                            className="hover-elevate"
                            data-testid={`card-track-${i}`}
                        >
                            <CardHeader className="gap-1 space-y-0 pb-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-md bg-primary/10">
                                        <track.icon className="h-5 w-5 text-primary" />
                                    </div>
                                </div>
                                <CardTitle className="text-xl mt-3">
                                    {track.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {track.description}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    variant="outline"
                                    data-testid={`button-join-track-${i}`}
                                >
                                    Volunteer
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
