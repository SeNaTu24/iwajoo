import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useRoute } from "wouter";

const blogContent = {
    1: {
        title: "The Rise of AI in African Healthcare: Transforming Patient Care",
        author: "Dr. Amina Kone",
        date: "December 10, 2024",
        readTime: "5 min read",
        category: "Healthcare",
        image: "/healthcare.avif",
        content: `
            <p>Across the African continent, artificial intelligence is quietly revolutionizing healthcare delivery, bringing hope to millions who previously had limited access to quality medical care. From the bustling hospitals of Lagos to remote clinics in rural Kenya, AI-powered solutions are bridging gaps that have existed for decades.</p>

            <h2>Diagnostic Revolution in Remote Areas</h2>
            <p>In many African countries, the shortage of medical specialists has been a persistent challenge. However, AI-powered diagnostic tools are changing this narrative. In Ghana, mobile health units equipped with AI-enabled imaging devices can now detect tuberculosis with 95% accuracy, even in areas where radiologists are scarce.</p>

            <p>Dr. Kwame Osei, a physician working in rural Ghana, shares his experience: "Before AI diagnostics, we had to send patients to Accra for X-ray analysis, which could take weeks. Now, we get results in minutes, and treatment can begin immediately."</p>

            <h2>Telemedicine Connecting Continents</h2>
            <p>The COVID-19 pandemic accelerated the adoption of telemedicine across Africa, but AI has made these platforms more intelligent and accessible. Language barriers, once a significant obstacle, are being overcome through real-time translation AI that supports local languages like Swahili, Yoruba, and Amharic.</p>

            <p>In Nigeria, the startup HealthConnect has developed an AI chatbot that provides preliminary health assessments in over 10 local languages, helping patients understand when they need immediate medical attention versus home care.</p>

            <h2>Predictive Analytics for Public Health</h2>
            <p>African governments are leveraging AI for disease surveillance and outbreak prediction. South Africa's National Institute for Communicable Diseases uses machine learning algorithms to analyze patterns in disease reporting, helping predict and prevent outbreaks before they spread.</p>

            <p>This proactive approach proved invaluable during recent cholera outbreaks in several East African countries, where AI models helped authorities deploy resources more effectively and contain the spread.</p>

            <h2>Challenges and Opportunities</h2>
            <p>Despite these advances, challenges remain. Internet connectivity, data privacy concerns, and the need for local AI talent are ongoing issues. However, initiatives like Iwajoo are working to address these challenges by training local AI advocates and ensuring that technology development is led by Africans, for Africans.</p>

            <p>The future of AI in African healthcare looks promising. With continued investment in infrastructure and education, AI has the potential to leapfrog traditional healthcare limitations and create a more equitable health system across the continent.</p>

            <p>As we move forward, it's crucial that these AI solutions are developed with African contexts in mind, respecting local cultures and addressing the specific health challenges our communities face.</p>
        `
    },
    2: {
        title: "Building Inclusive AI: Lessons from African Language Models",
        author: "Prof. Kwame Asante",
        date: "December 8, 2024",
        readTime: "7 min read",
        category: "Research",
        image: "/African lang model.avif",
        content: `
            <p>The global AI revolution has largely been dominated by English-language models, leaving billions of speakers of other languages behind. However, African researchers and technologists are changing this narrative by developing AI systems that understand and process local languages, making technology truly accessible to all Africans.</p>

            <h2>The Language Gap in AI</h2>
            <p>Africa is home to over 2,000 languages, yet most AI systems can only process a handful of them. This linguistic divide has created a digital barrier that prevents millions of Africans from benefiting from AI-powered services like voice assistants, translation tools, and automated customer service.</p>

            <p>Research from the University of Cape Town shows that only 5% of African languages have sufficient digital resources for training robust AI models. This scarcity has motivated a new generation of African AI researchers to take action.</p>

            <h2>Pioneering Projects Across the Continent</h2>
            <p>In Kenya, the AI research lab at the University of Nairobi has developed "Swahili-GPT," a language model specifically trained on Swahili text from newspapers, literature, and social media. The model can generate coherent Swahili text and answer questions in the language with remarkable accuracy.</p>

            <p>"We realized that if we don't build these tools ourselves, our languages will be left behind in the AI age," explains Dr. Grace Wanjiku, lead researcher on the project.</p>

            <p>Similarly, researchers in Nigeria have created language models for Yoruba and Igbo, while teams in Ethiopia are working on Amharic language processing. These efforts are not just academic exercises—they have real-world applications.</p>

            <h2>Real-World Impact</h2>
            <p>Local language AI models are already making a difference in various sectors:</p>

            <ul>
                <li><strong>Education:</strong> AI tutors that can explain complex concepts in local languages, making STEM education more accessible</li>
                <li><strong>Healthcare:</strong> Medical chatbots that can provide health information in languages patients understand</li>
                <li><strong>Agriculture:</strong> Voice-activated systems that provide farming advice in local dialects</li>
                <li><strong>Government Services:</strong> Automated systems that can process citizen requests in multiple African languages</li>
            </ul>

            <h2>Technical Challenges and Solutions</h2>
            <p>Building AI models for African languages comes with unique challenges. Many African languages are tonal, meaning that the pitch of a word can change its meaning entirely. Traditional AI models struggle with these nuances.</p>

            <p>Researchers at the University of the Witwatersrand have developed novel approaches to handle tonal languages, using acoustic features alongside text to better understand meaning and context.</p>

            <p>Another challenge is the lack of standardized writing systems for some languages. The team at Makerere University in Uganda has created innovative solutions that can work with multiple writing conventions for the same language.</p>

            <h2>Community-Driven Development</h2>
            <p>What makes African language AI development unique is its community-driven approach. Unlike big tech companies that develop AI in isolation, African researchers actively involve native speakers in the development process.</p>

            <p>In Ghana, the Akan language model was developed with input from traditional storytellers, linguists, and community elders. This collaborative approach ensures that the AI understands not just the words, but the cultural context behind them.</p>

            <h2>The Path Forward</h2>
            <p>The success of these projects has attracted international attention and funding. Google's AI for Social Good program has partnered with several African universities to expand language model development.</p>

            <p>However, the most important factor in this movement's success is the growing community of African AI researchers who are committed to ensuring that AI serves all Africans, regardless of the language they speak.</p>

            <p>As we continue to build these inclusive AI systems, we're not just creating technology—we're preserving and celebrating the rich linguistic diversity that makes Africa unique. The future of AI is multilingual, and Africa is leading the way.</p>
        `
    },
    3: {
        title: "AI Ethics in African Context: Building Responsible Technology",
        author: "Fatima Hassan",
        date: "December 5, 2024",
        readTime: "6 min read",
        category: "Ethics",
        image: "/ai ethics.avif",
        content: `
            <p>As artificial intelligence becomes increasingly prevalent across Africa, the need for ethical frameworks that reflect African values and address continent-specific challenges has never been more urgent. From data privacy in informal economies to algorithmic bias in hiring practices, African technologists are pioneering approaches to responsible AI development.</p>

            <h2>Ubuntu Philosophy in AI Development</h2>
            <p>The African philosophy of Ubuntu—"I am because we are"—offers a unique lens for approaching AI ethics. Unlike Western individualistic approaches to technology ethics, Ubuntu emphasizes collective responsibility and community welfare.</p>

            <p>This philosophy is being integrated into AI development processes across the continent. In South Africa, the AI Institute has developed the "Ubuntu AI Framework," which requires all AI projects to consider their impact on community cohesion and collective well-being.</p>

            <h2>Data Privacy in Informal Economies</h2>
            <p>One of the unique challenges in African AI ethics is protecting privacy in informal economies where traditional data protection models don't apply. In Kenya, where mobile money transactions through M-Pesa generate vast amounts of data, researchers are developing privacy-preserving AI techniques that can provide insights without compromising individual privacy.</p>

            <p>Dr. Amara Okafor from the University of Lagos explains: "We can't simply copy European GDPR models. We need frameworks that understand how data flows in African contexts, including informal markets and community-based systems."</p>

            <h2>Addressing Algorithmic Bias</h2>
            <p>Algorithmic bias is a global problem, but it manifests differently in African contexts. Facial recognition systems trained primarily on lighter-skinned faces perform poorly on African populations. Credit scoring algorithms developed in Western contexts may not accurately assess creditworthiness in African informal economies.</p>

            <p>African researchers are developing bias detection tools specifically designed for African contexts. The Ghana AI Lab has created testing frameworks that evaluate AI systems across different ethnic groups, languages, and socioeconomic backgrounds common in West Africa.</p>

            <h2>Cultural Sensitivity in AI Applications</h2>
            <p>AI systems must respect African cultural values and traditions. In many African societies, certain information is considered sacred or should only be shared within specific community contexts. AI systems need to understand and respect these cultural boundaries.</p>

            <p>For example, in some East African communities, health information about reproductive issues should only be discussed with same-gender healthcare providers. AI health chatbots are being designed to recognize these cultural preferences and route conversations appropriately.</p>

            <h2>Governance and Regulation</h2>
            <p>African governments are taking proactive approaches to AI governance. Rwanda has established one of the world's first national AI policies, emphasizing ethical development and deployment of AI systems.</p>

            <p>The African Union is developing continent-wide AI ethics guidelines that member states can adapt to their local contexts. These guidelines emphasize:</p>

            <ul>
                <li>Transparency in AI decision-making processes</li>
                <li>Accountability for AI system outcomes</li>
                <li>Fairness across different population groups</li>
                <li>Respect for human dignity and rights</li>
                <li>Environmental sustainability of AI systems</li>
            </ul>

            <h2>Community Participation in AI Governance</h2>
            <p>What sets African AI ethics apart is the emphasis on community participation. Traditional African governance systems emphasize consensus-building and community input in decision-making.</p>

            <p>In Nigeria, the National Information Technology Development Agency has established "AI Ethics Councils" that include traditional rulers, religious leaders, and community representatives alongside technologists and policymakers.</p>

            <h2>Environmental Considerations</h2>
            <p>Africa faces unique environmental challenges, and AI development must consider these constraints. The continent has limited electricity infrastructure, making energy-efficient AI systems crucial.</p>

            <p>Researchers at the University of Cape Town are developing "Green AI" techniques that reduce the computational requirements of AI models, making them more suitable for deployment in resource-constrained African environments.</p>

            <h2>Building Ethical AI Talent</h2>
            <p>Perhaps most importantly, Africa is investing in building a generation of AI practitioners who understand both the technical and ethical dimensions of AI development.</p>

            <p>Universities across the continent are integrating ethics courses into their AI and computer science curricula. Organizations like Iwajoo are providing training programs that help AI practitioners understand the ethical implications of their work.</p>

            <h2>The Way Forward</h2>
            <p>As Africa continues to embrace AI technology, the continent has an opportunity to lead the world in demonstrating how AI can be developed and deployed ethically. By grounding AI ethics in African values and addressing continent-specific challenges, African technologists are creating models that could benefit the global AI community.</p>

            <p>The future of AI ethics is not just about preventing harm—it's about ensuring that AI systems actively contribute to human flourishing and community well-being. Africa's approach to AI ethics offers valuable lessons for the rest of the world.</p>
        `
    }
};

export default function BlogPost() {
    const [match, params] = useRoute("/blog/:id");
    const postId = params?.id ? parseInt(params.id) : null;
    const post = postId ? blogContent[postId as keyof typeof blogContent] : null;

    if (!post) {
        return (
            <div className="min-h-screen">
                <Header />
                <main className="pt-16 py-20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
                        <Button onClick={() => window.location.href = '/blog'}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Blog
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-16">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
                    <Button 
                        variant="ghost" 
                        onClick={() => window.location.href = '/blog'}
                        className="mb-8"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blog
                    </Button>

                    <div className="mb-8">
                        <Badge className="mb-4">{post.category}</Badge>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-6">{post.title}</h1>
                        
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {post.readTime}
                            </div>
                        </div>

                        <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-64 sm:h-96 object-cover rounded-lg mb-8"
                        />
                    </div>

                    <div 
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </main>
            <Footer />
        </div>
    );
}