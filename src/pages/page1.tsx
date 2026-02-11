import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Award, Briefcase, Calendar, Check, ChevronRight, Facebook, Globe,
  GraduationCap, Instagram, MapPin, Medal, Quote, Share2, Star, Trophy, Twitter, Youtube,
} from 'lucide-react';

const artistData = {
  name: 'Sarah Anderson',
  title: 'Bridal Makeup Artist',
  location: 'Mumbai, India',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
  coverImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800',
  rating: 4.9,
  reviewCount: 128,
  yearsExp: 8,
  isMelstaVerified: true,
  about: 'Professional makeup artist with 8+ years of experience specializing in bridal and fashion makeup.',
  socialLinks: {
    instagram: '#', youtube: '#', facebook: '#', twitter: '#', website: '#',
  },
  badges: [
    { id: 1, name: 'Top Rated', icon: '⭐', color: 'from-yellow-400 to-amber-500' },
    { id: 2, name: 'Verified', icon: '✓', color: 'from-pink-400 to-rose-500' },
    { id: 3, name: '100+ Bookings', icon: '🎯', color: 'from-blue-400 to-indigo-500' },
  ],
  certifications: [
    { id: 1, name: 'Certified Bridal Makeup Artist', issuer: 'Academy', year: '2020' },
    { id: 2, name: 'Advanced Airbrush Techniques', issuer: 'Lakme Academy', year: '2019' },
  ],
  workExperience: [
    { id: 1, role: 'Senior Makeup Artist', company: 'Studio', duration: '2020 - Present', description: 'Lead artist for bridal clients' },
    { id: 2, role: 'Makeup Artist', company: 'Lakme Salon', duration: '2017 - 2020', description: 'Party and editorial makeup' },
  ],
  achievements: [
    { id: 1, title: 'Best Bridal Makeup 2023', description: 'Wedding Sutra Awards', icon: Trophy },
    { id: 2, title: '500+ Happy Brides', description: 'Milestone 2022', icon: Medal },
    { id: 3, title: 'Featured in Vogue India', description: 'March 2023', icon: Award },
  ],
  specializations: ['Bridal Makeup', 'Party Makeup', 'Editorial', 'Airbrush', 'Hair Styling'],
  portfolio: [
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
  ],
  reviews: [
    { id: 1, name: 'Priya Sharma', rating: 5, text: 'Stunning bridal makeup! Made me feel like a princess.', date: '2 weeks ago' },
    { id: 2, name: 'Anjali Patel', rating: 5, text: 'Professional and talented. Airbrush lasted all night!', date: '1 month ago' },
  ],
};

export default function Page1() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-64 sm:h-72 bg-gradient-to-br from-primary/30 via-accent to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${artistData.coverImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute top-4 right-4 z-10">
          <Button size="sm" variant="secondary" className="gap-2 backdrop-blur-sm bg-background/80" onClick={handleShare}>
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Share2 className="h-4 w-4" />}
            {copied ? 'Copied!' : 'Share'}
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-4xl mx-auto flex items-end gap-4">
            <div className="relative">
              <img src={artistData.avatar} alt={artistData.name} className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl object-cover border-4 border-background shadow-lg" />
              {artistData.isMelstaVerified && (
                <div className="absolute -bottom-1 -right-1 bg-primary h-6 w-6 rounded-full border-2 border-background flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
              )}
            </div>
            <div className="pb-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{artistData.name}</h1>
                <Badge className="bg-primary text-primary-foreground gap-1"><Check className="h-3 w-3" />Verified</Badge>
              </div>
              <p className="text-muted-foreground flex items-center gap-1">
                {artistData.title} <span className="mx-1">•</span> <MapPin className="h-3.5 w-3.5" />{artistData.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8">
        {/* Social Links */}
        <div className="flex flex-wrap gap-2">
          {[Instagram, Youtube, Facebook, Twitter, Globe].map((Icon, i) => (
            <a key={i} href="#" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors">
              <Icon className="h-5 w-5 text-foreground" />
            </a>
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {artistData.badges.map((badge) => (
            <div key={badge.id} className={`flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} text-white text-sm font-medium shadow-lg`}>
              <span>{badge.icon}</span><span>{badge.name}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: artistData.rating.toString(), label: 'Rating', icon: Star, color: 'text-yellow-500' },
            { value: artistData.reviewCount.toString(), label: 'Reviews', icon: Quote, color: 'text-primary' },
            { value: `${artistData.yearsExp}+`, label: 'Years', icon: Award, color: 'text-emerald-500' },
          ].map(stat => (
            <div key={stat.label} className="text-center p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all">
              <stat.icon className={`h-5 w-5 mx-auto mb-2 ${stat.color}`} />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />Achievements
          </h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {artistData.achievements.map((a) => (
              <div key={a.id} className="p-4 bg-gradient-to-br from-accent to-accent/50 rounded-xl border border-border/50">
                <a.icon className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-semibold text-foreground text-sm">{a.title}</h4>
                <p className="text-xs text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />About Me
          </h3>
          <p className="text-muted-foreground leading-relaxed">{artistData.about}</p>
        </div>

        {/* Work Experience */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />Experience
          </h3>
          <div className="space-y-3">
            {artistData.workExperience.map((exp) => (
              <div key={exp.id} className="p-4 bg-card rounded-xl border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3" />{exp.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />Certifications
          </h3>
          <div className="space-y-3">
            {artistData.certifications.map((cert) => (
              <div key={cert.id} className="p-4 bg-card rounded-xl border border-border/50 flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />Portfolio
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {artistData.portfolio.map((src, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl">
                <img src={src} alt={`Work ${i + 1}`} className="aspect-square object-cover w-full transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />Reviews
          </h3>
          <div className="space-y-3">
            {artistData.reviews.map((review) => (
              <div key={review.id} className="p-4 bg-accent/30 rounded-xl border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center text-primary font-semibold shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground">{review.name}</span>
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{review.text}</p>
                    <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 pb-8">
          <Button className="w-full h-12 text-base font-semibold gap-2 group">
            Book Now <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
