
import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Users, TrendingUp, Download, Eye, Clock, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "../components/Layout";
import { useAuth } from "../App";

const Home = () => {
  const { user } = useAuth();
  const firstName = user?.name?.split(" ")[0] || "Student";

  const quickActions = [
    {
      title: "Find Resources",
      description: "Browse study materials and notes",
      icon: BookOpen,
      href: "/resources",
      color: "bg-blue-500",
    },
    {
      title: "Browse Events",
      description: "Discover campus events and activities",
      icon: Calendar,
      href: "/events",
      color: "bg-green-500",
    },
    {
      title: "Find Peers",
      description: "Connect with fellow students",
      icon: Users,
      href: "/matching",
      color: "bg-purple-500",
    },
  ];

  const recentActivity = [
    {
      type: "resource",
      title: "Financial Management Notes - Semester 1",
      author: "Sarah Johnson",
      time: "2 hours ago",
      views: 234,
      downloads: 45,
    },
    {
      type: "event",
      title: "Tech Talk: AI in Business",
      author: "Computer Science Club",
      time: "4 hours ago",
      date: "Dec 15, 2024",
    },
    {
      type: "student",
      title: "New Student: Mike Chen joined",
      author: "Marketing - Batch 2024",
      time: "6 hours ago",
    },
    {
      type: "resource",
      title: "Marketing Strategy Case Studies",
      author: "Prof. David Miller",
      time: "1 day ago",
      views: 189,
      downloads: 67,
    },
  ];

  const stats = [
    { label: "Resources Shared", value: "1,234", icon: BookOpen },
    { label: "Events This Month", value: "28", icon: Calendar },
    { label: "Active Students", value: "456", icon: Users },
    { label: "Downloads Today", value: "89", icon: Download },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hello, {firstName}! 👋
          </h1>
          <p className="text-lg text-gray-600">What do you want to do today?</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.href} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${action.color}`}>
                        <action.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {action.title}
                    </h3>
                    <p className="text-gray-600">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {item.type === "resource" && (
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-blue-600" />
                        </div>
                      )}
                      {item.type === "event" && (
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-green-600" />
                        </div>
                      )}
                      {item.type === "student" && (
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <User className="h-5 w-5 text-purple-600" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.author}</p>
                      
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {item.time}
                        </div>
                        
                        {item.views && (
                          <div className="flex items-center text-xs text-gray-500">
                            <Eye className="h-3 w-3 mr-1" />
                            {item.views} views
                          </div>
                        )}
                        
                        {item.downloads && (
                          <div className="flex items-center text-xs text-gray-500">
                            <Download className="h-3 w-3 mr-1" />
                            {item.downloads} downloads
                          </div>
                        )}
                        
                        {item.date && (
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            {item.date}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
