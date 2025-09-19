import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Droplets, Moon, Heart, Brain, Battery, Dumbbell } from "lucide-react";

interface DailyLogFormProps {
  userId: string;
  onSave: () => void;
}

const DailyLogForm = ({ userId, onSave }: DailyLogFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [todayLog, setTodayLog] = useState<any>(null);
  const [formData, setFormData] = useState({
    flow: "none",
    mood: "",
    symptoms: [] as string[],
    cravings: [] as string[],
    energy_level: "medium",
    sleep_hours: "",
    sleep_quality: "good",
    stress_level: "medium",
    weight: "",
    water_intake: "",
    exercise: "",
    food_log: "",
    medications: [] as string[],
  });

  const symptomOptions = ["Cramps", "Headache", "Bloating", "Back pain", "Mood swings", "Fatigue"];
  const cravingOptions = ["Sweet", "Salty", "Chocolate", "Carbs", "Fruits", "Spicy"];

  useEffect(() => {
    loadTodayLog();
  }, [userId]);

  const loadTodayLog = async () => {
    const today = new Date().toISOString().split("T")[0];
    const { data } = await supabase
      .from("daily_logs")
      .select("*")
      .eq("user_id", userId)
      .eq("log_date", today)
      .maybeSingle();
    
    if (data) {
      setTodayLog(data);
      setFormData({
        flow: data.flow || "none",
        mood: data.mood || "",
        symptoms: data.symptoms || [],
        cravings: data.cravings || [],
        energy_level: data.energy_level || "medium",
        sleep_hours: data.sleep_hours?.toString() || "",
        sleep_quality: data.sleep_quality || "good",
        stress_level: data.stress_level || "medium",
        weight: data.weight?.toString() || "",
        water_intake: data.water_intake?.toString() || "",
        exercise: data.exercise || "",
        food_log: data.food_log || "",
        medications: data.medications || [],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const today = new Date().toISOString().split("T")[0];
    const logData = {
      user_id: userId,
      log_date: today,
      ...formData,
      sleep_hours: formData.sleep_hours ? parseFloat(formData.sleep_hours) : null,
      weight: formData.weight ? parseFloat(formData.weight) : null,
      water_intake: formData.water_intake ? parseInt(formData.water_intake) : null,
    };

    try {
      if (todayLog) {
        const { error } = await supabase
          .from("daily_logs")
          .update(logData)
          .eq("id", todayLog.id);
        
        if (error) throw error;
        
        toast({
          title: "Log updated",
          description: "Your daily health log has been updated.",
        });
      } else {
        const { error } = await supabase
          .from("daily_logs")
          .insert(logData);
        
        if (error) throw error;
        
        toast({
          title: "Log saved",
          description: "Your daily health log has been saved.",
        });
      }
      
      onSave();
      loadTodayLog();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleSymptom = (symptom: string) => {
    setFormData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter(s => s !== symptom)
        : [...prev.symptoms, symptom]
    }));
  };

  const toggleCraving = (craving: string) => {
    setFormData(prev => ({
      ...prev,
      cravings: prev.cravings.includes(craving)
        ? prev.cravings.filter(c => c !== craving)
        : [...prev.cravings, craving]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Flow & Mood */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="flow" className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-primary" />
            Flow
          </Label>
          <Select
            value={formData.flow}
            onValueChange={(value) => setFormData({ ...formData, flow: value })}
          >
            <SelectTrigger id="flow">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="heavy">Heavy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mood" className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-primary" />
            Mood
          </Label>
          <Input
            id="mood"
            value={formData.mood}
            onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
            placeholder="How are you feeling?"
          />
        </div>
      </div>

      {/* Symptoms */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-primary" />
          Symptoms
        </Label>
        <div className="flex flex-wrap gap-2">
          {symptomOptions.map((symptom) => (
            <Button
              key={symptom}
              type="button"
              variant={formData.symptoms.includes(symptom) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleSymptom(symptom)}
              className="rounded-full"
            >
              {symptom}
            </Button>
          ))}
        </div>
      </div>

      {/* Cravings */}
      <div className="space-y-2">
        <Label>Cravings</Label>
        <div className="flex flex-wrap gap-2">
          {cravingOptions.map((craving) => (
            <Button
              key={craving}
              type="button"
              variant={formData.cravings.includes(craving) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleCraving(craving)}
              className="rounded-full"
            >
              {craving}
            </Button>
          ))}
        </div>
      </div>

      {/* Energy & Sleep */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="energy" className="flex items-center gap-2">
            <Battery className="w-4 h-4 text-primary" />
            Energy Level
          </Label>
          <Select
            value={formData.energy_level}
            onValueChange={(value) => setFormData({ ...formData, energy_level: value })}
          >
            <SelectTrigger id="energy">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sleep_hours" className="flex items-center gap-2">
            <Moon className="w-4 h-4 text-primary" />
            Sleep Hours
          </Label>
          <Input
            id="sleep_hours"
            type="number"
            step="0.5"
            min="0"
            max="24"
            value={formData.sleep_hours}
            onChange={(e) => setFormData({ ...formData, sleep_hours: e.target.value })}
            placeholder="Hours"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sleep_quality">Sleep Quality</Label>
          <Select
            value={formData.sleep_quality}
            onValueChange={(value) => setFormData({ ...formData, sleep_quality: value })}
          >
            <SelectTrigger id="sleep_quality">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="poor">Poor</SelectItem>
              <SelectItem value="average">Average</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="excellent">Excellent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="stress">Stress Level</Label>
          <Select
            value={formData.stress_level}
            onValueChange={(value) => setFormData({ ...formData, stress_level: value })}
          >
            <SelectTrigger id="stress">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
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
            placeholder="Optional"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="water">Water Intake (ml)</Label>
          <Input
            id="water"
            type="number"
            step="100"
            min="0"
            max="5000"
            value={formData.water_intake}
            onChange={(e) => setFormData({ ...formData, water_intake: e.target.value })}
            placeholder="Milliliters"
          />
        </div>
      </div>

      {/* Exercise */}
      <div className="space-y-2">
        <Label htmlFor="exercise" className="flex items-center gap-2">
          <Dumbbell className="w-4 h-4 text-primary" />
          Exercise
        </Label>
        <Input
          id="exercise"
          value={formData.exercise}
          onChange={(e) => setFormData({ ...formData, exercise: e.target.value })}
          placeholder="Type of exercise and duration"
        />
      </div>

      {/* Food Log */}
      <div className="space-y-2">
        <Label htmlFor="food">Food Log</Label>
        <Textarea
          id="food"
          value={formData.food_log}
          onChange={(e) => setFormData({ ...formData, food_log: e.target.value })}
          placeholder="What did you eat today?"
          rows={3}
        />
      </div>

      <Button type="submit" variant="gradient" className="w-full" disabled={loading}>
        {loading ? "Saving..." : todayLog ? "Update Log" : "Save Log"}
      </Button>
    </form>
  );
};

export default DailyLogForm;