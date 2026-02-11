import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Verified, Phone, MessageCircle, Share2, Bookmark, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const artist = {
  name: 'Priya Malhotra',
  title: 'Bridal & Luxury Makeup',
  location: 'Jaipur, India',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  rating: 4.92,
  reviews: 203,
  price: '₹18,000 - ₹45,000',
  responseTime: '< 1 hour',
  bio: 'Creating unforgettable bridal looks with a blend of traditional Indian artistry and modern glamour techniques.',
  stats: { weddings: 600, years: 12, cities: 15 },
  packages: [
    { name: 'Essential Bridal', price: '₹18,000', features: ['HD Makeup', 'Hair Styling', 'Draping', '1 Trial'] },
    { name: 'Premium Bridal', price: '₹32,000', features: ['Airbrush Makeup', 'Hair Styling', 'Draping', '2 Trials', 'Family Makeup (2)'], popular: true },
    { name: 'Royal Bridal', price: '₹45,000', features: ['Airbrush + HD', 'Hair Styling', 'Draping', '3 Trials', 'Family Makeup (5)', 'All Events'] },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
  ],
};

export default function Page4() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Glass Header Card */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-50 to-purple-50 dark:from-pink-950/30 dark:via-rose-950/20 dark:to-purple-950/30 pb-6">
        <div className="max-w-2xl mx-auto px-4 pt-6">
          {/* Top bar */}
          <div className="flex justify-between mb-6">
            <Badge variant="outline" className="border-primary/30 text-primary">Pro Artist</Badge>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setSaved(!saved)}>
                <Bookmark className={`h-4 w-4 ${saved ? 'fill-primary text-primary' : ''}`} />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9"><Share2 className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 shadow-xl p-6">
            <div className="flex gap-4">
              <img src={artist.avatar} alt="" className="w-20 h-20 rounded-2xl object-cover border-2 border-primary/20" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-foreground">{artist.name}</h1>
                  <Verified className="h-5 w-5 text-primary fill-primary/20" />
                </div>
                <p className="text-sm text-primary font-medium">{artist.title}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="h-3 w-3" />{artist.location}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-foreground text-sm">{artist.rating}</span>
                    <span className="text-xs text-muted-foreground">({artist.reviews})</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Responds {artist.responseTime}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">{artist.bio}</p>

            {/* Quick Actions */}
            <div className="flex gap-2 mt-4">
              <Button className="flex-1 rounded-xl gap-2"><Phone className="h-4 w-4" />Call</Button>
              <Button variant="outline" className="flex-1 rounded-xl gap-2 border-primary/30"><MessageCircle className="h-4 w-4" />Chat</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Weddings', value: artist.stats.weddings + '+' },
            { label: 'Years', value: artist.stats.years + '+' },
            { label: 'Cities', value: artist.stats.cities + '+' },
          ].map(s => (
            <div key={s.label} className="bg-gradient-to-br from-primary/5 to-pink-50 dark:from-primary/10 dark:to-pink-950/20 rounded-2xl p-4 text-center border border-primary/10">
              <p className="text-2xl font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Packages</h2>
          <div className="space-y-3">
            {artist.packages.map(pkg => (
              <div key={pkg.name} className={`p-5 rounded-2xl border transition-all ${pkg.popular ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' : 'border-border/50 bg-card'}`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-foreground">{pkg.name}</h3>
                      {pkg.popular && <Badge className="bg-primary text-primary-foreground text-xs">Popular</Badge>}
                    </div>
                    <p className="text-primary font-bold text-lg">{pkg.price}</p>
                  </div>
                  <Button size="sm" variant={pkg.popular ? 'default' : 'outline'} className="rounded-full">Select</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pkg.features.map(f => (
                    <span key={f} className="text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Work</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 snap-x">
            {artist.gallery.map((src, i) => (
              <img key={i} src={src} alt="" className="w-64 h-80 object-cover rounded-2xl shrink-0 snap-center" />
            ))}
          </div>
        </div>

        <Button className="w-full h-12 rounded-2xl text-base font-semibold bg-gradient-to-r from-primary to-pink-500">
          Book Priya Now
        </Button>
      </div>
    </div>
  );
}
