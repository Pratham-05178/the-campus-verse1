
import { useState } from "react";
import { Search, Filter, Users, Star, MessageCircle, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "../components/Layout";

const Matching = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedMajor, setSelectedMajor] = useState("all");
  const [selectedGoal, setSelectedGoal] = useState("all");
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  const [connectionMessage, setConnectionMessage] = useState("");

  const students = [
    {
      id: 1,
      name: "Sarah Johnson",
      branch: "MBA Marketing",
      year: "2024",
      avatar: "/placeholder.svg",
      bio: "Passionate about digital marketing and brand strategy. Looking to connect with like-minded individuals and learn from industry professionals.",
      skills: ["Digital Marketing", "Brand Strategy", "Social Media", "Analytics"],
      interests: ["Content Creation", "Consumer Psychology", "E-commerce"],
      projects: ["Brand Audit for Local Business", "Social Media Campaign Analysis"],
      mentoring: true,
      goals: ["Networking", "Learning"],
      rating: 4.8,
      connections: 45
    },
    {
      id: 2,
      name: "Alex Thompson",
      branch: "MBA Finance",
      year: "2023",
      avatar: "/placeholder.svg",
      bio: "Finance enthusiast with experience in investment banking. Happy to mentor junior students in financial modeling and career guidance.",
      skills: ["Financial Modeling", "Investment Analysis", "Risk Management", "Excel"],
      interests: ["Private Equity", "Derivatives", "Corporate Finance"],
      projects: ["Portfolio Optimization Model", "Startup Valuation Framework"],
      mentoring: true,
      goals: ["Mentoring", "Collaboration"],
      rating: 4.9,
      connections: 62
    },
    {
      id: 3,
      name: "Priya Sharma",
      branch: "MBA Operations",
      year: "2024",
      avatar: "/placeholder.svg",
      bio: "Operations management student with a focus on supply chain optimization. Interested in lean methodologies and process improvement.",
      skills: ["Supply Chain", "Process Improvement", "Lean Six Sigma", "Project Management"],
      interests: ["Logistics", "Manufacturing", "Sustainability"],
      projects: ["Supply Chain Optimization Study", "Warehouse Management System"],
      mentoring: false,
      goals: ["Learning", "Collaboration"],
      rating: 4.7,
      connections: 28
    },
    {
      id: 4,
      name: "Mike Chen",
      branch: "MBA Technology",
      year: "2023",
      avatar: "/placeholder.svg",
      bio: "Tech MBA focusing on product management and digital transformation. Previous experience in software development and startup ecosystem.",
      skills: ["Product Management", "Agile", "Data Analysis", "UI/UX"],
      interests: ["EdTech", "FinTech", "AI/ML Applications"],
      projects: ["Product Roadmap for EdTech Startup", "Market Analysis for FinTech"],
      mentoring: true,
      goals: ["Networking", "Mentoring"],
      rating: 4.6,
      connections: 51
    },
    {
      id: 5,
      name: "Emma Davis",
      branch: "MBA HR",
      year: "2024",
      avatar: "/placeholder.svg",
      bio: "Human Resources student passionate about organizational behavior and talent development. Interested in HR tech and employee engagement.",
      skills: ["Talent Acquisition", "Performance Management", "Organizational Behavior", "HR Analytics"],
      interests: ["Employee Engagement", "Diversity & Inclusion", "HR Technology"],
      projects: ["Employee Satisfaction Survey", "Talent Retention Strategy"],
      mentoring: false,
      goals: ["Learning", "Networking"],
      rating: 4.5,
      connections: 33
    },
    {
      id: 6,
      name: "David Wilson",
      branch: "MBA Strategy",
      year: "2023",
      avatar: "/placeholder.svg",
      bio: "Strategy consultant with experience in business transformation. Passionate about helping organizations navigate complex challenges.",
      skills: ["Strategic Planning", "Business Analysis", "Market Research", "Consulting"],
      interests: ["Digital Transformation", "Innovation", "Competitive Analysis"],
      projects: ["Market Entry Strategy", "Digital Transformation Roadmap"],
      mentoring: true,
      goals: ["Mentoring", "Collaboration"],
      rating: 4.8,
      connections: 74
    }
  ];

  const majors = ["All", "Marketing", "Finance", "Operations", "Technology", "HR", "Strategy"];
  const years = ["All", "2023", "2024"];
  const goals = ["All", "Networking", "Learning", "Mentoring", "Collaboration"];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         student.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesYear = selectedYear === "all" || student.year === selectedYear;
    const matchesMajor = selectedMajor === "all" || student.branch.toLowerCase().includes(selectedMajor.toLowerCase());
    const matchesGoal = selectedGoal === "all" || student.goals.includes(selectedGoal);
    
    return matchesSearch && matchesYear && matchesMajor && matchesGoal;
  });

  const handleConnect = (studentId: number) => {
    console.log(`Sending connection request to student ${studentId} with message: ${connectionMessage}`);
    setConnectionMessage("");
    // Here you would typically make an API call
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Matching & Profiles</h1>
          <p className="text-lg text-gray-600">Connect with peers, find mentors, and build your network</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, skills, or interests..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-full sm:w-[120px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toLowerCase()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedMajor} onValueChange={setSelectedMajor}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Major" />
                </SelectTrigger>
                <SelectContent>
                  {majors.map(major => (
                    <SelectItem key={major} value={major.toLowerCase()}>
                      {major}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedGoal} onValueChange={setSelectedGoal}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Goals" />
                </SelectTrigger>
                <SelectContent>
                  {goals.map(goal => (
                    <SelectItem key={goal} value={goal.toLowerCase()}>
                      {goal}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredStudents.length} students
          </p>
        </div>

        {/* Student Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map(student => (
            <Card key={student.id} className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="text-center pb-4">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={student.avatar} alt={student.name} />
                  <AvatarFallback>
                    {student.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {student.name}
                </CardTitle>
                
                <div className="space-y-2">
                  <Badge variant="outline">{student.branch}</Badge>
                  <Badge variant="secondary">Class of {student.year}</Badge>
                </div>

                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{student.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{student.connections} connections</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {student.bio}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {student.skills.slice(0, 3).map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {student.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{student.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Goals */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Goals</h4>
                  <div className="flex flex-wrap gap-1">
                    {student.goals.map(goal => (
                      <Badge key={goal} variant="outline" className="text-xs">
                        {goal}
                      </Badge>
                    ))}
                  </div>
                </div>

                {student.mentoring && (
                  <div className="mb-4">
                    <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                      Available for Mentoring
                    </Badge>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" className="flex-1">
                        View Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={student.avatar} alt={student.name} />
                            <AvatarFallback>
                              {student.name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <DialogTitle className="text-2xl">{student.name}</DialogTitle>
                            <DialogDescription>
                              {student.branch} • Class of {student.year}
                            </DialogDescription>
                          </div>
                        </div>
                      </DialogHeader>

                      <Tabs defaultValue="about" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="about">About</TabsTrigger>
                          <TabsTrigger value="projects">Projects</TabsTrigger>
                          <TabsTrigger value="skills">Skills</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="about" className="space-y-4">
                          <div>
                            <h3 className="font-semibold mb-2">About Me</h3>
                            <p className="text-gray-600">{student.bio}</p>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold mb-2">Interests</h3>
                            <div className="flex flex-wrap gap-2">
                              {student.interests.map(interest => (
                                <Badge key={interest} variant="secondary">
                                  {interest}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="font-semibold mb-2">Goals</h3>
                            <div className="flex flex-wrap gap-2">
                              {student.goals.map(goal => (
                                <Badge key={goal} variant="outline">
                                  {goal}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="projects" className="space-y-4">
                          <div>
                            <h3 className="font-semibold mb-2">Recent Projects</h3>
                            <div className="space-y-3">
                              {student.projects.map((project, index) => (
                                <div key={index} className="p-3 border rounded-lg">
                                  <h4 className="font-medium">{project}</h4>
                                </div>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="skills" className="space-y-4">
                          <div>
                            <h3 className="font-semibold mb-2">Skills & Expertise</h3>
                            <div className="flex flex-wrap gap-2">
                              {student.skills.map(skill => (
                                <Badge key={skill} variant="secondary">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          {student.mentoring && (
                            <div>
                              <h3 className="font-semibold mb-2">Mentoring</h3>
                              <Badge className="bg-green-100 text-green-800">
                                Available for mentoring in {student.branch}
                              </Badge>
                            </div>
                          )}
                        </TabsContent>
                      </Tabs>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="flex-1">
                        <Plus className="h-4 w-4 mr-1" />
                        Connect
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Send Connection Request</DialogTitle>
                        <DialogDescription>
                          Send a personalized message to {student.name}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="message">Message (optional)</Label>
                          <Textarea
                            id="message"
                            placeholder="Hi! I'd love to connect and learn more about your experience..."
                            value={connectionMessage}
                            onChange={(e) => setConnectionMessage(e.target.value)}
                            rows={4}
                          />
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button
                            onClick={() => handleConnect(student.id)}
                            className="flex-1"
                          >
                            Send Request
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">Load More Students</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Matching;
