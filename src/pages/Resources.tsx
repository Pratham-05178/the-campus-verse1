import { useState } from "react";
import { Search, Filter, Download, Eye, Heart, Star, Calendar, User, Tag, X, ChevronLeft, ChevronRight, FileText, Presentation, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Layout from "../components/Layout";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedResource, setSelectedResource] = useState<any>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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
      thumbnail: "/placeholder.svg",
      fileSize: "2.4 MB",
      pages: 45,
      content: `# Financial Management - Complete Notes

## Chapter 1: Introduction to Financial Management
Financial management involves planning, organizing, controlling, and monitoring financial resources to achieve organizational objectives.

### Key Concepts:
- **Time Value of Money**: Money available today is worth more than the same amount in the future
- **Risk vs Return**: Higher potential returns usually come with higher risk
- **Liquidity**: The ease with which assets can be converted to cash

## Chapter 2: Capital Budgeting
Capital budgeting is the process of evaluating and selecting long-term investments.

### Methods:
1. **Net Present Value (NPV)**: NPV = Σ(Cash Flow / (1+r)^t) - Initial Investment
2. **Internal Rate of Return (IRR)**: The discount rate that makes NPV = 0
3. **Payback Period**: Time required to recover the initial investment

## Chapter 3: Working Capital Management
Managing short-term assets and liabilities to ensure optimal liquidity.

### Components:
- Cash Management
- Inventory Management  
- Accounts Receivable Management
- Accounts Payable Management

## Practice Problems
1. Calculate NPV for a project with initial investment of $100,000 and cash flows of $30,000 for 5 years at 10% discount rate.
2. Determine the optimal inventory level using EOQ formula.`
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
      thumbnail: "/placeholder.svg",
      fileSize: "5.7 MB",
      pages: 78,
      content: `# Marketing Strategy Case Studies

## Case Study 1: Nike's "Just Do It" Campaign

### Background
In 1988, Nike was a running shoe company looking to expand into mainstream athletic wear.

### Strategy
- Emotional branding focusing on motivation and achievement
- Celebrity endorsements with athletes
- Consistent messaging across all channels

### Results
- Market share increased from 18% to 43% within 10 years
- Brand became synonymous with athletic excellence
- Revenue grew from $877M to $9.2B by 1998

### Key Learnings
1. Emotional connection drives brand loyalty
2. Consistency across touchpoints is crucial
3. Celebrity endorsements can amplify brand message

## Case Study 2: Apple's iPhone Launch Strategy

### Background
Apple entered the smartphone market dominated by BlackBerry and Palm.

### Strategy
- Product demonstration focus on user experience
- Premium positioning and pricing
- Exclusive carrier partnership (AT&T)
- Minimal feature comparison with competitors

### Execution
- Steve Jobs' iconic keynote presentation
- "Revolutionary" product positioning
- Anticipation building through secrecy

### Results
- 6.1 million units sold in first year
- Disrupted entire mobile industry
- Created new product category`
    },
    {
      id: 3,
      title: "Operations Research - Linear Programming",
      description: "Detailed presentation on linear programming, transportation problems, and optimization techniques with solved examples.",
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
      thumbnail: "/placeholder.svg",
      fileSize: "8.2 MB",
      pages: 92,
      content: `# Operations Research - Linear Programming

## Introduction to Linear Programming
Linear Programming (LP) is a mathematical method for determining the optimal allocation of limited resources.

### Applications:
- Production Planning
- Transportation Problems
- Portfolio Optimization
- Resource Allocation

## The Simplex Method
### Steps:
1. Convert to standard form
2. Identify initial basic feasible solution
3. Check optimality conditions
4. If not optimal, perform pivot operation
5. Repeat until optimal solution found

## Transportation Problem Example
**Factories (Supply):**
- Factory A: 100 units
- Factory B: 150 units  
- Factory C: 200 units

**Warehouses (Demand):**
- Warehouse 1: 80 units
- Warehouse 2: 120 units
- Warehouse 3: 150 units
- Warehouse 4: 100 units

**Solution Using Vogel's Method:**
1. Calculate penalties for each row/column
2. Select cell with minimum cost in row/column with highest penalty
3. Allocate maximum possible units
4. Repeat until all supply/demand satisfied`
    },
    {
      id: 4,
      title: "Business Law - Contracts & Corporate Governance",
      description: "Comprehensive report on business law fundamentals including contract law, corporate governance, and intellectual property rights.",
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
      thumbnail: "/placeholder.svg",
      fileSize: "3.8 MB",
      pages: 67,
      content: `# Business Law - Contracts & Corporate Governance

## Executive Summary
This report provides a comprehensive overview of essential business law concepts focusing on contract law, corporate governance structures, and intellectual property protection.

## Chapter 1: Contract Law Fundamentals

### Elements of a Valid Contract
For a contract to be legally enforceable, it must contain:

1. **Offer**: A clear proposal stating terms and conditions
2. **Acceptance**: Unqualified agreement to all terms of the offer  
3. **Consideration**: Something of value exchanged between parties
4. **Capacity**: Legal ability of parties to enter contracts
5. **Legality**: Contract purpose and terms must be legal

### Types of Contracts
**By Formation:**
- Express Contracts: Terms explicitly stated
- Implied Contracts: Terms inferred from conduct

**By Performance:**
- Executed: Fully performed by both parties
- Executory: Performance pending by one or both parties

## Chapter 2: Corporate Governance

### Corporate Structure
**Board of Directors:**
- Elected by shareholders
- Responsible for major policy decisions
- Duty of care and loyalty to corporation

**Officers:**
- Appointed by board of directors
- Handle day-to-day operations
- CEO, CFO, COO roles and responsibilities`
    },
    {
      id: 5,
      title: "Data Analytics with Python - Complete Guide",
      description: "Step-by-step guide to data analysis using Python, pandas, matplotlib, and seaborn with 20+ practical examples and datasets.",
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
      thumbnail: "/placeholder.svg",
      fileSize: "12.3 MB",
      pages: 156,
      content: `# Data Analytics with Python - Complete Guide

## Chapter 1: Python Environment Setup

### Installing Required Libraries
\`\`\`python
# Install required packages
pip install pandas numpy matplotlib seaborn scikit-learn jupyter

# Import essential libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
\`\`\`

## Chapter 2: Data Manipulation with Pandas

### Loading Data
\`\`\`python
# Read different file formats
df_csv = pd.read_csv('sales_data.csv')
df_excel = pd.read_excel('financial_data.xlsx')
df_json = pd.read_json('api_response.json')

# Basic data exploration
print(df.head())
print(df.info())
print(df.describe())
\`\`\`

### Data Cleaning
\`\`\`python
# Handle missing values
df.dropna()  # Remove rows with missing values
df.fillna(method='forward')  # Forward fill
df.fillna(df.mean())  # Fill with mean

# Remove duplicates
df.drop_duplicates()

# Data type conversion
df['date'] = pd.to_datetime(df['date'])
df['category'] = df['category'].astype('category')
\`\`\`

## Chapter 3: Data Visualization

### Basic Plots with Matplotlib
\`\`\`python
# Line plot
plt.figure(figsize=(10, 6))
plt.plot(df['date'], df['sales'])
plt.title('Sales Trend Over Time')
plt.xlabel('Date')
plt.ylabel('Sales ($)')
plt.show()
\`\`\`

### Advanced Visualizations with Seaborn
\`\`\`python
# Correlation heatmap
plt.figure(figsize=(10, 8))
correlation_matrix = df.select_dtypes(include=[np.number]).corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0)
plt.title('Correlation Matrix')
plt.show()
\`\`\``
    },
    {
      id: 6,
      title: "Strategic Management Framework",
      description: "Complete analysis framework with Porter's Five Forces, SWOT, PESTEL, and Blue Ocean Strategy with real case studies.",
      author: "Dr. Robert Kim",
      subject: "Strategy", 
      type: "Notes",
      year: "2024",
      uploadDate: "2024-01-20",
      views: 298,
      downloads: 73,
      likes: 41,
      rating: 4.8,
      tags: ["strategy", "analysis", "frameworks"],
      thumbnail: "/placeholder.svg",
      fileSize: "6.4 MB",
      pages: 89,
      content: `# Strategic Management Framework

## Porter's Five Forces Analysis

### The Five Forces:

**1. Threat of New Entrants**
- Barriers to entry
- Capital requirements
- Government regulations
- Brand loyalty

**2. Bargaining Power of Suppliers**
- Number of suppliers
- Uniqueness of service/product
- Switching costs

**3. Bargaining Power of Buyers**
- Number of buyers
- Switching costs
- Price sensitivity

**4. Threat of Substitute Products**
- Availability of substitutes
- Price-performance ratio
- Switching costs

**5. Competitive Rivalry**
- Number of competitors
- Industry growth rate
- Fixed costs
- Exit barriers

## SWOT Analysis Framework

### Internal Analysis
**Strengths:**
- What advantages does the organization have?
- What do you do better than anyone else?
- What unique resources do you have?

**Weaknesses:**
- What could be improved?
- What is done badly?
- What should be avoided?

### External Analysis
**Opportunities:**
- What opportunities are available?
- What trends could benefit the organization?

**Threats:**
- What obstacles do you face?
- What are competitors doing?

## Blue Ocean Strategy

### Four Actions Framework:
1. **Eliminate**: Which factors should be eliminated?
2. **Reduce**: Which factors should be reduced below industry standard?
3. **Raise**: Which factors should be raised above industry standard?
4. **Create**: Which factors should be created that industry never offered?`
    }
  ];

  const subjects = ["All", "Finance", "Marketing", "Operations", "Law", "Technology", "HR", "Strategy", "International Business"];
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
    { name: "Dr. Robert Kim", uploads: 12, badge: "Strategy Guru" },
    { name: "Prof. Maria Gonzalez", uploads: 10, badge: "Global Expert" }
  ];

  const handlePreview = (resource: any) => {
    setSelectedResource(resource);
    setIsPreviewOpen(true);
  };

  const handleDownload = (resource: any) => {
    // Simulate download
    const blob = new Blob([resource.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resource.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Update download count (in real app, this would be an API call)
    resource.downloads += 1;
  };

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
                <Card key={resource.id} className="group hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer">
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

                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{resource.fileSize}</span>
                        <span>{resource.pages} pages</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleDownload(resource)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => handlePreview(resource)}
                      >
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
                    <p className="text-gray-600">Strategic Management by Dr. Kim</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Popular download</p>
                    <p className="text-gray-600">Data Analytics with Python</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">New contributor</p>
                    <p className="text-gray-600">Prof. Maria Gonzalez joined</p>
                    <p className="text-xs text-gray-500">6 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-semibold">
                {selectedResource?.title}
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPreviewOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>
          
          {selectedResource && (
            <div className="space-y-4">
              {/* Resource Info */}
              <div className="flex items-center space-x-4 text-sm text-gray-600 border-b pb-4">
                <span className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {selectedResource.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(selectedResource.uploadDate).toLocaleDateString()}
                </span>
                <span>{selectedResource.fileSize}</span>
                <span>{selectedResource.pages} pages</span>
              </div>

              {/* Content Preview */}
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                  {selectedResource.content}
                </pre>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4 border-t">
                <Button onClick={() => handleDownload(selectedResource)}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Full Document
                </Button>
                <Button variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline">
                  <Tag className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Resources;