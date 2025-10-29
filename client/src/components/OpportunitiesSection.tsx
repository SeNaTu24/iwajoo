import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Briefcase } from "lucide-react";

const opportunities = [
    {
        company: "Flutterwave AI",
        role: "AI Research Engineer",
        location: "Lagos, Nigeria",
        level: "Mid-Level",
        type: "Full-time",
    },
    {
        company: "Andela AI Labs",
        role: "Machine Learning Engineer",
        location: "Nairobi, Kenya",
        level: "Senior",
        type: "Full-time",
    },
    {
        company: "African AI Initiative",
        role: "AI Policy Researcher",
        location: "Cape Town, SA",
        level: "Junior",
        type: "Contract",
    },
    {
        company: "Kuda Bank AI",
        role: "AI Product Manager",
        location: "Remote (Africa)",
        level: "Mid-Level",
        type: "Full-time",
    },
    {
        company: "Zindi Platform",
        role: "Data Science Lead",
        location: "Johannesburg, SA",
        level: "Senior",
        type: "Full-time",
    },
    {
        company: "Local Language AI",
        role: "NLP Developer",
        location: "Accra, Ghana",
        level: "Mid-Level",
        type: "Full-time",
    },
];

const getLevelColor = (level: string) => {
    switch (level) {
        case "Junior":
            return "bg-chart-3/10 text-chart-3";
        case "Mid-Level":
            return "bg-chart-1/10 text-chart-1";
        case "Senior":
            return "bg-chart-2/10 text-chart-2";
        default:
            return "bg-secondary text-secondary-foreground";
    }
};

export default function OpportunitiesSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                        <div className="text-center md:text-left md:max-w-2xl">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                                Build Africa's AI Future
                            </h2>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 md:px-0">
                                Connect with leading African AI companies and startups. 
                                Build your career while contributing to Africa's 
                                technological advancement and solving local challenges.
                            </p>
                        </div>
                        <div className="w-full md:w-auto">
                            <Button
                                size="lg"
                                className="w-full md:w-auto bg-primary hover:bg-primary/90"
                            >
                                View Opportunities
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button
                            variant="outline"
                            size="sm"
                            data-testid="filter-all"
                        >
                            All Roles
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            data-testid="filter-junior"
                        >
                            Junior
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            data-testid="filter-mid"
                        >
                            Mid-Level
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            data-testid="filter-senior"
                        >
                            Senior
                        </Button>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-12">
                    {opportunities.map((job, i) => (
                        <Card
                            key={i}
                            className="hover-elevate"
                            data-testid={`card-job-${i}`}
                        >
                            <CardHeader className="gap-1 space-y-0 pb-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="p-2 rounded-md bg-primary/10">
                                        <Building2 className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-sm font-medium text-muted-foreground">
                                        {job.company}
                                    </span>
                                </div>
                                <CardTitle className="text-lg">
                                    {job.role}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex flex-wrap items-center gap-2">
                                    <Badge
                                        className={getLevelColor(job.level)}
                                        data-testid={`badge-level-${i}`}
                                    >
                                        {job.level}
                                    </Badge>
                                    <Badge variant="secondary">
                                        {job.type}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    {job.location}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    variant="outline"
                                    data-testid={`button-apply-${i}`}
                                >
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button size="lg" data-testid="button-post-opportunity">
                        <Briefcase className="h-5 w-5 mr-2" />
                        Post an Opportunity
                    </Button>
                </div>
            </div>
        </section>
    );
}
