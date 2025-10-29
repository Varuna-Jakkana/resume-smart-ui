import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, Award, Briefcase, GraduationCap, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Results = () => {
  // Mock data - will be replaced with actual API data
  const candidateData = {
    fileName: "john_doe_resume.pdf",
    uploadDate: "2024-01-15",
    overallScore: 87,
    shortlisted: true,
    skills: {
      matched: ["JavaScript", "React", "TypeScript", "Node.js", "AWS"],
      missing: ["Kubernetes", "Docker"],
    },
    experience: {
      years: 5,
      level: "Senior",
    },
    education: {
      degree: "Bachelor's in Computer Science",
      institution: "Tech University",
    },
    scoreBreakdown: [
      { category: "Technical Skills", score: 90 },
      { category: "Experience", score: 85 },
      { category: "Education", score: 88 },
      { category: "Communication", score: 84 },
    ],
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-secondary";
    if (score >= 60) return "text-accent";
    return "text-destructive";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-secondary/10";
    if (score >= 60) return "bg-accent/10";
    return "bg-destructive/10";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Analysis Results
              </h1>
              <p className="text-muted-foreground">
                Detailed resume analysis for {candidateData.fileName}
              </p>
            </div>

            {/* Overall Score Card */}
            <Card className="shadow-elegant-lg mb-8 border-2 border-border">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 flex flex-col items-center justify-center">
                    <div className={`w-32 h-32 rounded-full ${getScoreBgColor(candidateData.overallScore)} flex items-center justify-center mb-4`}>
                      <span className={`text-4xl font-bold ${getScoreColor(candidateData.overallScore)}`}>
                        {candidateData.overallScore}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">Overall Score</p>
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Shortlist Status
                      </h3>
                      <Badge 
                        variant={candidateData.shortlisted ? "default" : "secondary"}
                        className="text-base px-4 py-1"
                      >
                        {candidateData.shortlisted ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Recommended for Shortlist
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 mr-2" />
                            Not Recommended
                          </>
                        )}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Upload Date</p>
                        <p className="font-medium text-foreground">{candidateData.uploadDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Experience Level</p>
                        <p className="font-medium text-foreground">{candidateData.experience.level}</p>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full md:w-auto">
                      <Download className="w-4 h-4" />
                      Download Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Skills Card */}
              <Card className="shadow-elegant-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Skills Analysis
                  </CardTitle>
                  <CardDescription>Key competencies identified</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Matched Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {candidateData.skills.matched.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Skills Gap</h4>
                    <div className="flex flex-wrap gap-2">
                      {candidateData.skills.missing.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-muted-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experience & Education Card */}
              <Card className="shadow-elegant-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Experience & Education
                  </CardTitle>
                  <CardDescription>Professional background</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      <h4 className="text-sm font-semibold text-foreground">Experience</h4>
                    </div>
                    <p className="text-muted-foreground">
                      {candidateData.experience.years} years of professional experience
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      <h4 className="text-sm font-semibold text-foreground">Education</h4>
                    </div>
                    <p className="text-muted-foreground">
                      {candidateData.education.degree}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {candidateData.education.institution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Score Breakdown */}
            <Card className="shadow-elegant-md">
              <CardHeader>
                <CardTitle>Detailed Score Breakdown</CardTitle>
                <CardDescription>Performance across key evaluation criteria</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {candidateData.scoreBreakdown.map((item) => (
                  <div key={item.category} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {item.category}
                      </span>
                      <span className={`text-sm font-bold ${getScoreColor(item.score)}`}>
                        {item.score}%
                      </span>
                    </div>
                    <Progress value={item.score} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
