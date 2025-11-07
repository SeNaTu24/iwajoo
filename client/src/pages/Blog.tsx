import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "The Rise of AI in African Healthcare: Transforming Patient Care",
        excerpt: "Exploring how artificial intelligence is revolutionizing healthcare delivery across Africa, from diagnostic tools to telemedicine solutions that reach remote communities.",
        author: "Dr. Amina Kone",
        date: "December 10, 2024",
        readTime: "5 min read",
        category: "Healthcare",
        image: "/healthcare.avif",
        featured: true
    },
    {
        id: 2,
        title: "Building Inclusive AI: Lessons from African Language Models",
        excerpt: "How African researchers are developing AI models that understand and process local languages like Swahili, Yoruba, and Amharic, making technology truly accessible.",
        author: "Prof. Kwame Asante",
        date: "December 8, 2024",
        readTime: "7 min read",
        category: "Research",
        image: "/African lang model.avif"
    },
    {
        id: 3,
        title: "AI Ethics in African Context: Building Responsible Technology",
        excerpt: "Examining the unique ethical considerations for AI development in Africa, from data privacy to cultural sensitivity and algorithmic bias.",
        author: "Fatima Hassan",
        date: "December 5, 2024",
        readTime: "6 min read",
        category: "Ethics",
        image: "/ai ethics.avif"
    }
];

const categories = ["All", "Healthcare", "Research", "Ethics"];

export default function Blog() {
    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-16">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: "url('/iwajoo1.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center right",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            iwájóó Blog
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto">
                            Insights, stories, and updates from Africa's AI community. 
                            Discover the latest trends, research, and innovations shaping our continent's tech future.
                        </p>
                    </div>
                </section>

                {/* Featured Post */}
                {featuredPost && (
                    <section className="py-12 bg-gray-50">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="md:flex">
                                    <div className="md:w-1/2">
                                        <img 
                                            src={featuredPost.image} 
                                            alt={featuredPost.title}
                                            className="w-full h-64 md:h-full object-cover"
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-6 md:p-8">
                                        <Badge className="mb-4">{featuredPost.category}</Badge>
                                        <CardTitle className="text-2xl mb-4">{featuredPost.title}</CardTitle>
                                        <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                            <div className="flex items-center gap-1">
                                                <User className="h-4 w-4" />
                                                {featuredPost.author}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                {featuredPost.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {featuredPost.readTime}
                                            </div>
                                        </div>
                                        <Button onClick={() => window.location.href = `/blog/${featuredPost.id}`}>
                                            Read Article <ArrowRight className="h-4 w-4 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </section>
                )}

                {/* Categories */}
                <section className="py-8 border-b">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <Button 
                                    key={category} 
                                    variant={category === "All" ? "default" : "outline"}
                                    size="sm"
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-12">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regularPosts.map((post) => (
                                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <CardHeader>
                                        <Badge className="w-fit mb-2">{post.category}</Badge>
                                        <CardTitle className="text-lg">{post.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                            <div className="flex items-center gap-1">
                                                <User className="h-3 w-3" />
                                                {post.author}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {post.date}
                                            </div>
                                        </div>
                                        <Button 
                                            variant="outline" 
                                            size="sm" 
                                            className="w-full"
                                            onClick={() => window.location.href = `/blog/${post.id}`}
                                        >
                                            Read More
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}