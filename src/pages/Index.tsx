import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Activity, Brain, Calendar, TrendingUp, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dashboard");
      }
      setLoading(false);
    });
  }, [navigate]);

  if (loading) return null;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-full animate-float">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Bloom Tracker</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your AI-powered personal health companion for cycle tracking, wellness insights, and personalized recommendations
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => navigate("/auth")} variant="gradient" size="lg">
              Get Started
            </Button>
            <Button onClick={() => navigate("/auth")} variant="glass" size="lg">
              Sign In
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="glass-card border-white/20 hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Cycle Tracking</h3>
              <p className="text-muted-foreground">AI-powered predictions for your period, fertile window, and ovulation</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20 hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <Brain className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Personalized Insights</h3>
              <p className="text-muted-foreground">Get tailored health recommendations based on your unique patterns</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20 hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <TrendingUp className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Health Analytics</h3>
              <p className="text-muted-foreground">Track mood, symptoms, and wellness trends with beautiful visualizations</p>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-8 items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5" />
            <span>Privacy First</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Activity className="w-5 h-5" />
            <span>Science-Based</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart className="w-5 h-5" />
            <span>Personalized</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
