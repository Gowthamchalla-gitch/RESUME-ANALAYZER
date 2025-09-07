import { useState } from "react";
import { ResumeUpload } from "./ResumeUpload";
import { ATSScore } from "./ATSScore";
import { SkillsAnalysis } from "./SkillsAnalysis";
import { ImprovementSuggestions } from "./ImprovementSuggestions";
import { JobRecommendations } from "./JobRecommendations";

// Mock data
const mockSkills = [
  { name: "JavaScript", matched: true, importance: "high" as const },
  { name: "React", matched: true, importance: "high" as const },
  { name: "Python", matched: false, importance: "high" as const },
  { name: "Node.js", matched: true, importance: "medium" as const },
  { name: "TypeScript", matched: true, importance: "medium" as const },
  { name: "Machine Learning", matched: false, importance: "high" as const },
  { name: "AWS", matched: false, importance: "medium" as const },
  { name: "SQL", matched: true, importance: "medium" as const },
];

const mockSuggestions = [
  {
    type: "critical" as const,
    title: "Add Missing Critical Skills",
    description: "Your resume is missing 'Python' and 'Machine Learning' which are required for this position.",
    action: "Add these skills to your technical skills section with specific examples or projects."
  },
  {
    type: "important" as const,
    title: "Quantify Your Achievements",
    description: "Include specific numbers and percentages to demonstrate impact.",
    action: "Replace vague descriptions with measurable results (e.g., 'Improved performance by 40%')."
  },
  {
    type: "suggestion" as const,
    title: "Optimize Keywords",
    description: "Use more job-specific keywords throughout your resume.",
    action: "Include terms like 'data analysis', 'algorithm optimization', and 'cloud deployment'."
  },
];

const mockJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120K - $160K",
    matchScore: 87,
    type: "Full-time",
    postedTime: "2 days ago",
    topSkills: ["React", "JavaScript", "TypeScript"]
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "Remote",
    salary: "$100K - $140K",
    matchScore: 73,
    type: "Full-time",
    postedTime: "1 week ago",
    topSkills: ["Node.js", "React", "Python"]
  },
  {
    id: "3",
    title: "Software Developer",
    company: "MegaCorp",
    location: "New York, NY",
    salary: "$90K - $120K",
    matchScore: 68,
    type: "Full-time",
    postedTime: "3 days ago",
    topSkills: ["JavaScript", "SQL", "AWS"]
  }
];

export const ResumeDashboard = () => {
  const [hasResume, setHasResume] = useState(false);

  const handleFileUpload = (file: File) => {
    console.log("Uploaded file:", file.name);
    // Simulate processing time
    setTimeout(() => {
      setHasResume(true);
    }, 1000);
  };

  if (!hasResume) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">AI Resume Analyzer</h1>
            <p className="text-xl text-muted-foreground">
              Get instant feedback on your resume and discover job opportunities
            </p>
          </div>
          <ResumeUpload onFileUpload={handleFileUpload} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Resume Analysis Report</h1>
          <p className="text-muted-foreground">
            Based on the job description: "Senior Frontend Developer at TechCorp"
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <ATSScore score={78} category="good" />
            <SkillsAnalysis skills={mockSkills} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-6">
            <ImprovementSuggestions suggestions={mockSuggestions} />
            <JobRecommendations jobs={mockJobs} />
          </div>
        </div>
      </div>
    </div>
  );
};