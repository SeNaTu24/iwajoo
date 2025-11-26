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
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import EmbeddedVideoPlayer from "./ui/EmbeddedVideoPlayer";

import { Calendar, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface Event {
    topic: string;
    participants: string[];
    date: string;
    time: string;
    category: string;
    link: string;
    description: string;
    uploadDate: string;
    duration: string;
}

const upcomingEvents: Event[] = [];

const pastEvents = [
    {
        topic: "Making a Case for Local Language Models in Africa",
        participants: ["iwájóó Team", "AI Researchers"],
        date: "Nov 19, 2025",
        time: "2:00 PM - 4:00 PM GMT+1",
        category: "Workshop",
        link: "https://youtu.be/p51ow0bVpfI",
        description:
            "A workshop on the importance of local language models for Africa's development.",
        uploadDate: "2024-11-20T08:00:00+00:00",
        duration: "PT1H23M45S",
    },
];

export default function CommunityEventsSection() {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <section className="py-16 sm:py-20 md:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Events & Highlights
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                        We host events that connect and inspire, from AI
                        workshops to panel discussions, webinars, hackathons,
                        and innovation challenges across Africa.
                    </p>
                </div>

                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                >
                    <TabsList className="grid w-full max-w-md sm:max-w-lg mx-auto grid-cols-3 mb-8 sm:mb-12">
                        <TabsTrigger value="all" data-testid="tab-all">
                            All Events
                        </TabsTrigger>
                        <TabsTrigger
                            value="upcoming"
                            data-testid="tab-upcoming"
                        >
                            Upcoming
                        </TabsTrigger>
                        <TabsTrigger value="past" data-testid="tab-past">
                            Past Events
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="space-y-8">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-primary">
                                    Upcoming Events
                                </h3>
                                {upcomingEvents.length > 0 ? (
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {upcomingEvents.map((event, i) => (
                                            <Card
                                                key={i}
                                                className="hover-elevate transition-all duration-300 border-2 border-border/50"
                                            >
                                                <CardHeader className="gap-1 space-y-0">
                                                    <Badge
                                                        className="w-fit mb-3"
                                                        variant="secondary"
                                                    >
                                                        {event.category}
                                                    </Badge>
                                                    <CardTitle className="text-lg">
                                                        {event.topic}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>
                                                            {event.date}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Clock className="h-4 w-4" />
                                                        <span>
                                                            {event.time}
                                                        </span>
                                                    </div>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button className="w-full">
                                                        Register Now
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <Card className="hover-elevate transition-all duration-300 border-2 border-border/50">
                                        <CardContent className="text-center py-12">
                                            <div className="max-w-md mx-auto">
                                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <Calendar className="h-8 w-8 text-primary" />
                                                </div>
                                                <h4 className="text-lg font-semibold mb-2 text-foreground">
                                                    Stay Tuned for Our Next
                                                    Event
                                                </h4>
                                                <p className="text-muted-foreground text-sm">
                                                    We're always planning
                                                    something exciting! Join our
                                                    community to be the first to
                                                    know about upcoming
                                                    workshops, talks, and AI
                                                    events across Africa.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                            {pastEvents.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-semibold mb-6 text-primary">
                                        Past Events
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {pastEvents.map((event, i) => (
                                            <Card
                                                key={`past-${i}`}
                                                className="hover-elevate transition-all duration-300 border-2 border-border/50"
                                            >
                                                <CardHeader className="gap-1 space-y-0">
                                                    <Badge
                                                        className="w-fit mb-3"
                                                        variant="secondary"
                                                    >
                                                        {event.category}
                                                    </Badge>
                                                    <CardTitle className="text-lg">
                                                        {event.topic}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4"></CardContent>
                                                <CardFooter>
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <Button
                                                                variant="outline"
                                                                className="w-full"
                                                            >
                                                                Watch Highlights
                                                            </Button>
                                                        </DialogTrigger>
                                                        <DialogContent className="max-w-3xl">
                                                            <EmbeddedVideoPlayer
                                                                url={event.link}
                                                                title={
                                                                    event.topic
                                                                }
                                                                description={
                                                                    event.description
                                                                }
                                                                uploadDate={
                                                                    event.uploadDate
                                                                }
                                                                duration={
                                                                    event.duration
                                                                }
                                                            />
                                                        </DialogContent>
                                                    </Dialog>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent
                        value="upcoming"
                        className="transition-all duration-300"
                    >
                        {upcomingEvents.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-6">
                                {upcomingEvents.map((event, i) => (
                                    <Card
                                        key={i}
                                        className="hover-elevate transition-all duration-300 border-2 border-border/50"
                                    >
                                        <CardHeader className="gap-1 space-y-0">
                                            <Badge
                                                className="w-fit mb-3"
                                                variant="secondary"
                                            >
                                                {event.category}
                                            </Badge>
                                            <CardTitle className="text-lg">
                                                {event.topic}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="h-4 w-4" />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Clock className="h-4 w-4" />
                                                <span>{event.time}</span>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full">
                                                Register Now
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <Card className="hover-elevate transition-all duration-300 border-2 border-border/50">
                                <CardContent className="text-center py-12">
                                    <div className="max-w-md mx-auto">
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Calendar className="h-8 w-8 text-primary" />
                                        </div>
                                        <h4 className="text-lg font-semibold mb-2 text-foreground">
                                            Stay Tuned for Our Next Event
                                        </h4>
                                        <p className="text-muted-foreground text-sm">
                                            We're always planning something
                                            exciting! Join our community to be
                                            the first to know about upcoming
                                            workshops, talks, and AI events
                                            across Africa.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </TabsContent>

                    <TabsContent
                        value="past"
                        className="transition-all duration-300"
                    >
                        {pastEvents.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-6">
                                {pastEvents.map((event, i) => (
                                    <Card
                                        key={i}
                                        className="hover-elevate transition-all duration-300 border-2 border-border/50"
                                        data-testid={`card-past-event-${i}`}
                                    >
                                        <CardHeader className="gap-1 space-y-0">
                                            <Badge
                                                className="w-fit mb-3"
                                                variant="secondary"
                                            >
                                                {event.category}
                                            </Badge>
                                            <CardTitle className="text-lg">
                                                {event.topic}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4"></CardContent>
                                        <CardFooter>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className="w-full"
                                                        data-testid={`button-watch-${i}`}
                                                    >
                                                        Watch Highlights
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-3xl">
                                                    <EmbeddedVideoPlayer
                                                        url={event.link}
                                                        title={event.topic}
                                                        description={
                                                            event.description
                                                        }
                                                        uploadDate={
                                                            event.uploadDate
                                                        }
                                                        duration={
                                                            event.duration
                                                        }
                                                    />
                                                </DialogContent>
                                            </Dialog>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground text-lg">
                                    No past events to display yet. Check back
                                    soon!
                                </p>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
