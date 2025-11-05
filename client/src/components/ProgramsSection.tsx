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
        icon: Scale,
        name: "AI Ethics & Advocacy",
        description:
            "Champion responsible AI development that respects African values and needs.",
        members: 450,
    },
    {
        icon: Brain,
        name: "African AI Solutions",
        description:
            "Build AI applications that solve unique challenges across the continent.",
        members: 480,
    },
    {
        icon: Shield,
        name: "Local Language AI",
        description:
            "Develop and promote AI systems for African languages and cultural context.",
        members: 320,
    },
    {
        icon: Cpu,
        name: "Innovation Hub",
        description:
            "Create next-gen AI solutions with African talent and perspective.",
        members: 520,
    },
    {
        icon: Sparkles,
        name: "Community Leadership",
        description:
            "Train AI advocates and build strong local tech communities.",
        members: 600,
    },
    {
        icon: MessageSquare,
        name: "Policy & Impact",
        description:
            "Shape AI policies that empower African nations in the global tech landscape.",
        members: 380,
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
                                    Join Track
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
