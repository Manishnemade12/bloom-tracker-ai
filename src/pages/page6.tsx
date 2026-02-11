import { Button } from '@/components/ui/button';
import { Star, MapPin, Award, Camera, Heart, ExternalLink } from 'lucide-react';

const artist = {
  name: 'Zara Sheikh',
  title: 'Celebrity Makeup Artist',
  location: 'Chennai, India',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  cover: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
  bio: 'From runways to red carpets, I create looks that make headlines. Specializing in high-fashion and editorial beauty.',
  rating: 4.97,
  followers: '12.5K',
  projects: 320,
  featured: ['Vogue', 'Elle', 'Harper\'s Bazaar', 'GQ India'],
  gallery: [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  ],
  journey: [
    { year: '2024', title: 'Featured on Vogue India Cover', desc: 'Collaborated with top photographers' },
    { year: '2023', title: 'Launched Masterclass Series', desc: 'Teaching advanced techniques online' },
    { year: '2022', title: 'Bollywood Film Projects', desc: 'Worked on 3 major productions' },
    { year: '2020', title: 'International Fashion Week', desc: 'Milan & Paris backstage team' },
    { year: '2018', title: 'Started Professional Journey', desc: 'First celebrity client' },
  ],
};

export default function Page6() {
  return (
    <div className="min-h-screen bg-background">
      {/* Horizontal Split Hero */}
      <div className="grid md:grid-cols-2 min-h-[60vh]">
        {/* Left - Image */}
        <div className="relative overflow-hidden">
          <img src={artist.cover} alt="" className="w-full h-full object-cover min-h-[300px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:bg-gradient-to-l md:from-background md:to-transparent" />
        </div>
        
        {/* Right - Info */}
        <div className="flex flex-col justify-center p-8 md:p-12 bg-gradient-to-br from-pink-50/50 to-background dark:from-pink-950/20">
          <div className="flex items-center gap-3 mb-4">
            <img src={artist.avatar} alt="" className="w-14 h-14 rounded-full object-cover border-2 border-primary/30" />
            <div>
              <p className="text-sm text-primary font-medium">Celebrity Artist</p>
              <h1 className="text-3xl font-bold text-foreground">{artist.name}</h1>
            </div>
          </div>
          <p className="text-muted-foreground flex items-center gap-1 text-sm mb-2">
            <MapPin className="h-3.5 w-3.5" />{artist.location}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">{artist.bio}</p>

          {/* Stats inline */}
          <div className="flex gap-6 mb-6">
            <div>
              <p className="text-2xl font-bold text-primary">{artist.rating}</p>
              <p className="text-xs text-muted-foreground">Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{artist.followers}</p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{artist.projects}+</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
          </div>

          {/* Featured In */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-xs text-muted-foreground">Featured in:</span>
            {artist.featured.map(f => (
              <span key={f} className="text-xs font-semibold text-foreground bg-muted px-2.5 py-1 rounded-full">{f}</span>
            ))}
          </div>

          <div className="flex gap-3">
            <Button className="flex-1 rounded-xl">Book Session</Button>
            <Button variant="outline" className="rounded-xl border-primary/30"><Heart className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {/* Timeline / Journey */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">My Journey</h2>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2" />
            
            <div className="space-y-8">
              {artist.journey.map((item, i) => (
                <div key={i} className={`flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-4 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow max-w-xs ${i % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <p className="text-primary font-bold text-sm">{item.year}</p>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Portfolio</h2>
          <div className="columns-2 sm:columns-3 gap-3 space-y-3">
            {artist.gallery.map((src, i) => (
              <div key={i} className="break-inside-avoid group relative overflow-hidden rounded-xl">
                <img src={src} alt="" className={`w-full object-cover ${i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'} hover:scale-105 transition-transform duration-500`} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <Camera className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full h-12 rounded-2xl text-base font-semibold bg-gradient-to-r from-pink-500 via-primary to-rose-400">
          Connect with {artist.name}
        </Button>
      </div>
    </div>
  );
}
