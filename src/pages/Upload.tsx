import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload as UploadIcon, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Upload = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    const validTypes = ["application/pdf", "text/plain"];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      toast.error("Invalid file type. Please upload PDF or TXT files only.");
      return;
    }

    if (file.size > maxSize) {
      toast.error("File too large. Maximum size is 10MB.");
      return;
    }

    setSelectedFile(file);
    toast.success("File selected successfully!");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file first.");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate API call
    setTimeout(() => {
      clearInterval(progressInterval);
      setUploadProgress(100);
      
      toast.success("Resume analyzed successfully!", {
        description: "Redirecting to results...",
      });

      setTimeout(() => {
        navigate("/results");
      }, 1000);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Upload Resume
              </h1>
              <p className="text-muted-foreground text-lg">
                Upload a resume to get instant AI-powered analysis and scoring
              </p>
            </div>

            <Card className="shadow-elegant-lg mb-8">
              <CardHeader>
                <CardTitle>Select Resume File</CardTitle>
                <CardDescription>
                  Supported formats: PDF, TXT (Max size: 10MB)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-base ${
                    isDragging
                      ? "border-primary bg-primary/5"
                      : "border-border bg-muted/30 hover:border-primary/50 hover:bg-muted/50"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <UploadIcon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    {selectedFile ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <FileText className="w-5 h-5 text-primary" />
                          {selectedFile.name}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <>
                        <div>
                          <p className="text-lg font-medium text-foreground mb-2">
                            Drag and drop your resume here
                          </p>
                          <p className="text-muted-foreground">or</p>
                        </div>
                      </>
                    )}

                    <div>
                      <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        accept=".pdf,.txt"
                        onChange={handleFileSelect}
                      />
                      <label htmlFor="file-upload">
                        <Button asChild variant="outline">
                          <span className="cursor-pointer">
                            Browse Files
                          </span>
                        </Button>
                      </label>
                    </div>
                  </div>
                </div>

                {isUploading && (
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Analyzing resume...</span>
                      <span className="font-medium text-foreground">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}

                <div className="mt-6 flex justify-end">
                  <Button
                    onClick={handleUpload}
                    disabled={!selectedFile || isUploading}
                    size="lg"
                  >
                    {isUploading ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <UploadIcon className="w-5 h-5" />
                        Analyze Resume
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-border shadow-elegant">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quick Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Get comprehensive results in under 30 seconds
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Secure Processing</h3>
                      <p className="text-sm text-muted-foreground">
                        Your data is encrypted and never shared with third parties
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Upload;
