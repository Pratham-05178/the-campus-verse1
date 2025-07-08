
import { useState } from "react";
import { Calendar, Clock, MapPin, Users, Filter, ChevronLeft, ChevronRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Layout from "../components/Layout";

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [showPastEvents, setShowPastEvents] = useState(false);

  const events = [
    {
      id: 1,
      title: "Tech Talk: AI in Business",
      description: "Join us for an insightful discussion on how artificial intelligence is transforming the business landscape.",
      date: "2024-02-15",
      time: "14:00",
      venue: "Auditorium A",
      category: "Academic",
      attendees: 125,
      maxAttendees: 200,
      organizer: "Computer Science Club",
      isPast: false,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Cultural Night 2024",
      description: "Experience the diversity of our campus community through music, dance, and food from around the world.",
      date: "2024-02-20",
      time: "18:00",
      venue: "Main Campus Ground",
      category: "Cultural",
      attendees: 340,
      maxAttendees: 500,
      organizer: "Cultural Committee",
      isPast: false,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Career Fair 2024",
      description: "Meet with top recruiters and explore career opportunities across various industries.",
      date: "2024-02-25",
      time: "10:00",
      venue: "Exhibition Hall",
      category: "Placement",
      attendees: 280,
      maxAttendees: 300,
      organizer: "Placement Cell",
      isPast: false,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Entrepreneurship Workshop",
      description: "Learn from successful entrepreneurs about starting and scaling your own business.",
      date: "2024-03-01",
      time: "15:00",
      venue: "Conference Room B",
      category: "Academic",
      attendees: 85,
      maxAttendees: 100,
      organizer: "Business Club",
      isPast: false,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Annual Sports Meet",
      description: "Participate in various sports competitions and cheer for your favorite teams.",
      date: "2024-01-20",
      time: "09:00",
      venue: "Sports Complex",
      category: "Cultural",
      attendees: 450,
      maxAttendees: 500,
      organizer: "Sports Committee",
      isPast: true,
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Alumni Networking Event",
      description: "Connect with alumni working in leading companies and expand your professional network.",
      date: "2024-01-15",
      time: "19:00",
      venue: "Banquet Hall",
      category: "Placement",
      attendees: 150,
      maxAttendees: 200,
      organizer: "Alumni Association",
      isPast: true,
      image: "/placeholder.svg"
    }
  ];

  const categories = ["Academic", "Cultural", "Placement"];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategory([...selectedCategory, category]);
    } else {
      setSelectedCategory(selectedCategory.filter(c => c !== category));
    }
  };

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory.length === 0 || selectedCategory.includes(event.category);
    const pastMatch = showPastEvents || !event.isPast;
    return categoryMatch && pastMatch;
  });

  const upcomingEvents = filteredEvents.filter(e => !e.isPast);
  const pastEvents = filteredEvents.filter(e => e.isPast);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic": return "bg-blue-100 text-blue-800";
      case "Cultural": return "bg-purple-100 text-purple-800";
      case "Placement": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const hasEvents = events.some(event => event.date === dateStr);
      days.push({ day, hasEvents, dateStr });
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Events & Announcements</h1>
          <p className="text-lg text-gray-600">Stay updated with campus activities and important announcements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calendar Widget */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </CardTitle>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {generateCalendarDays().map((dayInfo, index) => (
                    <div
                      key={index}
                      className={`aspect-square flex items-center justify-center text-sm relative ${
                        dayInfo ? 'hover:bg-gray-100 cursor-pointer' : ''
                      }`}
                    >
                      {dayInfo && (
                        <>
                          <span className={dayInfo.hasEvents ? 'font-bold text-blue-600' : ''}>
                            {dayInfo.day}
                          </span>
                          {dayInfo.hasEvents && (
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium mb-3 block">Category</Label>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategory.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                        />
                        <Label htmlFor={category} className="text-sm">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Event Reminders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium">Tech Talk Tomorrow</p>
                    <p className="text-gray-600">AI in Business - 2:00 PM</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Career Fair</p>
                    <p className="text-gray-600">Registration closes in 3 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Upcoming Events */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map(event => (
                  <Card key={event.id} className="group hover:shadow-lg transition-all duration-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                        <div className="text-xs text-gray-500">
                          {event.attendees}/{event.maxAttendees} attending
                        </div>
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                        {event.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {event.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'short', 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{event.time}</span>
                        </div>

                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.venue}</span>
                        </div>

                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          <span>Organized by {event.organizer}</span>
                        </div>
                      </div>

                      <Button className="w-full" disabled={event.attendees >= event.maxAttendees}>
                        {event.attendees >= event.maxAttendees ? "Event Full" : "Register Now"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Past Events */}
            <Collapsible open={showPastEvents} onOpenChange={setShowPastEvents}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="mb-6">
                  {showPastEvents ? "Hide" : "Show"} Past Events ({pastEvents.length})
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pastEvents.map(event => (
                      <Card key={event.id} className="opacity-75">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <Badge className={getCategoryColor(event.category)}>
                              {event.category}
                            </Badge>
                            <div className="text-xs text-gray-500">
                              {event.attendees} attended
                            </div>
                          </div>
                          <CardTitle className="text-lg font-semibold text-gray-900">
                            {event.title}
                          </CardTitle>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {event.description}
                          </p>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <div className="space-y-3 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{event.venue}</span>
                            </div>
                          </div>

                          <Button variant="outline" className="w-full">
                            View Photos
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
