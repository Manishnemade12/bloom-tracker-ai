'use client';

export const runtime = 'edge';

import { useToast } from '@packages/contexts';
import { Badge } from '@packages/shadcn/components/ui/badge';
import { Button } from '@packages/shadcn/components/ui/button';
import {
  Award,
  Briefcase,
  Calendar,
  Check,
  ChevronRight,
  Facebook,
  Globe,
  GraduationCap,
  Instagram,
  MapPin,
  Medal,
  Quote,
  Share2,
  Star,
  Trophy,
  Twitter,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const artistData = {
  name: 'Sarah Anderson',
  title: 'Bridal Makeup Artist',
  location: 'Mumbai, India',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
  coverImage:
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800',
  rating: 4.9,
  reviewCount: 128,
  yearsExp: 8,
  isMelstaVerified: true,
  about:
    'Professional makeup artist with 8+ years of experience specializing in bridal and fashion makeup. Trained at renowned academies and worked with top celebrities. My passion is to make every bride feel like the most beautiful version of themselves on their special day.',

  socialLinks: {
    instagram: 'https://instagram.com/sarahmakeup',
    youtube: 'https://youtube.com/@sarahmakeup',
    facebook: 'https://facebook.com/sarahmakeup',
    twitter: 'https://twitter.com/sarahmakeup',
    website: 'https://sarahmakeup.com',
  },

  badges: [
    {
      id: 1,
      name: 'Top Rated',
      icon: '⭐',
      color: 'from-yellow-400 to-amber-500',
    },
    {
      id: 2,
      name: 'MELSTA Verified',
      icon: '✓',
      color: 'from-primary to-primary/80',
    },
    {
      id: 3,
      name: '100+ Bookings',
      icon: '🎯',
      color: 'from-blue-400 to-indigo-500',
    },
  ],

  certifications: [
    {
      id: 1,
      name: 'Certified Bridal Makeup Artist',
      issuer: 'MELSTA Academy',
      year: '2020',
    },
    {
      id: 2,
      name: 'Advanced Airbrush Techniques',
      issuer: 'Lakme Academy',
      year: '2019',
    },
    {
      id: 3,
      name: 'HD Makeup Certification',
      issuer: 'Pro Makeup School',
      year: '2018',
    },
  ],

  workExperience: [
    {
      id: 1,
      role: 'Senior Makeup Artist',
      company: 'MELSTA Studio',
      duration: '2020 - Present',
      description: 'Lead makeup artist for bridal and celebrity clients',
    },
    {
      id: 2,
      role: 'Makeup Artist',
      company: 'Lakme Salon',
      duration: '2017 - 2020',
      description: 'Specialized in party and editorial makeup',
    },
    {
      id: 3,
      role: 'Junior Artist',
      company: 'Freelance',
      duration: '2015 - 2017',
      description: 'Started career with wedding and event makeup',
    },
  ],

  highlightAchievements: [
    {
      id: 1,
      title: 'Best Bridal Makeup Artist 2023',
      description: 'Awarded by Wedding Sutra Awards',
      icon: Trophy,
    },
    {
      id: 2,
      title: '500+ Happy Brides',
      description: 'Milestone achieved in 2022',
      icon: Medal,
    },
    {
      id: 3,
      title: 'Featured in Vogue India',
      description: 'Editorial spread - March 2023',
      icon: Award,
    },
  ],

  specializations: [
    'Bridal Makeup',
    'Party Makeup',
    'Editorial',
    'Airbrush',
    'Hair Styling',
  ],

  portfolio: [
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
  ],

  reviews: [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      text: 'Absolutely stunning bridal makeup! Sarah made me feel like a princess on my special day.',
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Anjali Patel',
      rating: 5,
      text: 'Professional and talented. The airbrush makeup lasted all night!',
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Meera Kapoor',
      rating: 5,
      text: 'Best makeup artist in Mumbai. Highly recommend for any occasion.',
      date: '2 months ago',
    },
  ],
};

