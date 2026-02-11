import { Button } from '@/components/ui/button';
import { Star, MapPin, Heart, CheckCircle2, Leaf, Sun, Moon, Flower2 } from 'lucide-react';

const artist = {
  name: 'Kavitha Iyer',
  tagline: '自然の美 · Natural Beauty',
  title: 'Minimalist Beauty Artist',
  location: 'Goa, India',
  avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
  rating: 4.93,
  reviews: 89,
  philosophy: 'Less is more. I believe in enhancing your natural beauty with clean, organic products and mindful techniques. Every face tells a story — I just help it shine.',
  values: [
    { icon: Leaf, label: 'Organic Products' },
    { icon: Sun, label: 'Clean Beauty' },
    { icon: Flower2, label: 'Cruelty Free' },
    { icon: Moon, label: 'Mindful Practice' },
  ],
  looks: [
    { src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400', name: 'Ethereal Glow' },
    { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400', name: 'Soft Petal' },
    { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400', name: 'Morning Dew' },
  ],
  testimonials: [
    { text: 'Kavitha made me look like the best version of myself. So natural, so beautiful.', name: 'Lakshmi P.', rating: 5 },
    { text: 'I forgot I was wearing makeup. That\'s how natural it looked. Pure magic.', name: 'Rekha M.', rating: 5 },
  ],
};

export default function Page9() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Zen Header */}
      <div className="max-w-2xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-[0.5em] text-stone-400 uppercase mb-8">{artist.tagline}</p>
        <div className="relative inline-block mb-8">
          <img src={artist.avatar} alt="" className="w-36 h-36 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
        </div>
        <h1 className="text-3xl font-light text-stone-800 dark:text-stone-200 mb-2 tracking-wide">{artist.name}</h1>
        <p className="text-sm text-stone-500">{artist.title}</p>
        <div className="flex items-center justify-center gap-2 mt-3 text-sm text-stone-400">
          <MapPin className="h-3.5 w-3.5" />{artist.location}
          <span className="mx-1">·</span>
          <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />{artist.rating}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="h-px w-16 bg-stone-200 dark:bg-stone-800" />
          <Flower2 className="h-4 w-4 text-stone-300" />
          <div className="h-px w-16 bg-stone-200 dark:bg-stone-800" />
        </div>

        <p className="text-stone-500 dark:text-stone-400 leading-relaxed max-w-lg mx-auto">{artist.philosophy}</p>
      </div>

      <div className="max-w-2xl mx-auto px-6 space-y-16 pb-16">
        {/* Values */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {artist.values.map(v => (
            <div key={v.label} className="text-center p-5 bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 hover:shadow-lg transition-shadow">
              <v.icon className="h-6 w-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <p className="text-xs font-medium text-stone-600 dark:text-stone-400">{v.label}</p>
            </div>
          ))}
        </div>

        {/* Looks */}
        <div>
          <p className="text-xs tracking-[0.3em] text-stone-400 uppercase text-center mb-6">Selected Works</p>
          <div className="space-y-6">
            {artist.looks.map((look, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl">
                <img src={look.src} alt="" className="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-light text-lg tracking-wide">{look.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <p className="text-xs tracking-[0.3em] text-stone-400 uppercase text-center mb-6">Words</p>
          <div className="space-y-6">
            {artist.testimonials.map((t, i) => (
              <div key={i} className="text-center max-w-md mx-auto">
                <p className="text-stone-600 dark:text-stone-400 italic leading-relaxed">"{t.text}"</p>
                <p className="mt-3 text-xs font-medium text-stone-400">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="rounded-full px-12 py-6 text-sm tracking-widest uppercase bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-300">
            Begin
          </Button>
          <p className="text-xs text-stone-400 mt-4">Accepting limited bookings</p>
        </div>
      </div>
    </div>
  );
}
