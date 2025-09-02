import { ExternalLink, Github, Brain, Zap, Code, Monitor, Code2, Wrench, Shield } from 'lucide-react';
import BackgroundAnimation from '@/components/ui/BackgroundAnimation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "Mental Health Buddy AI",
      description: "An empathetic AI chat assistant built using Gradio and Azure OpenAI GPT-4.1, providing personalized mental health support through conversational AI. Features include mood tracking, coping strategies, and 24/7 accessibility.",
      technologies: ["Python", "Gradio", "Azure OpenAI", "GPT-4.1", "NLP"],
      icon: Brain,
      category: "AI/ML Project",
      status: "Completed",
    liveUrl: "https://github.com/ranbir19/Mental_Health_Buddy/tree/main",
    githubUrl: "https://github.com/ranbircgc"
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "Comprehensive analytics platform for tracking Instagram engagement metrics, follower growth, and content performance. Built to optimize @med_studyblr_ page management with data-driven insights.",
      technologies: ["React", "TypeScript", "Chart.js", "Instagram API"],
      icon: Zap,
      category: "Web Development",
      status: "In Progress",
      liveUrl: "",
    githubUrl: "https://github.com/ranbircgc"
    },
    {
      title: "AI-Powered Content Generator",
      description: "Automated content creation tool for educational social media posts, leveraging machine learning to generate engaging study tips and motivational content for the medical student community.",
      technologies: ["Python", "OpenAI API", "FastAPI", "React"],
      icon: Code,
      category: "AI/ML Project",
      status: "Planning",
      liveUrl: "",
    githubUrl: "https://github.com/ranbircgc"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 relative overflow-hidden">
      <BackgroundAnimation />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative projects that combine artificial intelligence, machine learning, 
            and social media expertise to create meaningful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="p-6 space-y-4">
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-medium">{project.category}</span>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : project.status === 'In Progress'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Title & Description */}
                <div className="space-y-3">
                  <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4">
                  {project.liveUrl ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="px-3"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="font-display font-semibold text-2xl text-center mb-8">
            Technical Skills
          </h3>
          <div className="space-y-8">
            <div className="rounded-xl bg-card p-6 shadow-md border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="h-6 w-6 text-blue-400" />
                <h4 className="font-semibold text-foreground text-lg">OS</h4>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Windows", "Linux", "macOS"].map((skill, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-blue-800 text-blue-100 font-medium shadow">{skill}</span>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-md border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-6 w-6 text-green-400" />
                <h4 className="font-semibold text-foreground text-lg">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {["C", "C++", "Python", "HTML", "CSS"].map((skill, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-green-800 text-green-100 font-medium shadow">{skill}</span>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-md border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="h-6 w-6 text-yellow-400" />
                <h4 className="font-semibold text-foreground text-lg">Tools & Platforms</h4>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Excel", "Tableau", "VS Code"].map((skill, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-yellow-800 text-yellow-100 font-medium shadow">{skill}</span>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-md border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
                <h4 className="font-semibold text-foreground text-lg">Other Skills</h4>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Basic Cybersecurity", "Basic Software Testing", "Basic Machine Learning"].map((skill, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-purple-800 text-purple-100 font-medium shadow">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;