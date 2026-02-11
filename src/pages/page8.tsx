import { Button } from '@/components/ui/button';
import { Star, MapPin, Instagram, Play, ArrowRight, Flame, Zap, TrendingUp } from 'lucide-react';

const artist = {
  name: 'Divya Nair',
  title: 'Trendsetter MUA',
  location: 'Pune, India',
  avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400',
  cover: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800',
  rating: 4.9,
  vibe: 'Bold • Edgy • Iconic',
  stats: [
    { label: 'Looks Created', value: '2K+', icon: Flame },
    { label: 'Viral Posts', value: '50+', icon: TrendingUp },
    { label: 'Energy Level', value: 'MAX', icon: Zap },
  ],
  reels: [
    { thumb: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300', views: '1.2M', title: 'Glass Skin Tutorial' },
    { thumb: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300', views: '890K', title: 'Dewy Bridal Look' },
    { thumb: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300', views: '650K', title: 'Bold Lip Art' },
    { thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300', views: '1.5M', title: 'Smoky Eye Master' },
  ],
  transformations: [
    { before: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300', after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300' },
    { before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300', after: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300' },
  ],
  pricing: [
    { name: 'Quick Glam', price: '₹5,000', time: '1 hr' },
    { name: 'Full Bridal', price: '₹20,000', time: '3 hrs' },
    { name: 'Celeb Package', price: '₹40,000', time: 'Full day' },
  ],
};

export default function Page8() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Dark Bold Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={artist.cover} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-end gap-4">
              <img src={artist.avatar} alt="" className="w-20 h-20 rounded-xl object-cover border-2 border-pink-500/50" />
              <div>
                <p className="text-pink-400 text-sm font-medium tracking-wider uppercase">{artist.vibe}</p>
                <h1 className="text-3xl sm:text-4xl font-black">{artist.name}</h1>
                <p className="text-white/60 text-sm flex items-center gap-2">
                  {artist.title} · <MapPin className="h-3.5 w-3.5" />{artist.location}
                  · <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />{artist.rating}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {artist.stats.map(s => (
            <div key={s.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10 hover:border-pink-500/30 transition-colors">
              <s.icon className="h-5 w-5 text-pink-400 mx-auto mb-2" />
              <p className="text-xl font-black text-white">{s.value}</p>
              <p className="text-xs text-white/50">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Viral Reels */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Flame className="h-5 w-5 text-pink-400" />Viral Reels
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {artist.reels.map((reel, i) => (
              <div key={i} className="relative group rounded-xl overflow-hidden cursor-pointer">
                <img src={reel.thumb} alt="" className="aspect-[9/16] w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-pink-500/80 flex items-center justify-center">
                    <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-xs font-medium text-white">{reel.title}</p>
                  <p className="text-[10px] text-white/60">{reel.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformations */}
        <div>
          <h2 className="text-xl font-bold mb-4">Transformations ✨</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {artist.transformations.map((t, i) => (
              <div key={i} className="grid grid-cols-2 gap-1 rounded-xl overflow-hidden">
                <div className="relative">
                  <img src={t.before} alt="" className="aspect-[3/4] w-full object-cover" />
                  <span className="absolute bottom-2 left-2 text-[10px] bg-black/60 px-2 py-0.5 rounded-full">Before</span>
                </div>
                <div className="relative">
                  <img src={t.after} alt="" className="aspect-[3/4] w-full object-cover" />
                  <span className="absolute bottom-2 left-2 text-[10px] bg-pink-500/80 px-2 py-0.5 rounded-full">After</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h2 className="text-xl font-bold mb-4">Pricing</h2>
          <div className="space-y-3">
            {artist.pricing.map(p => (
              <div key={p.name} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-pink-500/30 transition-colors">
                <div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-xs text-white/50">{p.time}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-pink-400">{p.price}</span>
                  <Button size="sm" className="rounded-full bg-pink-500 hover:bg-pink-600 text-white">Book</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Follow CTA */}
        <div className="flex gap-3">
          <Button className="flex-1 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 font-bold gap-2">
            Book Now <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="h-12 rounded-xl border-white/20 text-white hover:bg-white/10 gap-2">
            <Instagram className="h-4 w-4" />Follow
          </Button>
        </div>
      </div>
    </div>
  );
}