export default function ArtistPublicProfile() {
  const { success, severe } = useToast();
  const [copied, setCopied] = useState(false);
  const [publicProfileUrl, setPublicProfileUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPublicProfileUrl(window.location.href);
    }
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${artistData.name} - ${artistData.title}`,
          url: publicProfileUrl,
        });
      } catch {
        await copyToClipboard();
      }
    } else {
      await copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(publicProfileUrl);
      setCopied(true);
      success('Profile link copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      severe('Failed to copy link');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-72 bg-gradient-to-br from-primary/30 via-accent to-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${artistData.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Share button */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="gap-2 backdrop-blur-sm bg-background/80"
            onClick={handleShare}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Share2 className="h-4 w-4" />
            )}
            {copied ? 'Copied!' : 'Share'}
          </Button>
        </div>

        {/* Profile info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-4xl mx-auto flex items-end gap-4">
            <div className="relative animate-scale-in">
              <Image
                src={artistData.avatar}
                alt={artistData.name}
                width={112}
                height={112}
                className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl object-cover border-4 border-background shadow-lg"
              />
              {artistData.isMelstaVerified && (
                <div className="absolute -bottom-1 -right-1 bg-primary h-6 w-6 rounded-full border-2 border-background flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
              )}
            </div>
            <div
              className="pb-2 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {artistData.name}
                </h1>
                {artistData.isMelstaVerified && (
                  <Badge
                    variant="default"
                    className="bg-primary text-primary-foreground gap-1"
                  >
                    <Check className="h-3 w-3" />
                    MELSTA Verified
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground flex items-center gap-1">
                {artistData.title}
                <span className="mx-1">•</span>
                <MapPin className="h-3.5 w-3.5" />
                {artistData.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8">
        {/* Social Links */}
        <div className="flex flex-wrap gap-2 animate-fade-in">
          {artistData.socialLinks.instagram && (
            <a
              href={artistData.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
            >
              <Instagram className="h-5 w-5 text-foreground" />
            </a>
          )}
          {artistData.socialLinks.youtube && (
            <a
              href={artistData.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
            >
              <Youtube className="h-5 w-5 text-foreground" />
            </a>
          )}
          {artistData.socialLinks.facebook && (
            <a
              href={artistData.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
            >
              <Facebook className="h-5 w-5 text-foreground" />
            </a>
          )}
          {artistData.socialLinks.twitter && (
            <a
              href={artistData.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
            >
              <Twitter className="h-5 w-5 text-foreground" />
            </a>
          )}
          {artistData.socialLinks.website && (
            <a
              href={artistData.socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
            >
              <Globe className="h-5 w-5 text-foreground" />
            </a>
          )}
        </div>

        {/* Badges */}
        <div
          className="flex flex-wrap gap-2 animate-fade-in"
          style={{ animationDelay: '0.15s' }}
        >
          {artistData.badges.map((badge, i) => (
            <div
              key={badge.id}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} text-white text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300 animate-scale-in`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <span>{badge.icon}</span>
              <span>{badge.name}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-4 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          {[
            {
              value: artistData.rating.toString(),
              label: 'Rating',
              icon: Star,
              color: 'text-yellow-500',
            },
            {
              value: artistData.reviewCount.toString(),
              label: 'Reviews',
              icon: Quote,
              color: 'text-primary',
            },
            {
              value: `${artistData.yearsExp}+`,
              label: 'Years Exp',
              icon: Award,
              color: 'text-emerald-500',
            },
          ].map(stat => (
            <div
              key={stat.label}
              className="text-center p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group"
            >
              <stat.icon
                className={`h-5 w-5 mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform`}
              />
              <p className="font-display text-2xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlight Achievements */}
        <div className="animate-fade-in" style={{ animationDelay: '0.35s' }}>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />
            Highlight Achievements
          </h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {artistData.highlightAchievements.map((achievement, i) => (
              <div
                key={achievement.id}
                className="p-4 bg-gradient-to-br from-accent to-accent/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <achievement.icon className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-semibold text-foreground text-sm">
                  {achievement.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />
            About Me
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {artistData.about}
          </p>
        </div>

        {/* Work Experience */}
        <div className="animate-fade-in" style={{ animationDelay: '0.45s' }}>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />
            Work Experience
          </h3>
          <div className="space-y-3">
            {artistData.workExperience.map((exp, i) => (
              <div
                key={exp.id}
                className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      {exp.role}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3" />
                      {exp.duration}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in" style={{ animationDelay: '0.55s' }}>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />
            Certifications
          </h3>
          <div className="space-y-3">
            {artistData.certifications.map((cert, i) => (
              <div
                key={cert.id}
                className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 flex items-start gap-3 animate-fade-in"
                style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              >
                <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div className="animate-fade-in" style={{ animationDelay: '0.65s' }}>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />
            Portfolio
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {artistData.portfolio.map((src, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl animate-scale-in"
                style={{ animationDelay: `${0.7 + i * 0.1}s` }}
              >
                <Image
                  src={src}
                  alt={`Work ${i + 1}`}
                  width={400}
                  height={400}
                  className="aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="animate-fade-in" style={{ animationDelay: '0.75s' }}>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />
            Specializations
          </h3>
          <div className="flex flex-wrap gap-2">
            {artistData.specializations.map((spec, i) => (
              <span
                key={spec}
                className="px-4 py-2 bg-accent text-accent-foreground text-sm rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default animate-scale-in"
                style={{ animationDelay: `${0.8 + i * 0.05}s` }}
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="animate-fade-in" style={{ animationDelay: '0.85s' }}>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full" />
            What Clients Say
          </h3>
          <div className="space-y-3">
            {artistData.reviews.map((review, i) => (
              <div
                key={review.id}
                className="p-4 bg-accent/30 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.9 + i * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center text-primary font-semibold shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground">
                        {review.name}
                      </span>
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star
                            key={j}
                            className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {review.text}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div
          className="pt-4 pb-8 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <Button className="w-full h-12 text-base font-semibold gap-2 group">
            Book Now
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
