import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, BarChart, Clock, CheckCircle, Zap, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Analysis",
      description: "AI-powered screening processes hundreds of resumes in seconds, saving you countless hours.",
    },
    {
      icon: CheckCircle,
      title: "Smart Matching",
      description: "Advanced algorithms match candidates to job requirements with precision and accuracy.",
    },
    {
      icon: Shield,
      title: "Bias-Free Screening",
      description: "Objective, data-driven evaluation ensures fair assessment of all candidates.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Upload Resumes",
      description: "Simply upload PDF or text resumes through our intuitive interface.",
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Our AI instantly analyzes skills, experience, and qualifications.",
    },
    {
      step: "03",
      title: "Get Results",
      description: "Review scored candidates with detailed insights and recommendations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-95"></div>
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="AI-powered resume screening" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="relative container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Hire Smarter with AI-Powered Resume Screening
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Transform your recruitment process with intelligent automation. Screen, analyze, and identify top talent in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/upload">
                    <Upload className="w-5 h-5" />
                    Upload Resume Now
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-card/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-card/20">
                  <a href="#how-it-works">Learn How It Works</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose SmartHire?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Leverage cutting-edge AI technology to revolutionize your hiring process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border shadow-elegant-md hover:shadow-hover transition-base">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Get started in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {howItWorks.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant-lg">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help/Instructions Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Getting Started Guide
              </h2>
              
              <Card className="shadow-elegant-lg">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Upload className="w-5 h-5 text-primary" />
                      Uploading Resumes
                    </h3>
                    <p className="text-muted-foreground">
                      Navigate to the Upload page and either drag-and-drop your resume files or click to browse. We support PDF and TXT formats. Each file should be under 10MB.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BarChart className="w-5 h-5 text-primary" />
                      Understanding Results
                    </h3>
                    <p className="text-muted-foreground">
                      After analysis, you'll see a detailed breakdown including an overall score (0-100), matched skills, experience level, and shortlist recommendation. Green indicates strong matches, yellow suggests potential, and red flags areas for review.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Reviewing History
                    </h3>
                    <p className="text-muted-foreground">
                      Access your History page to view all previously analyzed resumes. You can filter by date, score, or shortlist status. Click any entry to view full details again.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies using SmartHire to find the best talent faster.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/upload">
                Start Screening Resumes
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
