import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Zap, ArrowRight, Phone, MessageSquare, Shield, Clock, Trophy, Sparkles } from 'lucide-react';

const artist = {
  name: 'Tanya Bhatt',
  title: 'Premium Bridal & Fashion MUA',
  location: 'Ahmedabad, India',
  avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
  cover: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800',
  rating: 4.96,
  reviews: 312,
  experience: '15 years',
  price: 'From ₹15,000',
  badges: ['Platinum Artist', 'Top 1% Nationwide', '1000+ Weddings'],
  usps: [
    { icon: Shield, title: '100% Satisfaction', desc: 'Money back guarantee' },
    { icon: Clock, title: 'Punctual', desc: 'Always on time, every time' },
    { icon: Trophy, title: 'Award Winning', desc: '12 industry awards' },
    { icon: Sparkles, title: 'Premium Products', desc: 'Only luxury brands used' },
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
};

export default function Page10() {
  return (
    <div className="min-h-screen bg-background">
      {/* Gradient Mesh Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 dark:from-pink-950 dark:via-rose-950 dark:to-purple-950" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-3xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl blur opacity-50" />
              <img src={artist.avatar} alt="" className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border-4 border-white/50" />
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0">
                  <Zap className="h-3 w-3 mr-1" />Premium
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-foreground">{artist.name}</h1>
              <p className="text-primary font-medium">{artist.title}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center sm:justify-start mt-1">
                <MapPin className="h-3.5 w-3.5" />{artist.location} · {artist.experience}
              </p>
              <div className="flex items-center gap-1 justify-center sm:justify-start mt-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-foreground">{artist.rating}</span>
                <span className="text-sm text-muted-foreground">({artist.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                {artist.badges.map(b => (
                  <span key={b} className="text-xs bg-white/60 dark:bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full font-medium text-foreground">{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-8 max-w-md mx-auto sm:mx-0">
            <Button className="flex-1 h-12 rounded-xl gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold shadow-lg shadow-pink-500/25">
              <Phone className="h-4 w-4" />Book Now — {artist.price}
            </Button>
            <Button variant="outline" className="h-12 rounded-xl border-white/30 backdrop-blur-sm bg-white/30 dark:bg-white/10">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
        {/* USPs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {artist.usps.map(u => (
            <div key={u.title} className="p-4 bg-card rounded-2xl border border-border/50 text-center hover:shadow-md transition-shadow">
              <u.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground text-sm">{u.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{u.desc}</p>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Portfolio</h2>
          <div className="grid grid-cols-3 gap-2">
            {artist.gallery.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl group">
                <img src={src} alt="" className="aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 inline mr-2" />
            {artist.rating} · {artist.reviews} Reviews
          </h2>
          <div className="space-y-3">
            {artist.reviews_list.map((r, i) => (
              <div key={i} className="p-4 bg-gradient-to-r from-pink-50/50 to-purple-50/50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-xl border border-primary/10">
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{r.text}</p>
                <p className="text-xs font-medium text-foreground mt-2">{r.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">FAQ</h2>
          <div className="space-y-3">
            {artist.faq.map((f, i) => (
              <div key={i} className="p-4 bg-card rounded-xl border border-border/50">
                <p className="font-semibold text-foreground text-sm">{f.q}</p>
                <p className="text-sm text-muted-foreground mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Ready to Look Your Best?</h3>
          <p className="text-white/80 text-sm mb-4">Limited slots available for this season</p>
          <Button className="bg-white text-pink-600 hover:bg-white/90 rounded-full px-8 font-bold gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
