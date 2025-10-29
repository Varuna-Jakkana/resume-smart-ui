import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Eye, Download, Calendar, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - will be replaced with actual API data
  const historyData = [
    {
      id: 1,
      fileName: "john_doe_resume.pdf",
      uploadDate: "2024-01-15",
      score: 87,
      shortlisted: true,
      status: "Completed",
    },
    {
      id: 2,
      fileName: "jane_smith_cv.pdf",
      uploadDate: "2024-01-14",
      score: 92,
      shortlisted: true,
      status: "Completed",
    },
    {
      id: 3,
      fileName: "michael_johnson.txt",
      uploadDate: "2024-01-13",
      score: 68,
      shortlisted: false,
      status: "Completed",
    },
    {
      id: 4,
      fileName: "sarah_williams_resume.pdf",
      uploadDate: "2024-01-12",
      score: 78,
      shortlisted: true,
      status: "Completed",
    },
    {
      id: 5,
      fileName: "david_brown_cv.pdf",
      uploadDate: "2024-01-11",
      score: 55,
      shortlisted: false,
      status: "Completed",
    },
  ];

  const filteredData = historyData.filter((item) =>
    item.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    return "destructive";
  };

  const stats = {
    total: historyData.length,
    shortlisted: historyData.filter((item) => item.shortlisted).length,
    avgScore: Math.round(
      historyData.reduce((sum, item) => sum + item.score, 0) / historyData.length
    ),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Upload History
              </h1>
              <p className="text-muted-foreground">
                View and manage all your analyzed resumes
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="shadow-elegant-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.total}</p>
                      <p className="text-sm text-muted-foreground">Total Analyzed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.shortlisted}</p>
                      <p className="text-sm text-muted-foreground">Shortlisted</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.avgScore}</p>
                      <p className="text-sm text-muted-foreground">Average Score</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* History Table */}
            <Card className="shadow-elegant-lg">
              <CardHeader>
                <CardTitle>Resume Analysis History</CardTitle>
                <CardDescription>
                  Click on any row to view detailed results
                </CardDescription>
                <div className="pt-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by file name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>File Name</TableHead>
                        <TableHead>Upload Date</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Shortlist Status</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredData.map((item) => (
                        <TableRow key={item.id} className="cursor-pointer hover:bg-muted/50">
                          <TableCell className="font-medium">{item.fileName}</TableCell>
                          <TableCell>{item.uploadDate}</TableCell>
                          <TableCell>
                            <Badge variant={getScoreBadgeVariant(item.score)}>
                              {item.score}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={item.shortlisted ? "default" : "outline"}>
                              {item.shortlisted ? "Yes" : "No"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm text-muted-foreground">
                              {item.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button asChild variant="ghost" size="sm">
                                <Link to="/results">
                                  <Eye className="w-4 h-4" />
                                </Link>
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {filteredData.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      No results found for "{searchQuery}"
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default History;
