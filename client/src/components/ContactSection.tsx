import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageSquare } from "lucide-react";
import { SiX, SiLinkedin, SiTiktok, SiInstagram, SiSubstack } from "react-icons/si";
import { useState } from "react";

export default function ContactSection() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        console.log("Newsletter subscription:", email);
        setEmail("");
    };

    return (
        <section id="contact" className="py-20 md:py-32 relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            Join the Movement
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Be part of Africa's AI revolution. Connect with
                            advocates, innovators, and leaders shaping the
                            future of AI across the continent.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <MessageSquare className="h-5 w-5 text-primary" />
                                    Get in Touch
                                </h3>
                                <Button size="lg" data-testid="button-contact">
                                    Contact Us
                                </Button>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-primary" />
                                    Email
                                </h3>
                                <a
                                    href="mailto:info@iwajoo.org"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    info@iwajoo.org
                                </a>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">
                                    Follow Us
                                </h3>
                                <div className="flex gap-4">
                                    {[
                                        { icon: SiX, label: "X", href: "https://x.com/Iwajoo_" },
                                        {
                                            icon: SiLinkedin,
                                            label: "LinkedIn",
                                            href: "https://www.linkedin.com/company/iwajoo/",
                                        },
                                        {
                                            icon: SiTiktok,
                                            label: "TikTok",
                                            href: "https://www.tiktok.com/@Iwajoo",
                                        },
                                        {
                                            icon: SiInstagram,
                                            label: "Instagram",
                                            href: "https://www.instagram.com/iwajoo_/",
                                        },
                                        {
                                            icon: SiSubstack,
                                            label: "Substack",
                                            href: "https://substack.com/@iwajoo",
                                        },
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="p-3 rounded-lg bg-card hover-elevate active-elevate-2"
                                            data-testid={`link-social-${social.label.toLowerCase()}`}
                                        >
                                            <social.icon className="h-5 w-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="p-8 rounded-lg bg-card">
                            <h3 className="text-2xl font-bold mb-4">
                                Subscribe
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Stay ahead of the curve with the latest AI
                                insights, program announcements, and community
                                stories delivered to your inbox.
                            </p>

                            <div className="space-y-4">
                                <div className="flex gap-2">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        data-testid="input-newsletter-email"
                                    />
                                    <Button
                                        onClick={handleSubscribe}
                                        data-testid="button-subscribe"
                                    >
                                        Subscribe
                                    </Button>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Join 2K+ AI professionals who stay ahead of
                                    the curve
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
