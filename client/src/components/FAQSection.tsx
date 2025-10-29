import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Who can be part of Iwajoo?",
        answer: "Anyone with an interest in AI and a desire to contribute to Africa’s technological growth. Whether you are a student, researcher, developer, or creative, there is a place for you at Iwajoo.",
    },
    {
        question: "What programs does Iwajoo offer?",
        answer: "Iwajoo runs initiatives focused on AI education, research, and community development. These include online workshops, fellowships, collaborations, and storytelling projects that showcase Africa’s growing AI ecosystem.",
    },
    {
        question: "Do I need a background in AI to join?",
        answer: "Not at all. Iwajoo welcomes everyone: learners, thinkers, and innovators at all levels. Your curiosity and willingness to learn are what matter most.",
    },
    {
        question: "How can I get involved?",
        answer: "You can volunteer, collaborate on a project, or join our learning community. Subscribe to our newsletter to stay updated on opportunities, events, and programs.",
    },
    {
        question: "Is Iwajoo available across Africa?",
        answer: "Yes. Iwajoo’s community spans across the continent, with virtual programs and local partnerships that connect Africans wherever they are.",
    },
    {
        question: "How is Iwajoo funded?",
        answer: "Iwajoo is supported by donations, partnerships, and grants that help sustain our mission to make AI accessible and inclusive across Africa.",
    },
    {
        question: "How can I support Iwajoo’s work?",
        answer: "You can support by volunteering, donating, partnering, or sharing our work within your community. Every contribution helps expand AI access across Africa.",
    },
    {
        question: "How do I stay updated?",
        answer: "Subscribe to the Iwajoo newsletter and follow us on our social media channels to stay informed about AI news, community stories, and upcoming initiatives.",
    },
];

export default function FAQSection() {
    return (
        <section id="faq" className="py-20 md:py-32 bg-background">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Got questions? We've got answers. Find everything you
                        need to know about joining our AI community.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            data-testid={`faq-item-${i}`}
                        >
                            <AccordionTrigger className="text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
