// Logo is in public folder, no import needed

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/iwajoo_logo.png"
                                alt="Iwajoo logo"
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Empowering Africa through AI advocacy, education, and community building.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <button
                                    onClick={() => {
                                        if (window.location.pathname !== '/') window.location.href = '/';
                                        setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100);
                                    }}
                                    className="hover:text-foreground transition-colors text-left"
                                >
                                    Our Vision
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        if (window.location.pathname !== '/') window.location.href = '/';
                                        setTimeout(() => document.getElementById('initiatives')?.scrollIntoView({ behavior: 'smooth' }), 100);
                                    }}
                                    className="hover:text-foreground transition-colors text-left"
                                >
                                    Programs
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        if (window.location.pathname !== '/') window.location.href = '/';
                                        setTimeout(() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }), 100);
                                    }}
                                    className="hover:text-foreground transition-colors text-left"
                                >
                                    Impact
                                </button>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <button
                                    onClick={() => {
                                        if (window.location.pathname !== '/') window.location.href = '/';
                                        setTimeout(() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' }), 100);
                                    }}
                                    className="hover:text-foreground transition-colors text-left"
                                >
                                    Learning Materials
                                </button>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/SeNaTu24/iwajoo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Blog & Research
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        if (window.location.pathname !== '/') window.location.href = '/';
                                        setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                                    }}
                                    className="hover:text-foreground transition-colors text-left"
                                >
                                    Contact Us
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="https://twitter.com/iwajoo_ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com/company/iwajoo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://iwajoo.substack.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Newsletter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} Iwajoo. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
