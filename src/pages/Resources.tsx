
import { useState } from "react";
import { Search, Filter, Download, Eye, Heart, Star, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "../components/Layout";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const resources = [
    {
      id: 1,
      title: "Financial Management - Complete Notes",
      description: "Comprehensive notes covering all topics in financial management including capital budgeting, working capital, and financial analysis.",
      author: "Sarah Johnson",
      subject: "Finance",
      type: "Notes",
      year: "2024",
      uploadDate: "2024-01-15",
      views: 234,
      downloads: 45,
      likes: 23,
      rating: 4.8,
      tags: ["finance", "management", "budgeting"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Marketing Strategy Case Studies",
      description: "Real-world case studies of successful marketing campaigns and strategies from Fortune 500 companies.",
      author: "Prof. David Miller",
      subject: "Marketing",
      type: "Case Studies",
      year: "2024",
      uploadDate: "2024-01-10",
      views: 189,
      downloads: 67,
      likes: 34,
      rating: 4.9,
      tags: ["marketing", "strategy", "case-study"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Operations Research Presentation",
      description: "Detailed presentation on linear programming, transportation problems, and optimization techniques.",
      author: "Mike Chen",
      subject: "Operations",
      type: "Presentations",
      year: "2023",
      uploadDate: "2024-01-08",
      views: 156,
      downloads: 29,
      likes: 18,
      rating: 4.5,
      tags: ["operations", "research", "optimization"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Business Law Comprehensive Report",
      description: "Detailed analysis of business law concepts including contracts, corporate governance, and intellectual property.",
      author: "Emma Davis",
      subject: "Law",
      type: "Reports",
      year: "2024",
      uploadDate: "2024-01-05",
      views: 201,
      downloads: 52,
      likes: 28,
      rating: 4.7,
      tags: ["law", "business", "contracts"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Data Analytics with Python",
      description: "Step-by-step guide to data analysis using Python, pandas, and matplotlib with practical examples.",
      author: "Alex Thompson",
      subject: "Technology",
      type: "Notes",
      year: "2024",
      uploadDate: "2024-01-03",
      views: 312,
      downloads: 89,
      likes: 45,
      rating: 4.9,
      tags: ["python", "data", "analytics"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Human Resource Management Slides",
      description: "Complete slide deck covering recruitment, performance management, and employee development strategies.",
      author: "Lisa Wang",
      subject: "HR",
      type: "Presentations",
      year: "2023",
      uploadDate: "2024-01-01",
      views: 178,
      downloads: 38,
      likes: 22,
      rating: 4.6,
      tags: ["hr", "management", "recruitment"],
      thumbnail: "/placeholder.svg"
    }
  ];

  const subjects = ["All", "Finance", "Marketing", "Operations", "Law", "Technology", "HR"];
  const types = ["All", "Notes", "Reports", "Presentations", "Case Studies"];
  const years = ["All", "2024", "2023", "2022"];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSubject = selectedSubject === "all" || resource.subject.toLowerCase() === selectedSubject.toLowerCase();
    const matchesType = selectedType === "all" || resource.type.toLowerCase() === selectedType.toLowerCase();
    const matchesYear = selectedYear === "all" || resource.year === selectedYear;
    
    return matchesSearch && matchesSubject && matchesType && matchesYear;
  });

  const topContributors = [
    { name: "Prof. David Miller", uploads: 24, badge: "Top Contributor" },
    { name: "Sarah Johnson", uploads: 18, badge: "Rising Star" },
    { name: "Alex Thompson", uploads: 15, badge: "Tech Expert" },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Academic Resource Hub</h1>
          <p className="text-lg text-gray-600">Discover and share study materials with your peers</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by subject, title, or keyword..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject.toLowerCase()}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map(type => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-full sm:w-[150px]">
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
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Summary */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredResources.length} of {resources.length} resources
              </p>
            </div>

            {/* Resource Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources.map(resource => (
                <Card key={resource.id} className="group hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {resource.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {resource.description}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Metadata */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="h-4 w-4 mr-2" />
                        <span>{resource.author}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {resource.subject}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(resource.uploadDate).toLocaleDateString()}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {resource.type}
                        </Badge>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{resource.views}</span>
                        </div>
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          <span>{resource.downloads}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          <span>{resource.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline">Load More Resources</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upload Resource */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Share Your Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Help your peers by sharing your study materials and resources.
                </p>
                <Button className="w-full">Upload Resource</Button>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{contributor.name}</p>
                        <p className="text-xs text-gray-600">{contributor.uploads} uploads</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {contributor.badge}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium">New upload</p>
                    <p className="text-gray-600">Finance notes by Sarah J.</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Popular download</p>
                    <p className="text-gray-600">Marketing case studies</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
