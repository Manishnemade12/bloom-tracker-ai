import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, MapPin, Star, Camera, Palette, Scissors, Sparkles, ArrowRight, Instagram, Mail, Trophy, Medal, Award, Quote, Check, ChevronRight, Facebook, Globe, Twitter, Youtube, Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const artist = {
  name: 'Sarah Anderson',
  title: 'Bridal Makeup Artist',
  location: 'Mumbai, India',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  rating: 4.9,
  clients: 500,
  experience: '8+ yrs',
  yearsExp: 8,
  reviewCount: 128,
  about: 'Professional makeup artist with 8+ years of experience specializing in bridal and fashion makeup. Trained at renowned academies and worked with top celebrities. My passion is to make every bride feel like the most beautiful version of themselves on their special day.',
  
  specializations: ['Bridal Makeup', 'Party Makeup', 'Editorial', 'Airbrush', 'Hair Styling'],
  
  highlightAchievements: [
    { id: 1, title: 'Best Bridal Makeup Artist 2023', description: 'Awarded by Wedding Sutra Awards', icon: Trophy },
    { id: 2, title: '500+ Happy Brides', description: 'Milestone achieved', icon: Medal },
    { id: 3, title: 'Featured in Vogue India', description: 'Editorial spread - March 2023', icon: Award },
  ],
  
  workExperience: [
    { id: 1, role: 'Senior Makeup Artist', company: 'MELSTA Studio', duration: '2020 - Present', description: 'Lead makeup artist for bridal and celebrity clients' },
    { id: 2, role: 'Makeup Artist', company: 'Lakme Salon', duration: '2017 - 2020', description: 'Specialized in party and editorial makeup' },
    { id: 3, role: 'Junior Artist', company: 'Freelance', duration: '2015 - 2017', description: 'Started career with wedding and event makeup' },
  ],
  
  certifications: [
    { id: 1, name: 'Certified Bridal Makeup Artist', issuer: 'MELSTA Academy', year: '2020' },
    { id: 2, name: 'Advanced Airbrush Techniques', issuer: 'Lakme Academy', year: '2019' },
    { id: 3, name: 'HD Makeup Certification', issuer: 'Pro Makeup School', year: '2018' },
  ],
  
  gallery: [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
  ],
  
  reviews: [
    { id: 1, name: 'Priya Sharma', rating: 5, text: 'Absolutely stunning bridal makeup! Sarah made me feel like a princess on my special day.', date: '2 weeks ago' },
    { id: 2, name: 'Anjali Patel', rating: 5, text: 'Professional and talented. The airbrush makeup lasted all night!', date: '1 month ago' },
    { id: 3, name: 'Meera Kapoor', rating: 5, text: 'Best makeup artist in Mumbai. Highly recommend for any occasion.', date: '2 months ago' },
  ],
};

export default function Page2() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-background">
      {/* Centered Profile Header */}
      <div className="pt-12 pb-8 text-center px-4">
        <div className="relative inline-block mb-6">
          <img src={artist.avatar} alt={artist.name} className="w-32 h-32 rounded-full object-cover border-4 border-primary/30 shadow-xl" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <Badge className="bg-primary text-primary-foreground gap-1 shadow-lg"><Check className="h-3 w-3" />Top Artist</Badge>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-1">{artist.name}</h1>
        <p className="text-primary font-medium mb-1">{artist.title}</p>
        <p className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
          <MapPin className="h-3.5 w-3.5" />{artist.location}
        </p>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">{artist.about}</p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-2 mt-6">
          {[Instagram, Youtube, Facebook, Twitter, Globe].map((Icon, i) => (
            <a key={i} href="#" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors">
              <Icon className="h-5 w-5 text-foreground" />
            </a>
          ))}
        </div>

        {/* Share Button */}
        <Button size="sm" variant="outline" className="mt-4 gap-2" onClick={handleShare}>
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <ArrowRight className="h-4 w-4" />}
          {copied ? 'Copied!' : 'Share Profile'}
        </Button>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Rating', value: artist.rating.toString(), icon: Star, color: 'text-yellow-500' },
            { label: 'Reviews', value: artist.reviewCount.toString(), icon: Quote, color: 'text-primary' },
            { label: 'Experience', value: artist.experience, icon: Briefcase, color: 'text-blue-500' },
          ].map(s => (
            <div key={s.label} className="bg-card rounded-2xl p-4 text-center border border-border/50 hover:border-primary/30 transition-all">
              <s.icon className={`h-5 w-5 mx-auto mb-2 ${s.color}`} />
              <p className="text-xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Trophy className="h-4 w-4 text-primary" />Achievements
          </h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {artist.highlightAchievements.map((a) => (
              <div key={a.id} className="p-4 bg-gradient-to-br from-accent to-accent/50 rounded-xl border border-border/50">
                <a.icon className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-semibold text-foreground text-sm">{a.title}</h4>
                <p className="text-xs text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />Specializations
          </h3>
          <div className="flex flex-wrap gap-2">
            {artist.specializations.map((spec) => (
              <Badge key={spec} variant="secondary" className="px-4 py-2">{spec}</Badge>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />Work Experience
          </h3>
          <div className="space-y-3">
            {artist.workExperience.map((exp) => (
              <div key={exp.id} className="p-4 bg-card rounded-xl border border-border/50">
                <h4 className="font-semibold text-foreground">{exp.role}</h4>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Calendar className="h-3 w-3" />{exp.duration}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />Certifications
          </h3>
          <div className="space-y-2">
            {artist.certifications.map((cert) => (
              <div key={cert.id} className="p-3 bg-card rounded-lg border border-border/50 flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Camera className="h-4 w-4 text-primary" />Portfolio
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {artist.gallery.map((src, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl">
                <img src={src} alt={`Work ${i + 1}`} className="aspect-square object-cover w-full transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Quote className="h-4 w-4 text-primary" />Client Reviews
          </h3>
          <div className="space-y-3">
            {artist.reviews.map((review, i) => (
              <div key={i} className="p-4 bg-accent/30 rounded-xl border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center text-primary font-semibold shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground">{review.name}</span>
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{review.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 pb-8">
          <Button className="w-full h-12 text-base font-semibold gap-2">
            Book Now <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
