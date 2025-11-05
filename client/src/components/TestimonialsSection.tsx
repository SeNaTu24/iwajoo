import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Amara Okafor",
        role: "AI Researcher",
        location: "Lagos, Nigeria",
        image: "/api/placeholder/64/64",
        quote: "Iwajoo connected me with like-minded AI enthusiasts across Africa. The community support helped me launch my first AI project focused on local language processing."
    },
    {
        name: "Kwame Asante",
        role: "Data Scientist",
        location: "Accra, Ghana",
        image: "/api/placeholder/64/64",
        quote: "Through Iwajoo's programs, I gained the skills and network needed to transition into AI. Now I'm building solutions for African healthcare challenges."
    },
    {
        name: "Fatima Hassan",
        role: "AI Policy Advocate",
        location: "Cairo, Egypt",
        image: "/api/placeholder/64/64",
        quote: "Iwajoo empowered me to advocate for ethical AI policies in my country. The training and mentorship were invaluable for my advocacy work."
    },
    {
        name: "Thabo Mthembu",
        role: "ML Engineer",
        location: "Cape Town, South Africa",
        image: "/api/placeholder/64/64",
        quote: "The collaborative projects at Iwajoo taught me how AI can solve real African problems. I'm now leading an AI initiative for sustainable agriculture."
    },
    {
        name: "Zara Kimani",
        role: "Tech Entrepreneur",
        location: "Nairobi, Kenya",
        image: "/api/placeholder/64/64",
        quote: "Iwajoo's community gave me the confidence to start my AI startup. The mentorship and resources were crucial for my entrepreneurial journey."
    },
    {
        name: "Omar Diallo",
        role: "AI Student",
        location: "Dakar, Senegal",
        image: "/api/placeholder/64/64",
        quote: "As a beginner, Iwajoo made AI accessible and relevant to my African context. The learning resources and community support are exceptional."
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Voices from Our Community
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Hear from African AI advocates, researchers, and innovators who are building the future with Iwajoo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <Card key={i} className="relative bg-white hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6">
                                <Quote className="h-8 w-8 text-blue-500 mb-4" />
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                        <AvatarFallback>
                                            {testimonial.name.split(" ").map(n => n[0]).join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}