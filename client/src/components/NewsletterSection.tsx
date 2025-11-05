import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with email service
        setIsSubscribed(true);
        setEmail("");
    };

    return (
        <section className="py-16 sm:py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                <div className="flex justify-center mb-6">
                    <Mail className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Stay Updated on African AI
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                    Get the latest insights, opportunities, and stories from Africa's AI community delivered to your inbox weekly.
                </p>
                
                {isSubscribed ? (
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                        <p className="text-white font-semibold">Thank you for subscribing!</p>
                        <p className="text-white/80 text-sm mt-2">Check your email for confirmation.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        />
                        <Button 
                            type="submit"
                            className="bg-white text-blue-600 hover:bg-white/90 font-semibold"
                        >
                            Subscribe
                        </Button>
                    </form>
                )}
            </div>
        </section>
    );
}