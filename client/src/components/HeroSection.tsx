import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const rotatingTexts = [
        "Unleashing African AI potential",
        "Empowering African AI innovation",
        "Building local AI communities",
        "Shaping Africa's tech future",
        "Training the next AI leaders",
        "Connecting African AI minds"
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
                setIsVisible(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [rotatingTexts.length]);

    useEffect(() => {
        const PARALLAX_MULT = 0.22; // subtle parallax speed
        const SCALE_MULT = 0.00008; // scale per pixel scrolled (~0.08% per 10px)
        const MAX_SCALE_DELTA = 0.06; // cap scale increase to ~6%

        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrolled = window.scrollY;
                const translateY = scrolled * PARALLAX_MULT;
                const scaleDelta = Math.min(
                    scrolled * SCALE_MULT,
                    MAX_SCALE_DELTA
                );
                const scale = 1 + scaleDelta;
                parallaxRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToAbout = () => {
        document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Full screen background image with parallax */}
            <div
                ref={parallaxRef}
                aria-hidden
                className="absolute inset-0 z-0 hero-bg"
                style={{
                    backgroundImage: "url('/iwajoo1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center right",
                    willChange: "transform",
                    transform: "translateZ(0) scale(1.03)",
                }}
            />

            {/* Subtle gradient overlay for depth and text legibility */}
            <div className="absolute inset-0 z-1 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
            <div className="absolute inset-0 z-2 bg-[radial-gradient(ellipse_at_center,_transparent_60%,_rgba(0,0,0,0.35)_100%)]" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 pt-24 sm:pt-32 md:pt-40">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-white">
                        iwájóó
                        <br />
                        <span 
                            className={`bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold drop-shadow-lg transition-all duration-500 transform text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl ${
                                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}
                        >
                            {rotatingTexts[currentTextIndex]}
                        </span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mb-8 sm:mb-10 leading-relaxed px-2 sm:px-4">
                        We train advocates, support local AI projects, and shape
                        policies so that Africans lead, benefit from, and guide
                        the future of artificial intelligence across the
                        continent.
                    </p>

                    <div
                        className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-700 ${
                            mounted
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                        }`}
                    >
                        <Button
                            size="lg"
                            variant="outline"
                            data-testid="button-join-movement"
                            className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                            aria-label="Join the movement"
                            onClick={() => window.open('https://forms.gle/HM9e44ScizriTFoRA', '_blank')}
                        >
                            Join the Movement
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl w-full px-2">
                        {[
                            { value: "1K+", label: "Community Members" },
                            { value: "3", label: "Regions" },
                            { value: "10+", label: "Events" },
                            { value: "5+", label: "Partners" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="space-y-1 sm:space-y-2 text-center"
                                data-testid={`stat-${i}`}
                            >
                                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={scrollToAbout}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-200 p-2 rounded-full"
                    aria-label="Scroll to content"
                    data-testid="button-scroll-down"
                >
                    <ArrowDown className="h-6 w-6 animate-bounce" />
                </button>
            </div>
        </section>
    );
}
