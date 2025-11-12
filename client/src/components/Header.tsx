import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: "Our Vision", href: "#about" },
        { label: "Programs", href: "#initiatives" },
        { label: "Impact", href: "#gallery" },
        { label: "Resources", href: "#resources" },
        { label: "Blog", href: "/blog" },
        { label: "Join Us", href: "#contact" },
    ];

    const handleNavigation = (href: string) => {
        if (href.startsWith("#")) {
            if (window.location.pathname !== '/') {
                window.location.href = '/' + href;
            } else {
                const id = href.replace("#", "");
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.location.href = href;
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div
                className="absolute inset-0 bg-background backdrop-blur-md border-b border-border"
                aria-hidden
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                        <a
                            href="/"
                            className="flex items-center"
                            aria-label="iwájóó home"
                        >
                            <img
                                src="/iwajoo_logo.png"
                                alt="iwájóó logo"
                                className="h-8 md:h-10 w-auto object-contain shadow-sm"
                            />
                        </a>
                    </div>

                    <nav
                        aria-label="Primary"
                        className="hidden md:flex items-center gap-6"
                    >
                        {navLinks.map((link, i) => (
                            <button
                                key={i}
                                onClick={() => handleNavigation(link.href)}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 px-2 py-1 rounded"
                                data-testid={`nav-${link.label
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Button
                            className="hidden md:inline-flex bg-primary text-primary-foreground hover:opacity-95 px-4 py-2 rounded-md shadow-sm"
                            data-testid="button-header-join"
                            onClick={() => window.open('https://forms.gle/HM9e44ScizriTFoRA', '_blank')}
                        >
                            Join Community
                        </Button>

                        <button
                            aria-controls="mobile-menu"
                            aria-expanded={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded hover:bg-elevate-1"
                            data-testid="button-mobile-menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div
                        id="mobile-menu"
                        className="md:hidden mt-3 border-t border-border py-4"
                    >
                        <nav className="flex flex-col gap-3 px-2">
                            {navLinks.map((link, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleNavigation(link.href)}
                                    className="text-base text-muted-foreground hover:text-foreground transition-colors text-left px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
                                >
                                    {link.label}
                                </button>
                            ))}

                            <Button 
                                className="w-full mt-2 bg-primary text-primary-foreground"
                                onClick={() => window.open('https://forms.gle/HM9e44ScizriTFoRA', '_blank')}
                            >
                                Join Community
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
