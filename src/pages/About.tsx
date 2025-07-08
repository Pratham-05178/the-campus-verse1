
import { useState } from "react";
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, Code, Smartphone, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "../components/Layout";

const About = () => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = [
    {
      title: "Dashboard Overview",
      description: "Clean, intuitive dashboard with quick actions and activity feed",
      image: "/placeholder.svg"
    },
    {
      title: "Resource Hub",
      description: "Comprehensive search and filtering for academic resources",
      image: "/placeholder.svg"
    },
    {
      title: "Student Matching",
      description: "Connect with peers based on skills, interests, and goals",
      image: "/placeholder.svg"
    },
    {
      title: "Events Calendar",
      description: "Stay updated with campus events and announcements",
      image: "/placeholder.svg"
    }
  ];

  const techStack = [
    { name: "React", icon: "⚛️", description: "Frontend framework" },
    { name: "TypeScript", icon: "🔷", description: "Type-safe development" },
    { name: "Tailwind CSS", description: "Utility-first styling" },
    { name: "Vite", icon: "⚡", description: "Build tool" },
    { name: "Shadcn/ui", description: "Component library" },
    { name: "Lucide React", description: "Icon library" }
  ];

  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "MVP Launch",
      status: "completed",
      items: ["User authentication", "Basic resource sharing", "Student profiles", "Event listings"]
    },
    {
      phase: "Phase 2",
      title: "Enhanced Features",
      status: "current",
      items: ["Advanced search filters", "Real-time notifications", "File upload system", "Mobile optimization"]
    },
    {
      phase: "Phase 3",
      title: "AI Integration",
      status: "planned",
      items: ["AI-powered recommendations", "Smart matching algorithms", "Chatbot support", "Content moderation"]
    },
    {
      phase: "Phase 4",
      title: "Scale & Expand",
      status: "planned",
      items: ["Multi-campus support", "Alumni network", "Job board integration", "Mobile app"]
    }
  ];

  const teamMembers = [
    {
      name: "Built for IIM Rohtak",
      role: "Academic Excellence",
      bio: "Created specifically for the IIM Rohtak community to enhance student collaboration and learning.",
      avatar: "/placeholder.svg",
      social: {
        github: "#",
        linkedin: "#",
        email: "contact@campusconnect.edu"
      }
    }
  ];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "current": return "bg-blue-100 text-blue-800";
      case "planned": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return "✅";
      case "current": return "🚀";
      case "planned": return "📋";
      default: return "📋";
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-white">CC</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Campus Connect</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting students across campuses for better learning, collaboration, and growth. 
              Built for IIM Rohtak and beyond.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-none">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
                To create a unified platform where students can seamlessly share knowledge, 
                connect with peers, discover opportunities, and build meaningful relationships 
                that extend beyond their academic journey. We believe in the power of 
                collaboration and community-driven learning.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Screenshots Carousel */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Overview</h2>
            <p className="text-lg text-gray-600">Explore our key features through these interactive screenshots</p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="relative">
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">CC</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {screenshots[currentScreenshot].title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {screenshots[currentScreenshot].description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" onClick={prevScreenshot}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex space-x-2">
                    {screenshots.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentScreenshot ? "bg-blue-600" : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentScreenshot(index)}
                      />
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" onClick={nextScreenshot}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built With Modern Technology</h2>
            <p className="text-lg text-gray-600">Leveraging the latest tools and frameworks for optimal performance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{tech.icon || "🛠️"}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Roadmap */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Roadmap</h2>
            <p className="text-lg text-gray-600">Our journey from prototype to a comprehensive platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmapItems.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <span className="mr-2">{getStatusIcon(item.status)}</span>
                      {item.phase}: {item.title}
                    </CardTitle>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.items.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Excellence</h2>
            <p className="text-lg text-gray-600">Created with passion for the IIM Rohtak community</p>
          </div>
          
          <div className="max-w-md mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">IIM</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Summary */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
                <p className="text-xl opacity-90">
                  Three core modules designed to enhance your academic journey
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Resource Hub</h3>
                  <p className="opacity-90">Share and discover academic materials with intelligent search and filtering</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Events & Network</h3>
                  <p className="opacity-90">Stay connected with campus activities and build meaningful relationships</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                  <p className="opacity-90">Connect with peers based on shared interests, skills, and academic goals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Connect?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Join the Campus Connect community and start building meaningful connections today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
