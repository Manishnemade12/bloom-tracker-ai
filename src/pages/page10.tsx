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
    <div style={{ minHeight: '100vh', backgroundColor: 'hsl(0 0% 100%)' }}>
      {/* Gradient Mesh Hero */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom right, hsl(330 80% 85%), hsl(340 70% 90%), hsl(270 60% 85%))',
        }} />
        <div style={{
          position: 'absolute', top: 40, left: 40, width: 288, height: 288,
          background: 'hsla(330 70% 70% / 0.4)', borderRadius: '50%', filter: 'blur(48px)',
        }} />
        <div style={{
          position: 'absolute', bottom: 40, right: 40, width: 384, height: 384,
          background: 'hsla(270 60% 70% / 0.3)', borderRadius: '50%', filter: 'blur(48px)',
        }} />

        <div style={{ position: 'relative', maxWidth: 768, margin: '0 auto', padding: '48px 16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: -4,
                background: 'linear-gradient(to bottom right, hsl(330 80% 65%), hsl(270 60% 65%))',
                borderRadius: 16, filter: 'blur(8px)', opacity: 0.5,
              }} />
              <img
                src={artist.avatar}
                alt=""
                style={{
                  position: 'relative', width: 160, height: 160, borderRadius: 16,
                  objectFit: 'cover', border: '4px solid hsla(0 0% 100% / 0.5)',
                }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 4 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  background: 'linear-gradient(to right, hsl(330 80% 55%), hsl(270 60% 55%))',
                  color: 'white', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 9999,
                }}>
                  <Zap style={{ width: 12, height: 12 }} />Premium
                </span>
              </div>
              <h1 style={{ fontSize: 32, fontWeight: 900, color: 'hsl(0 0% 10%)', margin: '4px 0' }}>{artist.name}</h1>
              <p style={{ color: 'hsl(330 80% 45%)', fontWeight: 500, margin: 0 }}>{artist.title}</p>
              <p style={{
                fontSize: 14, color: 'hsl(0 0% 45%)', display: 'flex', alignItems: 'center',
                gap: 4, justifyContent: 'center', marginTop: 4,
              }}>
                <MapPin style={{ width: 14, height: 14 }} />{artist.location} · {artist.experience}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center', marginTop: 8 }}>
                <Star style={{ width: 16, height: 16, color: 'hsl(45 100% 50%)', fill: 'hsl(45 100% 50%)' }} />
                <span style={{ fontWeight: 700, color: 'hsl(0 0% 10%)' }}>{artist.rating}</span>
                <span style={{ fontSize: 14, color: 'hsl(0 0% 45%)' }}>({artist.reviews} reviews)</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12, justifyContent: 'center' }}>
                {artist.badges.map(b => (
                  <span key={b} style={{
                    fontSize: 12, background: 'hsla(0 0% 100% / 0.6)', backdropFilter: 'blur(8px)',
                    padding: '4px 12px', borderRadius: 9999, fontWeight: 500, color: 'hsl(0 0% 15%)',
                  }}>{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: 12, marginTop: 32, maxWidth: 448, margin: '32px auto 0' }}>
            <button style={{
              flex: 1, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 8, background: 'linear-gradient(to right, hsl(330 80% 55%), hsl(270 60% 55%))',
              color: 'white', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer',
              boxShadow: '0 10px 25px -5px hsla(330 80% 55% / 0.25)',
            }}>
              <Phone style={{ width: 16, height: 16 }} />Book Now — {artist.price}
            </button>
            <button style={{
              height: 48, width: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid hsla(0 0% 100% / 0.3)', backdropFilter: 'blur(8px)',
              background: 'hsla(0 0% 100% / 0.3)', cursor: 'pointer',
            }}>
              <MessageSquare style={{ width: 16, height: 16, color: 'hsl(0 0% 20%)' }} />
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 768, margin: '0 auto', padding: '40px 16px' }}>
        {/* USPs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: 40 }}>
          {artist.usps.map(u => {
            const Icon = u.icon;
            return (
              <div key={u.title} style={{
                padding: 16, background: 'hsl(0 0% 100%)', borderRadius: 16,
                border: '1px solid hsl(0 0% 90%)', textAlign: 'center',
              }}>
                <Icon style={{ width: 24, height: 24, color: 'hsl(330 80% 45%)', margin: '0 auto 8px' }} />
                <p style={{ fontWeight: 600, color: 'hsl(0 0% 10%)', fontSize: 14, margin: 0 }}>{u.title}</p>
                <p style={{ fontSize: 12, color: 'hsl(0 0% 45%)', marginTop: 4, margin: '4px 0 0' }}>{u.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'hsl(0 0% 10%)', marginBottom: 16 }}>Portfolio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {artist.gallery.map((src, i) => (
              <div key={i} style={{ overflow: 'hidden', borderRadius: 12 }}>
                <img src={src} alt="" style={{ aspectRatio: '1/1', width: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'hsl(0 0% 10%)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Star style={{ width: 20, height: 20, color: 'hsl(45 100% 50%)', fill: 'hsl(45 100% 50%)' }} />
            {artist.rating} · {artist.reviews} Reviews
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {artist.reviews_list.map((r, i) => (
              <div key={i} style={{
                padding: 16, borderRadius: 12,
                background: 'linear-gradient(to right, hsla(330 80% 95% / 0.5), hsla(270 60% 95% / 0.5))',
                border: '1px solid hsla(330 80% 45% / 0.1)',
              }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} style={{ width: 12, height: 12, color: 'hsl(45 100% 50%)', fill: 'hsl(45 100% 50%)' }} />
                  ))}
                </div>
                <p style={{ fontSize: 14, color: 'hsl(0 0% 45%)', margin: 0 }}>{r.text}</p>
                <p style={{ fontSize: 12, fontWeight: 500, color: 'hsl(0 0% 10%)', marginTop: 8 }}>{r.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'hsl(0 0% 10%)', marginBottom: 16 }}>FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {artist.faq.map((f, i) => (
              <div key={i} style={{
                padding: 16, background: 'hsl(0 0% 100%)', borderRadius: 12,
                border: '1px solid hsl(0 0% 90%)',
              }}>
                <p style={{ fontWeight: 600, color: 'hsl(0 0% 10%)', fontSize: 14, margin: 0 }}>{f.q}</p>
                <p style={{ fontSize: 14, color: 'hsl(0 0% 45%)', marginTop: 4 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div style={{
          background: 'linear-gradient(to right, hsl(330 80% 55%), hsl(270 60% 55%))',
          borderRadius: 16, padding: 24, textAlign: 'center', color: 'white',
        }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Ready to Look Your Best?</h3>
          <p style={{ color: 'hsla(0 0% 100% / 0.8)', fontSize: 14, marginBottom: 16 }}>Limited slots available for this season</p>
          <button style={{
            background: 'white', color: 'hsl(330 80% 45%)', border: 'none', borderRadius: 9999,
            padding: '10px 32px', fontWeight: 700, fontSize: 14, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Get Started <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
        </div>
      </div>
    </div>
  );
}
