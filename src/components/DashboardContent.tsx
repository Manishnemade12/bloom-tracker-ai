import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import DailyLogForm from "@/components/DailyLogForm";
import CycleOverview from "@/components/CycleOverview";
import HealthCharts from "@/components/HealthCharts";
import Recommendations from "@/components/Recommendations";
import { LogOut, Heart, Activity, Brain, TrendingUp } from "lucide-react";

interface DashboardContentProps {
  user: User;
}

const DashboardContent = ({ user }: DashboardContentProps) => {
  const { toast } = useToast();
  const [profile, setProfile] = useState<any>(null);
  const [dailyLogs, setDailyLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserData();
  }, [user]);

  const loadUserData = async () => {
    try {
      // Load profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();
      
      setProfile(profileData);

      // Load daily logs (last 30 days)
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const { data: logsData } = await supabase
        .from("daily_logs")
        .select("*")
        .eq("user_id", user.id)
        .gte("log_date", thirtyDaysAgo.toISOString().split("T")[0])
        .order("log_date", { ascending: false });
      
      setDailyLogs(logsData || []);
    } catch (error: any) {
      toast({
        title: "Error loading data",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleLogSaved = () => {
    loadUserData();
  };

  if (loading || !profile) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="animate-pulse">Loading your health data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      
      {/* Header */}
      <header className="relative border-b bg-white/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Bloom Tracker</h1>
                <p className="text-sm text-muted-foreground">Welcome back, {profile.name}</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <CycleOverview profile={profile} logs={dailyLogs} />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="log" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glass-card">
            <TabsTrigger value="log" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Daily Log
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Insights
            </TabsTrigger>
            <TabsTrigger value="trends" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trends
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Recommendations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="log">
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle>Today's Health Log</CardTitle>
                <CardDescription>Track your daily health metrics and symptoms</CardDescription>
              </CardHeader>
              <CardContent>
                <DailyLogForm userId={user.id} onSave={handleLogSaved} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle>Cycle Insights</CardTitle>
                  <CardDescription>AI-powered predictions and patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-health rounded-lg text-white">
                      <p className="font-semibold">Fertile Window</p>
                      <p className="text-sm opacity-90">Predicted: Days 12-16 of your cycle</p>
                    </div>
                    <div className="p-4 bg-gradient-accent rounded-lg text-white">
                      <p className="font-semibold">Next Period</p>
                      <p className="text-sm opacity-90">Expected in 14 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle>Health Score</CardTitle>
                  <CardDescription>Based on your recent logs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="hsl(var(--muted))"
                          strokeWidth="12"
                          fill="none"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="url(#gradient)"
                          strokeWidth="12"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.75)}`}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="gradient">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--secondary))" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold gradient-text">75%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends">
            <HealthCharts logs={dailyLogs} />
          </TabsContent>

          <TabsContent value="recommendations">
            <Recommendations profile={profile} logs={dailyLogs} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DashboardContent;