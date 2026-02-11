import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, MapPin, Star, Camera, Palette, Scissors, Music, Sparkles, ArrowRight, Instagram, Mail } from 'lucide-react';

const artist = {
  name: 'Riya Kapoor',
  title: 'Celebrity Makeup & Hair Stylist',
  location: 'Delhi, India',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
  bio: 'Luxury beauty artist crafting flawless looks for red carpets, editorials & dream weddings. 10+ years transforming faces into art.',
  rating: 4.95,
  clients: 850,
  experience: '10+ yrs',
  services: [
    { name: 'Bridal Glam', icon: Sparkles, price: '₹25,000' },
    { name: 'Party Makeup', icon: Palette, price: '₹8,000' },
    { name: 'Hair Styling', icon: Scissors, price: '₹5,000' },
    { name: 'Photoshoot', icon: Camera, price: '₹15,000' },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
  ],
  testimonials: [
    { name: 'Neha M.', text: 'Absolutely magical! My wedding look was beyond perfect.', rating: 5 },
    { name: 'Kavya S.', text: 'Best in the business. Worth every penny!', rating: 5 },
  ],
};

export default function Page2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-background">
      {/* Centered Profile Header */}
      <div className="pt-12 pb-8 text-center px-4">
        <div className="relative inline-block mb-6">
          <img src={artist.avatar} alt={artist.name} className="w-32 h-32 rounded-full object-cover border-4 border-primary/30 shadow-xl" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <Badge className="bg-primary text-primary-foreground shadow-lg">✨ Top Artist</Badge>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-1">{artist.name}</h1>
        <p className="text-primary font-medium mb-1">{artist.title}</p>
        <p className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
          <MapPin className="h-3.5 w-3.5" />{artist.location}
        </p>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">{artist.bio}</p>
        
        {/* Social */}
        <div className="flex justify-center gap-3 mt-4">
          <Button variant="outline" size="sm" className="rounded-full gap-2 border-primary/30 text-primary hover:bg-primary/10">
            <Instagram className="h-4 w-4" /> Follow
          </Button>
          <Button variant="outline" size="sm" className="rounded-full gap-2 border-primary/30 text-primary hover:bg-primary/10">
            <Mail className="h-4 w-4" /> Contact
          </Button>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="max-w-lg mx-auto px-4 mb-8">
        <div className="bg-card rounded-2xl shadow-md border border-border/50 p-4 flex justify-around">
          {[
            { label: 'Rating', value: artist.rating, icon: Star, color: 'text-yellow-500' },
            { label: 'Clients', value: artist.clients + '+', icon: Heart, color: 'text-primary' },
            { label: 'Experience', value: artist.experience, icon: Music, color: 'text-secondary' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <s.icon className={`h-5 w-5 mx-auto mb-1 ${s.color}`} />
              <p className="font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 space-y-8 pb-12">
        {/* Services */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Services</h2>
          <div className="grid grid-cols-2 gap-3">
            {artist.services.map(service => (
              <Card key={service.name} className="group hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{service.name}</h3>
                  <p className="text-primary font-bold text-sm mt-1">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Gallery</h2>
          <div className="grid grid-cols-2 gap-2">
            {artist.gallery.map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`}>
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">What Clients Say</h2>
          {artist.testimonials.map((t, i) => (
            <div key={i} className="mb-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <div className="flex gap-1 mb-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">"{t.text}"</p>
              <p className="text-xs font-medium text-foreground mt-2">— {t.name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button className="w-full h-12 text-base font-semibold rounded-full gap-2 bg-gradient-to-r from-primary to-pink-400 hover:from-primary/90 hover:to-pink-400/90">
          Book Appointment <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
