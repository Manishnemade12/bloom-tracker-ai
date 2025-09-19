import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Utensils, Brain, Heart } from "lucide-react";

interface RecommendationsProps {
  profile: any;
  logs: any[];
}

const Recommendations = ({ profile, logs }: RecommendationsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="glass-card border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-primary" />
            Nutrition
          </CardTitle>
          <CardDescription>Phase-specific dietary recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="p-3 bg-primary/10 rounded-lg">
            <p className="font-medium">Iron-rich foods recommended</p>
            <p className="text-sm text-muted-foreground">Spinach, lean meats, legumes</p>
          </div>
          <div className="p-3 bg-secondary/10 rounded-lg">
            <p className="font-medium">Increase hydration</p>
            <p className="text-sm text-muted-foreground">Aim for 2-3 liters daily</p>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-accent" />
            Exercise
          </CardTitle>
          <CardDescription>Cycle-synced workout suggestions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="p-3 bg-accent/10 rounded-lg">
            <p className="font-medium">Light yoga or stretching</p>
            <p className="text-sm text-muted-foreground">20-30 minutes daily</p>
          </div>
          <div className="p-3 bg-health-green/10 rounded-lg">
            <p className="font-medium">Walking or swimming</p>
            <p className="text-sm text-muted-foreground">Low-impact cardio recommended</p>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-secondary" />
            Mental Wellness
          </CardTitle>
          <CardDescription>Stress management tips</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="p-3 bg-secondary/10 rounded-lg">
            <p className="font-medium">Practice meditation</p>
            <p className="text-sm text-muted-foreground">10 minutes before bed</p>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <p className="font-medium">Journaling</p>
            <p className="text-sm text-muted-foreground">Express your feelings daily</p>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-health-green" />
            Self-Care
          </CardTitle>
          <CardDescription>Personalized wellness activities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="p-3 bg-health-green/10 rounded-lg">
            <p className="font-medium">Warm baths</p>
            <p className="text-sm text-muted-foreground">Add epsom salts for relaxation</p>
          </div>
          <div className="p-3 bg-accent/10 rounded-lg">
            <p className="font-medium">Essential oils</p>
            <p className="text-sm text-muted-foreground">Lavender for better sleep</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recommendations;