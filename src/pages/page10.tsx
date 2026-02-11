import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, MapPin, Zap, ArrowRight, Phone, MessageSquare, Shield, Clock, 
  Trophy, Sparkles, Share2, Check, Award, Briefcase, GraduationCap, Heart 
} from 'lucide-react';
import { useState } from 'react';

const artist = {
  name: 'Tanya Bhatt',
  title: 'Premium Bridal & Fashion MUA',
  location: 'Ahmedabad, India',
  avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
  cover: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800',
  rating: 4.96,
  reviews: 312,
  yearsExperience: '15 years',
  price: 'From ₹15,000',
  badges: ['Platinum Artist', 'Top 1% Nationwide', '1000+ Weddings'],
  usps: [
    { Icon: Shield, title: '100% Satisfaction', desc: 'Money back guarantee' },
    { Icon: Clock, title: 'Punctual', desc: 'Always on time, every time' },
    { Icon: Trophy, title: 'Award Winning', desc: '12 industry awards' },
    { Icon: Sparkles, title: 'Premium Products', desc: 'Only luxury brands used' },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  ],
  reviews_list: [
    { name: 'Pooja D.', rating: 5, text: 'Absolutely phenomenal! Tanya is worth every penny. My bridal look was perfect!' },
    { name: 'Shreya G.', rating: 5, text: 'The best makeup artist I\'ve ever worked with. Incredibly talented and professional.' },
    { name: 'Ritika S.', rating: 5, text: 'Tanya made my dream bridal look come true. Cannot recommend enough!' },
  ],
  faq: [
    { q: 'Do you travel for weddings?', a: 'Yes! I travel across India and internationally.' },
    { q: 'What products do you use?', a: 'Only premium brands - MAC, Charlotte Tilbury, NARS, etc.' },
    { q: 'How far in advance should I book?', a: 'Ideally 3-6 months for peak wedding season.' },
  ],
  achievements: [
    { title: 'Best Bridal Makeup 2023', desc: 'Wedding Sutra Awards', Icon: Trophy, color: 'from-yellow-400 to-amber-500' },
    { title: '500+ Happy Brides', desc: 'Milestone 2022', Icon: Heart, color: 'from-pink-400 to-rose-500' },
    { title: 'Featured in Vogue India', desc: 'March 2023', Icon: Award, color: 'from-purple-400 to-indigo-500' },
  ],
  about: 'Professional makeup artist with 8+ years of experience specializing in bridal and fashion makeup. Trained at renowned academies and worked with top celebrities. My passion is to make every bride feel like the most beautiful version of themselves on their special day.',
  experience: [
    { role: 'Senior Makeup Artist', company: 'MELSTA Studio', duration: '2020 - Present', desc: 'Lead makeup artist for bridal and celebrity clients' },
    { role: 'Makeup Artist', company: 'Lakme Salon', duration: '2017 - 2020', desc: 'Specialized in party and editorial makeup' },
  ],
  certifications: [
    { name: 'Certified Bridal Makeup Artist', issuer: 'MELSTA Academy', year: '2020' },
    { name: 'Advanced Airbrush Techniques', issuer: 'Lakme Academy', year: '2019' },
  ],
};

export default function Page10() {
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
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 dark:from-pink-950 dark:via-rose-950 dark:to-purple-950" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Profile Photo */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur opacity-50" />
              <img 
                src={artist.avatar} 
                alt={artist.name} 
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-white/50 shadow-2xl" 
              />
              <button
                onClick={handleShare}
                className="absolute bottom-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                {copied ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Share2 className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0">
                  <Zap className="h-3 w-3 mr-1" />Premium
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-1">{artist.name}</h1>
              <p className="text-primary font-medium text-lg mb-2">{artist.title}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center sm:justify-start mb-3">
                <MapPin className="h-3.5 w-3.5" />{artist.location} · {artist.yearsExperience}
              </p>
              <div className="flex items-center gap-1 justify-center sm:justify-start mb-4">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-foreground text-lg">{artist.rating}</span>
                <span className="text-sm text-muted-foreground">({artist.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-6">
                {artist.badges.map(b => (
                  <span key={b} className="text-xs bg-white/60 dark:bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full font-medium text-foreground">{b}</span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 flex-col sm:flex-row">
                <Button className="flex-1 h-12 rounded-xl gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold shadow-lg shadow-pink-500/25">
                  <Phone className="h-4 w-4" />Book Now — {artist.price}
                </Button>
                <Button variant="outline" className="h-12 rounded-xl border-white/30 backdrop-blur-sm bg-white/30 dark:bg-white/10">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* USPs */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Me?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {artist.usps.map(u => {
              const Icon = u.Icon;
              return (
                <div key={u.title} className="p-4 bg-card rounded-2xl border border-border/50 text-center hover:shadow-md hover:border-primary/30 transition-all">
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground text-sm">{u.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{u.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Portfolio */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Portfolio
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {artist.gallery.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl group cursor-pointer">
                <div className="relative">
                  <img src={src} alt="" className="aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            Achievements & Awards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {artist.achievements.map((achievement, i) => {
              const AchievementIcon = achievement.Icon;
              return (
                <div key={i} className="relative group overflow-hidden rounded-2xl p-6 bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative">
                    <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${achievement.color} mb-4`}>
                      <AchievementIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* About Me */}
        <div className="bg-gradient-to-r from-pink-50/50 to-purple-50/50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-2xl p-6 sm:p-8 border border-primary/10">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Heart className="h-6 w-6 text-pink-500" />
            About Me
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{artist.about}</p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-4">
            {artist.experience.map((exp, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl p-6 bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Clock className="h-3.5 w-3.5" />
                        {exp.duration}
                      </div>
                      <p className="text-muted-foreground text-sm">{exp.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {artist.certifications.map((cert, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200/30 dark:border-blue-800/30 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-sm mb-1">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} • <span className="font-medium text-primary">{cert.year}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            Client Reviews
          </h2>
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{artist.rating} out of 5 • {artist.reviews} Reviews</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {artist.reviews_list.map((review, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl p-6 bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-foreground">{review.name}</h3>
                      <p className="text-xs text-muted-foreground">Verified Client</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {artist.faq.map((f, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl p-6 bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <h3 className="font-bold text-foreground mb-2 flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    {f.q}
                  </h3>
                  <p className="text-muted-foreground text-sm ml-7 leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-pink-500 via-pink-500 to-purple-600 text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
          <div className="relative text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-3">Ready to Look Your Best?</h3>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Join 500+ beautiful brides who trusted their special day to me
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
              <Button className="bg-white text-pink-600 hover:bg-white/90 rounded-full px-8 font-bold gap-2 text-base">
                Book Now <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 hover:text-white rounded-full px-8 font-bold gap-2 text-base"
              >
                <MessageSquare className="h-5 w-5" /> Send Enquiry
              </Button>
            </div>
            <p className="text-xs text-white/60 mt-6">Limited slots available for peak season • Free consultation call included</p>
          </div>
        </div>
      </div>
    </div>
  );
}
