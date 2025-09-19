import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Droplets, Moon, Heart } from "lucide-react";

interface CycleOverviewProps {
  profile: any;
  logs: any[];
}

const CycleOverview = ({ profile, logs }: CycleOverviewProps) => {
  const calculateCycleDay = () => {
    if (!profile.last_period_start) return "N/A";
    const lastPeriod = new Date(profile.last_period_start);
    const today = new Date();
    const daysDiff = Math.floor((today.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24));
    return (daysDiff % profile.cycle_length) + 1;
  };

  const cycleDay = calculateCycleDay();
  const cycleDayNum = typeof cycleDay === 'number' ? cycleDay : 0;
  const currentPhase = cycleDayNum <= 5 ? "Menstrual" : cycleDayNum <= 14 ? "Follicular" : "Luteal";

  return (
    <>
      <Card className="glass-card border-white/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Cycle Day
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold gradient-text">{cycleDay}</p>
          <p className="text-xs text-muted-foreground">of {profile.cycle_length}</p>
        </CardContent>
      </Card>

      <Card className="glass-card border-white/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Droplets className="w-4 h-4 text-secondary" />
            Current Phase
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-secondary">{currentPhase}</p>
          <p className="text-xs text-muted-foreground">Phase</p>
        </CardContent>
      </Card>

      <Card className="glass-card border-white/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Moon className="w-4 h-4 text-accent" />
            Avg Sleep
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-accent">7.5</p>
          <p className="text-xs text-muted-foreground">hours/night</p>
        </CardContent>
      </Card>

      <Card className="glass-card border-white/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Heart className="w-4 h-4 text-health-green" />
            Wellness
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-health-green">Good</p>
          <p className="text-xs text-muted-foreground">Overall health</p>
        </CardContent>
      </Card>
    </>
  );
};

export default CycleOverview;