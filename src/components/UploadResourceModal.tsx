import { useState } from "react";
import { Upload, FileText, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface UploadResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (resource: any) => void;
}

const UploadResourceModal = ({ isOpen, onClose, onUpload }: UploadResourceModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    subject: "",
    type: "",
    year: new Date().getFullYear().toString(),
    tags: [] as string[],
    content: "",
    file: null as File | null
  });
  const [newTag, setNewTag] = useState("");
  const { toast } = useToast();

  const subjects = ["Finance", "Marketing", "Operations", "Law", "Technology", "HR", "Strategy", "International Business"];
  const types = ["Notes", "Reports", "Presentations", "Case Studies"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
      
      // Read file content for preview
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setFormData(prev => ({ ...prev, content: content.slice(0, 2000) + "..." }));
      };
      reader.readAsText(file);
    }
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim().toLowerCase()]
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = () => {
    const newResource = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      author: formData.author,
      subject: formData.subject,
      type: formData.type,
      year: formData.year,
      uploadDate: new Date().toISOString().split('T')[0],
      views: 0,
      downloads: 0,
      likes: 0,
      rating: 0,
      tags: formData.tags,
      thumbnail: "/placeholder.svg",
      fileSize: formData.file ? `${(formData.file.size / 1024 / 1024).toFixed(1)} MB` : "0 MB",
      pages: Math.floor(Math.random() * 100) + 10,
      content: formData.content || `# ${formData.title}\n\nContent will be extracted from the uploaded file...`
    };

    onUpload(newResource);
    toast({
      title: "Resource Uploaded Successfully!",
      description: "Your resource has been added to the platform.",
    });
    onClose();
    setStep(1);
    setFormData({
      title: "",
      description: "",
      author: "",
      subject: "",
      type: "",
      year: new Date().getFullYear().toString(),
      tags: [],
      content: "",
      file: null
    });
  };

  const canProceedToStep2 = formData.title && formData.description && formData.author;
  const canProceedToStep3 = formData.subject && formData.type;
  const canSubmit = formData.file || formData.content;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              Upload Academic Resource
            </DialogTitle>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Step {step} of 3</span>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= num ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {num}
                </div>
                {num < 3 && (
                  <div className={`h-0.5 w-8 ${step > num ? 'bg-primary' : 'bg-muted'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium mb-2">Basic Information</h3>
                <p className="text-sm text-muted-foreground">
                  Tell us about your resource - what it is and who created it
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Resource Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Financial Management - Complete Notes"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of what this resource covers..."
                    rows={3}
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="author">Author/Creator *</Label>
                  <Input
                    id="author"
                    placeholder="Your name or the original author"
                    value={formData.author}
                    onChange={(e) => handleInputChange("author", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={() => setStep(2)} 
                  disabled={!canProceedToStep2}
                >
                  Next: Categories
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Categories and Tags */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium mb-2">Categories & Tags</h3>
                <p className="text-sm text-muted-foreground">
                  Help others find your resource by categorizing it properly
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map(subject => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="type">Resource Type *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {types.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="year">Academic Year</Label>
                <Input
                  id="year"
                  type="number"
                  placeholder="2024"
                  value={formData.year}
                  onChange={(e) => handleInputChange("year", e.target.value)}
                />
              </div>

              <div>
                <Label>Tags (Optional)</Label>
                <div className="flex items-center space-x-2 mb-2">
                  <Input
                    placeholder="Add a tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  />
                  <Button size="sm" onClick={addTag}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => removeTag(tag)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button 
                  onClick={() => setStep(3)} 
                  disabled={!canProceedToStep3}
                >
                  Next: Upload File
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: File Upload */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium mb-2">Upload Content</h3>
                <p className="text-sm text-muted-foreground">
                  Upload your file or paste content directly
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="file">Upload File</Label>
                  <div className="mt-2">
                    <Input
                      id="file"
                      type="file"
                      accept=".pdf,.doc,.docx,.txt,.ppt,.pptx"
                      onChange={handleFileChange}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Supported formats: PDF, DOC, DOCX, TXT, PPT, PPTX (Max 50MB)
                  </p>
                </div>

                <div className="text-center text-muted-foreground">
                  <span>OR</span>
                </div>

                <div>
                  <Label htmlFor="content">Paste Content Directly</Label>
                  <Textarea
                    id="content"
                    placeholder="Paste your content here..."
                    rows={8}
                    value={formData.content}
                    onChange={(e) => handleInputChange("content", e.target.value)}
                  />
                </div>

                {formData.file && (
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">{formData.file.name}</span>
                      <span className="text-sm text-muted-foreground">
                        ({(formData.file.size / 1024 / 1024).toFixed(1)} MB)
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  disabled={!canSubmit}
                  className="flex items-center space-x-2"
                >
                  <Upload className="h-4 w-4" />
                  <span>Upload Resource</span>
                </Button>
              </div>
            </div>
          )}

          {/* Instructions Panel */}
          <div className="bg-muted/50 rounded-lg p-4 mt-6">
            <h4 className="font-medium mb-2">📋 Upload Guidelines</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Ensure your content is original or you have permission to share</li>
              <li>• Use descriptive titles and detailed descriptions</li>
              <li>• Add relevant tags to help others find your resource</li>
              <li>• Double-check subject and type categorization</li>
              <li>• Resources will be reviewed before appearing publicly</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadResourceModal;