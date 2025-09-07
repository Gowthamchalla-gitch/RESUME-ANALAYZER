import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, TrendingUp } from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  matchScore: number;
  type: string;
  postedTime: string;
  topSkills: string[];
}

interface JobRecommendationsProps {
  jobs: Job[];
}

export const JobRecommendations = ({ jobs }: JobRecommendationsProps) => {
  const getMatchColor = (score: number) => {
    if (score >= 85) return "text-success";
    if (score >= 70) return "text-primary";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Recommended Jobs</h3>
      
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold text-lg">{job.title}</h4>
                <p className="text-muted-foreground">{job.company}</p>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${getMatchColor(job.matchScore)}`}>
                  {job.matchScore}%
                </div>
                <p className="text-xs text-muted-foreground">match</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                {job.salary}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {job.postedTime}
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline">{job.type}</Badge>
              {job.topSkills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-sm text-primary">
                <TrendingUp className="h-4 w-4" />
                Strong skill match
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <Button variant="outline" className="w-full">
          View All {jobs.length + 15} Matches
        </Button>
      </div>
    </Card>
  );
};