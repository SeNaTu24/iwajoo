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
                                <a
                                    href="/#about"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Our Vision
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#initiatives"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Programs
                                </a>
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
                                <a
                                    href="/#resources"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Learning Materials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#contact"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="https://x.com/Iwajoo_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors"
                                >
                                    X (Twitter)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/iwajoo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/iwajoo_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} iwájóó. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
