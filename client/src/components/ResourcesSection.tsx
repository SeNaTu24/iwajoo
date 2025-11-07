import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, Wrench, BookOpen, ExternalLink, Rss } from "lucide-react";

const resources = [
    {
        icon: Newspaper,
        title: "AI News Hub",
        description: "Latest AI developments, research breakthroughs, and industry updates.",
        link: "https://www.artificialintelligence-news.com/",
        external: true
    },
    {
        icon: Rss,
        title: "iwájóó Insights",
        description: "Our latest thoughts, analysis, and perspectives on AI in Africa.",
        link: "https://substack.com/@iwajoo",
        external: true
    },
    {
        icon: Wrench,
        title: "AI Tools Directory",
        description: "Curated collection of AI tools, platforms, and resources for African innovators.",
        link: "https://theresanaiforthat.com/",
        external: true
    },
    {
        icon: BookOpen,
        title: "Learning Resources",
        description: "Courses, tutorials, and guides for AI education and skill development.",
        link: "https://www.coursera.org/browse/data-science/machine-learning",
        external: true
    },
];

export default function ResourcesSection() {
    return (
        <section className="py-20 md:py-32 bg-card/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Knowledge at Your{" "}
                        <span className="text-primary">Fingertips</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Access our curated collection of tools, frameworks,
                        courses, and documentation for different AI domains and
                        specializations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource, i) => (
                        <Card
                            key={i}
                            className="hover-elevate"
                            data-testid={`card-resource-${i}`}
                        >
                            <CardHeader>
                                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                                    <resource.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">
                                    {resource.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {resource.description}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    data-testid={`button-explore-${i}`}
                                    onClick={() => {
                                        if (resource.external) {
                                            window.open(resource.link, '_blank');
                                        } else {
                                            document.getElementById(resource.link.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    {resource.external ? 'Visit Site' : 'Learn More'}
                                    {resource.external && <ExternalLink className="h-4 w-4 ml-2" />}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
