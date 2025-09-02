import { Instagram, Video, TestTube, Users, TrendingUp, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
const Services = () => {
  const services = [{
    icon: Instagram,
    title: "Social Media Management",
    description: "Comprehensive social media strategy and management services including content creation, audience engagement, brand outreach, and growth optimization.",
    features: ["Content Strategy Development", "Daily Content Creation & Posting", "Community Engagement & Management", "Brand Partnerships & Collaborations", "Analytics & Performance Tracking", "Instagram Growth Optimization"],
    highlight: "50K+ Followers Managed"
  }, {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing services for social media content, promotional materials, and educational content with a focus on engagement and visual storytelling.",
    features: ["Promotional Reels & Stories", "Event Recap Videos", "Educational Content Videos", "Social Media Optimized Formats", "Motion Graphics & Animations", "Color Grading & Audio Enhancement"],
    highlight: "Creative Visual Storytelling"
  }, {
    icon: TestTube,
    title: "Testing & QA",
    description: "Comprehensive testing services for websites, applications, and games including manual testing, bug identification, UI/UX feedback, and detailed reporting.",
    features: ["Manual Testing for Web & Mobile", "Bug Identification & Documentation", "UI/UX Evaluation & Feedback", "Cross-Platform Compatibility Testing", "Performance & Usability Testing", "Detailed Bug Reports & Documentation"],
    highlight: "Thorough Quality Assurance"
  }];
  const stats = [
    {
      number: "45K+",
      label: "Instagram Followers",
      icon: Users
    },
    {
      number: "3+",
      label: "Years Experience",
      icon: TrendingUp
    },
    {
      number: "5+",
      label: "Technical Fields Worked In",
      icon: Zap
    }
  ];
  return <section id="services" className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combining technical expertise with creative vision to deliver comprehensive 
            digital solutions that drive engagement and deliver results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>)}
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => <Card key={index} className="bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Service Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-2xl text-foreground">
                          {service.title}
                        </h3>
                        <span className="text-sm text-primary font-medium">
                          {service.highlight}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>
            </Card>)}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>;
};
export default Services;