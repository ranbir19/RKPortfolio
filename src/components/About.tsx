import { GraduationCap, Users, Award, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      level: "B.Tech - Artificial Intelligence & Machine Learning",
      institution: "Chandigarh Engineering College (CGC Landran)",
      period: "2023 - 2027",
      status: "Current"
    },
    {
      level: "Classes 11 & 12 - Science",
      institution: "Government Model Senior Secondary School, Chandigarh",
      period: "2021 - 2023",
      status: "Completed"
    },
    {
      level: "Class 10",
      institution: "Saupins School, Panchkula",
      period: "2020 - 2021",
      status: "Completed"
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "Social Media Leadership",
      description: "Managing @med_studyblr_ Instagram page with 45K+ followers, creating engaging educational content and building a strong community."
    },
    {
      icon: Award,
      title: "Class Representative",
      description: "Elected as Class Representative, demonstrating leadership skills and ability to represent and coordinate with fellow students effectively."
    },
    {
      icon: Calendar,
      title: "Event Coordination",
      description: "Successfully coordinated various college events and activities, showcasing strong organizational and management capabilities."
    },
    {
      icon: GraduationCap,
  title: "Under Secretary General, Branding, CGC MUN 25",
      description: "Led branding and communications for CGCMUN25 as Under Secretary General, enhancing event visibility and engagement."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate third-year B.Tech student driven by artificial intelligence, machine learning, 
            and digital innovation. I combine technical expertise with strong leadership and social media 
            management skills to create meaningful impact in both academic and digital spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="font-display font-semibold text-2xl text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey in technology began with a curiosity about how artificial intelligence 
              could solve real-world problems. Currently pursuing B.Tech in AI/ML at CGC Landran, 
              I've developed a unique blend of technical and social media expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Managing @med_studyblr_ has taught me the power of digital communication and community 
              building, skills that perfectly complement my technical background. This experience 
              has shaped my understanding of user engagement and content strategy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a leader in my academic environment, I've coordinated multiple events and served 
              as a Class Representative, developing strong organizational and interpersonal skills 
              that drive my approach to both technology and teamwork.
            </p>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="font-display font-semibold text-2xl text-foreground">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-border shadow-card">
                  <div className="flex-shrink-0">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="font-display font-semibold text-2xl text-foreground mb-8 text-center">
            Educational Background
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-semibold text-lg text-foreground">{edu.level}</h4>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        edu.status === 'Current' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;