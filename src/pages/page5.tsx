import { Button } from '@/components/ui/button';
import { Star, MapPin, Heart, Calendar, Award, Sparkles, Users, Clock } from 'lucide-react';

const artist = {
  name: 'Anika Verma',
  title: 'Fashion & Bridal Stylist',
  location: 'Hyderabad',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
  rating: 4.85,
  reviews: 167,
  gallery: [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
  ],
  skills: ['Bridal', 'Airbrush', 'HD', 'Hair', 'Mehendi', 'Draping'],
  timeline: [
    { year: '2023', event: 'Won Best Makeup Artist Award' },
    { year: '2022', event: 'Featured in Elle Magazine' },
    { year: '2020', event: 'Launched own studio' },
    { year: '2018', event: 'Started professional career' },
  ],
};

export default function Page5() {
  return (
    <div className="min-h-screen bg-background">
      {/* Bento Grid Layout */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-4 gap-3 auto-rows-[100px]">
          {/* Profile - Large */}
          <div className="col-span-2 row-span-3 bg-gradient-to-br from-pink-200/60 to-rose-100/60 dark:from-pink-900/30 dark:to-rose-900/20 rounded-3xl p-6 flex flex-col justify-between border border-pink-200/50 dark:border-pink-800/30">
            <div>
              <img src={artist.avatar} alt="" className="w-20 h-20 rounded-2xl object-cover mb-4 border-2 border-white/50" />
              <h1 className="text-2xl font-bold text-foreground">{artist.name}</h1>
              <p className="text-primary text-sm font-medium">{artist.title}</p>
              <p className="text-muted-foreground text-xs flex items-center gap-1 mt-1"><MapPin className="h-3 w-3" />{artist.location}</p>
            </div>
            <Button className="w-full rounded-xl mt-4">Book Now</Button>
          </div>

          {/* Rating */}
          <div className="col-span-1 row-span-1 bg-card rounded-3xl p-4 flex flex-col items-center justify-center border border-border/50">
            <Star className="h-6 w-6 text-yellow-500 fill-yellow-500 mb-1" />
            <p className="font-bold text-foreground text-lg">{artist.rating}</p>
            <p className="text-xs text-muted-foreground">{artist.reviews} reviews</p>
          </div>

          {/* Availability */}
          <div className="col-span-1 row-span-1 bg-green-50 dark:bg-green-950/30 rounded-3xl p-4 flex flex-col items-center justify-center border border-green-200/50 dark:border-green-800/30">
            <Clock className="h-5 w-5 text-green-600 mb-1" />
            <p className="text-xs font-medium text-green-700 dark:text-green-400">Available</p>
          </div>

          {/* Photo 1 */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
            <img src={artist.gallery[0]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Awards */}
          <div className="col-span-2 row-span-1 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 rounded-3xl p-4 flex items-center gap-3 border border-amber-200/50 dark:border-amber-800/30">
            <Award className="h-8 w-8 text-amber-500" />
            <div>
              <p className="font-bold text-foreground text-sm">Award Winner</p>
              <p className="text-xs text-muted-foreground">Best Makeup Artist 2023</p>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
            <img src={artist.gallery[1]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Photo 3 */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
            <img src={artist.gallery[2]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Skills */}
          <div className="col-span-2 row-span-2 bg-card rounded-3xl p-5 border border-border/50">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" />Skills</h3>
            <div className="flex flex-wrap gap-2">
              {artist.skills.map(s => (
                <span key={s} className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full">{s}</span>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="col-span-2 row-span-2 bg-card rounded-3xl p-5 border border-border/50">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />Journey</h3>
            <div className="space-y-2">
              {artist.timeline.map(t => (
                <div key={t.year} className="flex gap-3 items-start">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">{t.year}</span>
                  <p className="text-xs text-muted-foreground">{t.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clients */}
          <div className="col-span-2 row-span-1 bg-primary/10 rounded-3xl p-4 flex items-center gap-3 border border-primary/20">
            <Users className="h-6 w-6 text-primary" />
            <div>
              <p className="font-bold text-foreground">500+ Happy Clients</p>
              <p className="text-xs text-muted-foreground">Across 10+ cities</p>
            </div>
            <Heart className="h-5 w-5 text-primary ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
