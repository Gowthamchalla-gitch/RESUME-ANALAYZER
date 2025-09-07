import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ATSScoreProps {
  score: number;
  category: "excellent" | "good" | "average" | "poor";
}

export const ATSScore = ({ score, category }: ATSScoreProps) => {
  const getScoreColor = () => {
    switch (category) {
      case "excellent":
        return "text-success";
      case "good":
        return "text-primary";
      case "average":
        return "text-warning";
      case "poor":
        return "text-destructive";
    }
  };

  const getProgressColor = () => {
    switch (category) {
      case "excellent":
        return "bg-success";
      case "good":
        return "bg-primary";
      case "average":
        return "bg-warning";
      case "poor":
        return "bg-destructive";
    }
  };

  const getScoreLabel = () => {
    switch (category) {
      case "excellent":
        return "Excellent";
      case "good":
        return "Good";
      case "average":
        return "Average";
      case "poor":
        return "Needs Improvement";
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">ATS Score</h3>
          <div className={`text-5xl font-bold ${getScoreColor()}`}>
            {score}%
          </div>
          <p className="text-lg font-medium mt-2">{getScoreLabel()}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Compatibility</span>
            <span>{score}%</span>
          </div>
          <Progress value={score} className="h-3" />
        </div>

        <div className="grid grid-cols-2 gap-4 text-center text-sm">
          <div>
            <div className="font-semibold text-success">✓ Keywords</div>
            <div className="text-muted-foreground">12/15 matched</div>
          </div>
          <div>
            <div className="font-semibold text-primary">📋 Format</div>
            <div className="text-muted-foreground">ATS-friendly</div>
          </div>
        </div>
      </div>
    </Card>
  );
};