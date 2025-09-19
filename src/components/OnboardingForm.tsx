import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Heart, User as UserIcon, Activity, MapPin, Calendar } from "lucide-react";

interface OnboardingFormProps {
  user: User;
  onComplete: () => void;
}

const OnboardingForm = ({ user, onComplete }: OnboardingFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    location: "",
    activity_level: "moderate",
    cycle_length: "28",
    period_duration: "5",
    last_period_start: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("profiles").insert({
        user_id: user.id,
        name: formData.name,
        age: parseInt(formData.age),
        height: parseInt(formData.height),
        weight: parseFloat(formData.weight),
        location: formData.location,
        activity_level: formData.activity_level,
        cycle_length: parseInt(formData.cycle_length),
        period_duration: parseInt(formData.period_duration),
        last_period_start: formData.last_period_start || null,
      });

      if (error) throw error;

      toast({
        title: "Welcome to Bloom Tracker!",
        description: "Your profile has been created successfully.",
      });
      
      onComplete();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create profile.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      
      <div className="max-w-2xl mx-auto relative">
        <Card className="glass-card border-white/20">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-primary rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center gradient-text">
              Welcome to Bloom Tracker
            </CardTitle>
            <CardDescription className="text-center">
              Let's personalize your health tracking experience
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <UserIcon className="w-5 h-5 text-primary" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      min="13"
                      max="100"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      required
                      placeholder="Years"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      min="100"
                      max="250"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      required
                      placeholder="Centimeters"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      min="30"
                      max="300"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      required
                      placeholder="Kilograms"
                    />
                  </div>
                </div>
              </div>

              {/* Location & Activity */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Lifestyle
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="activity">Activity Level</Label>
                    <Select
                      value={formData.activity_level}
                      onValueChange={(value) => setFormData({ ...formData, activity_level: value })}
                    >
                      <SelectTrigger id="activity">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">Sedentary</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Cycle Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Cycle Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cycle_length">Average Cycle Length (days)</Label>
                    <Select
                      value={formData.cycle_length}
                      onValueChange={(value) => setFormData({ ...formData, cycle_length: value })}
                    >
                      <SelectTrigger id="cycle_length">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 15 }, (_, i) => i + 21).map((day) => (
                          <SelectItem key={day} value={day.toString()}>
                            {day} days
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="period_duration">Period Duration (days)</Label>
                    <Select
                      value={formData.period_duration}
                      onValueChange={(value) => setFormData({ ...formData, period_duration: value })}
                    >
                      <SelectTrigger id="period_duration">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 5 }, (_, i) => i + 3).map((day) => (
                          <SelectItem key={day} value={day.toString()}>
                            {day} days
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="last_period">Last Period Start Date (Optional)</Label>
                    <Input
                      id="last_period"
                      type="date"
                      value={formData.last_period_start}
                      onChange={(e) => setFormData({ ...formData, last_period_start: e.target.value })}
                      max={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                variant="gradient"
                disabled={loading}
                size="lg"
              >
                {loading ? "Creating your profile..." : "Start Tracking"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingForm;