import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Verified, Palette, Droplets, Sparkles, Gem, Crown, ArrowUpRight } from 'lucide-react';

const artist = {
  name: 'Nisha Rao',
  title: 'Luxury Bridal Specialist',
  tagline: 'Elegance in Every Stroke',
  location: 'Kolkata, India',
  avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
  rating: 4.88,
  reviews: 142,
  lookbook: [
    { src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400', label: 'Royal Bridal' },
    { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400', label: 'Cocktail Glam' },
    { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400', label: 'Reception Look' },
    { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400', label: 'Sangeet Night' },
  ],
  expertise: [
    { name: 'Airbrush', icon: Droplets },
    { name: 'HD Makeup', icon: Sparkles },
    { name: 'Art Makeup', icon: Palette },
    { name: 'Luxury Bridal', icon: Crown },
    { name: 'Jewel Tones', icon: Gem },
  ],
  process: [
    { step: '01', title: 'Consultation', desc: 'Understanding your vision and style' },
    { step: '02', title: 'Trial Session', desc: 'Perfecting the look before the big day' },
    { step: '03', title: 'D-Day Magic', desc: 'Flawless execution on your special day' },
    { step: '04', title: 'Touch-ups', desc: 'On-site support throughout the event' },
  ],
};

export default function Page7() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-background to-pink-50/30 dark:from-rose-950/20 dark:via-background dark:to-pink-950/10">
      {/* Minimal Hero */}
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-8 text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">{artist.tagline}</p>
        <div className="relative inline-block mb-6">
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-pink-300/20 rounded-full blur-xl" />
          <img src={artist.avatar} alt="" className="relative w-28 h-28 rounded-full object-cover border-4 border-white dark:border-card shadow-xl" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2">{artist.name}</h1>
        <p className="text-muted-foreground mb-1">{artist.title}</p>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          <MapPin className="h-3.5 w-3.5" />{artist.location}
          <span className="mx-2">·</span>
          <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />{artist.rating}
          <span className="text-xs">({artist.reviews})</span>
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="outline" className="border-primary/30 text-primary gap-1"><Verified className="h-3 w-3" />Verified</Badge>
          <Badge variant="outline" className="border-amber-400/30 text-amber-600 dark:text-amber-400 gap-1"><Crown className="h-3 w-3" />Top 1%</Badge>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 space-y-12 pb-12">
        {/* Expertise Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {artist.expertise.map(e => (
            <div key={e.name} className="flex items-center gap-2 px-5 py-2.5 bg-card rounded-full border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-default">
              <e.icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{e.name}</span>
            </div>
          ))}
        </div>

        {/* Lookbook - Horizontal Scroll */}
        <div>
          <h2 className="text-center text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Lookbook</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x">
            {artist.lookbook.map((item, i) => (
              <div key={i} className="relative shrink-0 w-56 snap-center group">
                <div className="overflow-hidden rounded-2xl">
                  <img src={item.src} alt="" className="w-56 h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/90 dark:bg-card/90 backdrop-blur-md rounded-xl px-3 py-2 shadow-lg">
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <h2 className="text-center text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">How It Works</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {artist.process.map(p => (
              <div key={p.step} className="flex gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all group">
                <span className="text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">{p.step}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="rounded-full px-10 gap-2 bg-gradient-to-r from-primary to-pink-400 shadow-lg shadow-primary/25">
            Begin Your Bridal Journey <ArrowUpRight className="h-4 w-4" />
          </Button>
          <p className="text-xs text-muted-foreground mt-3">Free consultation · No booking fees</p>
        </div>
      </div>
    </div>
  );
}
