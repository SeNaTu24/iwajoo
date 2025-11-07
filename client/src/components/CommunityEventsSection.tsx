import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Calendar, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const upcomingEvents = [
    {
        topic: "Making a Case for Local Language Models in Africa",
        participants: ["iwájóó Team", "AI Researchers"],
        date: "Nov 19, 2024",
        time: "2:00 PM - 4:00 PM GMT+1",
        category: "Workshop",
        link: "https://bit.ly/4onaMPL"
    },
];

const pastEvents = [
    {
        topic: "AI Ethics in African Context - Webinar Series",
        participants: ["Dr. Fatima Okonkwo", "Prof. Mandla Ndaba"],
        category: "Webinar",
    },
    {
        topic: "Nairobi Tech Summit - AI Panel Discussion",
        participants: ["Industry Leaders", "Researchers"],
        category: "Panel",
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
                        We host events that connect and inspire, from AI workshops to panel discussions, 
                        webinars, hackathons, and innovation challenges across Africa.
                    </p>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                                <h3 className="text-2xl font-semibold mb-6 text-primary">Upcoming Events</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {upcomingEvents.map((event, i) => (
                                        <Card key={`upcoming-${i}`} className="hover-elevate transition-all duration-300">
                                            <CardHeader className="gap-1 space-y-0">
                                                <Badge className="w-fit mb-3" variant="secondary">
                                                    {event.category}
                                                </Badge>
                                                <CardTitle className="text-lg">
                                                    {event.topic}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div className="space-y-2 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="h-4 w-4" />
                                                        {event.date}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="h-4 w-4" />
                                                        {event.time}
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button 
                                                    className="w-full"
                                                    onClick={() => event.link && window.open(event.link, '_blank')}
                                                >
                                                    Register Now
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-primary">Past Events</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {pastEvents.map((event, i) => (
                                        <Card key={`past-${i}`} className="hover-elevate transition-all duration-300">
                                            <CardHeader className="gap-1 space-y-0">
                                                <Badge className="w-fit mb-3" variant="secondary">
                                                    {event.category}
                                                </Badge>
                                                <CardTitle className="text-lg">
                                                    {event.topic}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                            </CardContent>
                                            <CardFooter>
                                                <Button variant="outline" className="w-full">
                                                    Watch Highlights
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                                </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="upcoming" className="transition-all duration-300">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {upcomingEvents.map((event, i) => (
                                <Card
                                    key={i}
                                    className="hover-elevate transition-all duration-300"
                                    data-testid={`card-upcoming-event-${i}`}
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
                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4" />
                                                {event.time}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            className="w-full"
                                            data-testid={`button-register-${i}`}
                                            onClick={() => event.link && window.open(event.link, '_blank')}
                                        >
                                            Register Now
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="past" className="transition-all duration-300">
                        <div className="grid md:grid-cols-2 gap-6">
                            {pastEvents.map((event, i) => (
                                <Card
                                    key={i}
                                    className="hover-elevate transition-all duration-300"
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
                                    <CardContent className="space-y-4">
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                            data-testid={`button-watch-${i}`}
                                        >
                                            Watch Highlights
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}