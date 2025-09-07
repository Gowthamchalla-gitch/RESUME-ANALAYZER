import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  matched: boolean;
  importance: "high" | "medium" | "low";
}

interface SkillsAnalysisProps {
  skills: Skill[];
}

export const SkillsAnalysis = ({ skills }: SkillsAnalysisProps) => {
  const matchedSkills = skills.filter(skill => skill.matched);
  const missingSkills = skills.filter(skill => !skill.matched);

  const getSkillVariant = (skill: Skill) => {
    if (skill.matched) {
      return skill.importance === "high" ? "default" : "secondary";
    } else {
      return skill.importance === "high" ? "destructive" : "outline";
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Skills Analysis</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-success">✓ Matched Skills ({matchedSkills.length})</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {matchedSkills.map((skill, index) => (
              <Badge
                key={index}
                variant={getSkillVariant(skill)}
                className="text-sm"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-destructive">⚠ Missing Skills ({missingSkills.length})</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill, index) => (
              <Badge
                key={index}
                variant={getSkillVariant(skill)}
                className="text-sm"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <h5 className="font-medium mb-2">Skill Match Score</h5>
          <div className="text-2xl font-bold text-primary">
            {Math.round((matchedSkills.length / skills.length) * 100)}%
          </div>
          <p className="text-sm text-muted-foreground">
            {matchedSkills.length} of {skills.length} required skills found
          </p>
        </div>
      </div>
    </Card>
  );
};