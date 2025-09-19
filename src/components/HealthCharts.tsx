import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface HealthChartsProps {
  logs: any[];
}

const HealthCharts = ({ logs }: HealthChartsProps) => {
  return (
    <Card className="glass-card border-white/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Health Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center text-muted-foreground">
          Charts will display your health trends over time
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthCharts;