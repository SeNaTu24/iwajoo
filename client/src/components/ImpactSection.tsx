import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, FileText, Lightbulb, Cpu } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    title: "AI Contract Analyzer",
    category: "AI Tools",
    icon: Code2,
    creator: "Sarah Chen",
    tags: ["NLP", "Legal Tech"],
  },
  {
    title: "Ethics Framework for AGI",
    category: "Research",
    icon: FileText,
    creator: "Dr. James Wilson",
    tags: ["Ethics", "Policy"],
  },
  {
    title: "LLM Fine-tuning Guide",
    category: "Projects",
    icon: Lightbulb,
    creator: "Michael Rodriguez",
    tags: ["GPT", "Tutorial"],
  },
  {
    title: "AI Safety Dashboard",
    category: "AI Tools",
    icon: Cpu,
    creator: "Lisa Park",
    tags: ["Safety", "Monitoring"],
  },
  {
    title: "Bias Detection System",
    category: "Innovation",
    icon: Code2,
    creator: "Alex Kumar",
    tags: ["Fairness", "ML"],
  },
  {
    title: "Legal AI Research Paper",
    category: "Research",
    icon: FileText,
    creator: "Emma Thompson",
    tags: ["Legal", "Analysis"],
  },
];

export default function ImpactSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Community Showcase</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Explore amazing work, innovations, and research created by our talented community members
            across different AI domains.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-xl sm:max-w-2xl mx-auto grid-cols-3 sm:grid-cols-5 mb-8 sm:mb-12 text-xs sm:text-sm">
            <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
            <TabsTrigger value="tools" data-testid="tab-tools">Tools</TabsTrigger>
            <TabsTrigger value="research" data-testid="tab-research">Research</TabsTrigger>
            <TabsTrigger value="projects" data-testid="tab-projects">Projects</TabsTrigger>
            <TabsTrigger value="innovation" data-testid="tab-innovation">Innovation</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <Card key={i} className="hover-elevate transition-all duration-300" data-testid={`card-project-${i}`}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">by {project.creator}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" data-testid={`button-view-project-${i}`}>
                      View Project
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {["tools", "research", "projects", "innovation"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.category.toLowerCase().includes(tab))
                  .map((project, i) => (
                    <Card key={i} className="hover-elevate transition-all duration-300">
                      <CardContent className="pt-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <project.icon className="h-6 w-6 text-primary" />
                          </div>
                          <Badge variant="secondary">{project.category}</Badge>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">by {project.creator}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Project
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}