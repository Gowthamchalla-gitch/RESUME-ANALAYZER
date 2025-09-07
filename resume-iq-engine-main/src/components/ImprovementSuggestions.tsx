import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";

interface Suggestion {
  type: "critical" | "important" | "suggestion";
  title: string;
  description: string;
  action?: string;
}

interface ImprovementSuggestionsProps {
  suggestions: Suggestion[];
}

export const ImprovementSuggestions = ({ suggestions }: ImprovementSuggestionsProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      case "important":
        return <CheckCircle2 className="h-5 w-5 text-warning" />;
      case "suggestion":
        return <Lightbulb className="h-5 w-5 text-primary" />;
      default:
        return <Lightbulb className="h-5 w-5 text-primary" />;
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "critical":
        return "destructive";
      case "important":
        return "outline";
      case "suggestion":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Improvement Suggestions</h3>
      
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="border-l-4 border-l-primary pl-4">
            <div className="flex items-start gap-3">
              {getIcon(suggestion.type)}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">{suggestion.title}</h4>
                  <Badge variant={getBadgeVariant(suggestion.type)} className="text-xs">
                    {suggestion.type}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  {suggestion.description}
                </p>
                {suggestion.action && (
                  <div className="bg-muted p-2 rounded text-sm">
                    <strong>Action:</strong> {suggestion.action}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-success-light rounded-lg">
          <h5 className="font-medium text-success mb-2">Quick Wins</h5>
          <ul className="text-sm text-success space-y-1">
            <li>• Add missing keywords: "Python", "Machine Learning"</li>
            <li>• Include years of experience for each skill</li>
            <li>• Quantify achievements with numbers and percentages</li>
          </ul>
        </div>

        <div className="p-4 bg-accent/10 rounded-lg">
          <h5 className="font-medium text-accent mb-2">Formatting Guidelines</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h6 className="font-medium mb-2">Resume Length</h6>
              <ul className="text-muted-foreground space-y-1">
                <li>• Entry level (0-5 years): 1 page maximum</li>
                <li>• Mid-level (5-10 years): 1-2 pages</li>
                <li>• Senior level (10+ years): 2 pages maximum</li>
                <li>• Academic/Research: 3+ pages (CV format)</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-medium mb-2">Font Recommendations</h6>
              <ul className="text-muted-foreground space-y-1">
                <li>• Professional: Calibri, Arial, Times New Roman</li>
                <li>• Modern: Helvetica, Georgia, Garamond</li>
                <li>• Font size: 10-12pt for body, 14-16pt for headers</li>
                <li>• Margins: 0.5-1 inch on all sides</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};