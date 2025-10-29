import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, ExternalLink } from "lucide-react";

const quickQuestions = [
    {
        question: "What is Iwajoo?",
        answer: "Iwajoo is a non-profit dedicated to advancing AI education and advocacy across Africa. We train advocates, support local AI projects, and shape policies so Africans lead the future of AI.",
        action: { text: "Learn More", type: "scroll", target: "about" }
    },
    {
        question: "How can I join the community?",
        answer: "Join our growing community of 3K+ members across 120+ local chapters. Connect with AI advocates, attend events, and contribute to Africa's AI future.",
        action: { text: "Join Now", type: "scroll", target: "contact" }
    },
    {
        question: "What events do you host?",
        answer: "We host AI workshops, panel discussions, webinars, hackathons, and innovation challenges. From AI literacy programs to Lagos AI Week - there's something for everyone.",
        action: { text: "View Events", type: "scroll", target: "initiatives" }
    },
    {
        question: "How can I get involved?",
        answer: "You can join our programs, attend events, contribute to local chapters, or follow our insights on Substack. Every contribution helps advance AI advocacy in Africa.",
        action: { text: "Get Started", type: "scroll", target: "contact" }
    },
    {
        question: "Where can I find AI resources?",
        answer: "Access our curated collection of AI news, tools, learning resources, and insights. From the latest AI developments to our Substack newsletter.",
        action: { text: "Explore Resources", type: "scroll", target: "resources" }
    }
];

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    const handleAction = (action: { text: string; type: string; target: string }) => {
        if (action.type === "scroll") {
            document.getElementById(action.target)?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            {isOpen && (
                <Card className="w-72 sm:w-80 mb-4 shadow-2xl border-primary/20 mx-4 sm:mx-0">
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <MessageCircle className="h-5 w-5 text-primary" />
                                How can we help?
                            </CardTitle>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                    setIsOpen(false);
                                    setSelectedQuestion(null);
                                }}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3 max-h-80 sm:max-h-96 overflow-y-auto p-4">
                        {selectedQuestion === null ? (
                            <>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Quick answers to common questions about Iwajoo:
                                </p>
                                {quickQuestions.map((item, i) => (
                                    <Button
                                        key={i}
                                        variant="outline"
                                        className="w-full text-left justify-start h-auto p-3 text-sm"
                                        onClick={() => setSelectedQuestion(i)}
                                    >
                                        {item.question}
                                    </Button>
                                ))}
                            </>
                        ) : (
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-sm mb-2">
                                        {quickQuestions[selectedQuestion].question}
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {quickQuestions[selectedQuestion].answer}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        onClick={() => handleAction(quickQuestions[selectedQuestion].action)}
                                        className="flex items-center gap-1"
                                    >
                                        {quickQuestions[selectedQuestion].action.text}
                                        <ExternalLink className="h-3 w-3" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setSelectedQuestion(null)}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}
            
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
                aria-label="Open chat"
            >
                {isOpen ? (
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
            </Button>
        </div>
    );
}