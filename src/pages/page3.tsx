import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, CheckCircle, ChevronRight, Heart, Eye } from 'lucide-react';

const artist = {
  name: 'Meera Joshi',
  title: 'Editorial & Fashion Makeup Artist',
  location: 'Bangalore, India',
  avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400',
  cover: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
  tagline: 'Where Art Meets Beauty',
  rating: 4.8,
  reviews: 95,
  startingPrice: '₹12,000',
  availability: 'Available This Week',
  highlights: ['Vogue Featured', '500+ Events', 'Celebrity Clientele', 'Award Winner'],
  portfolio: [
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  ],
  about: 'I believe makeup is an art form that tells a story. With every brushstroke, I aim to bring out the unique beauty that already exists within you.',
  reviews_list: [
    { name: 'Deepa R.', rating: 5, text: 'Meera is a true artist. My editorial shoot photos were breathtaking!', avatar: 'D' },
    { name: 'Sneha T.', rating: 5, text: 'The most professional and creative makeup artist I\'ve worked with.', avatar: 'S' },
    { name: 'Anita K.', rating: 4, text: 'Fantastic work! Loved the attention to detail for my reception look.', avatar: 'A' },
  ],
};

export default function Page3() {
  return (
    <div className="min-h-screen bg-background">
      {/* Magazine-style Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={artist.cover} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {/* Availability Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-green-500/90 text-white backdrop-blur-sm gap-1">
            <Clock className="h-3 w-3" />{artist.availability}
          </Badge>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-pink-300 text-sm font-medium tracking-widest uppercase mb-2">{artist.tagline}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">{artist.name}</h1>
            <p className="text-white/80 text-lg mb-3">{artist.title}</p>
            <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{artist.location}</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />{artist.rating} ({artist.reviews} reviews)</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {artist.highlights.map(h => (
                <Badge key={h} variant="outline" className="text-white/90 border-white/30 backdrop-blur-sm">{h}</Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <Button className="rounded-full px-8 bg-primary hover:bg-primary/90">Book Now — {artist.startingPrice}</Button>
              <Button variant="outline" className="rounded-full text-white border-white/30 hover:bg-white/10">
                <Heart className="h-4 w-4 mr-2" />Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {/* About */}
        <div className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full" />
          <h2 className="text-2xl font-bold text-foreground mb-3">The Artist</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{artist.about}</p>
          <div className="flex items-center gap-2 mt-4">
            <img src={artist.avatar} alt="" className="w-12 h-12 rounded-full object-cover border-2 border-primary/30" />
            <div>
              <p className="font-semibold text-foreground">{artist.name}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-primary" />Verified Professional</p>
            </div>
          </div>
        </div>

        {/* Portfolio Grid - Magazine Layout */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Portfolio</h2>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {artist.portfolio.map((src, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-lg cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                <img src={src} alt="" className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 0 ? 'h-full' : 'aspect-square'}`} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Client Reviews</h2>
          <div className="space-y-4">
            {artist.reviews_list.map((r, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card rounded-xl border border-border/50 hover:shadow-md transition-shadow">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-pink-400 flex items-center justify-center text-white font-bold shrink-0">
                  {r.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">{r.name}</span>
                    <div className="flex">{Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-3 w-3 text-yellow-500 fill-yellow-500" />)}</div>
                  </div>
                  <p className="text-muted-foreground text-sm">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky CTA */}
        <div className="sticky bottom-4 bg-card/95 backdrop-blur-md rounded-2xl border border-border/50 shadow-lg p-4 flex items-center justify-between">
          <div>
            <p className="font-bold text-foreground">Starting at {artist.startingPrice}</p>
            <p className="text-sm text-muted-foreground">Free consultation included</p>
          </div>
          <Button className="rounded-full gap-2">Book <ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}
