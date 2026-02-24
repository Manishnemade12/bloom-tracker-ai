import { Star, MapPin, Zap, ArrowRight, Phone, MessageSquare, Shield, Clock, Trophy, Sparkles } from 'lucide-react';

/*
 * PAGE 10 - Gradient Mesh Artist Profile
 * 100% self-contained. No external component or CSS dependencies.
 * Copy this entire file into any React + Lucide project and it works.
 */

const artist = {
  name: 'Tanya Bhatt',
  title: 'Premium Bridal & Fashion MUA',
  location: 'Ahmedabad, India',
  avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
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

/* ── All styles embedded ── */
const styles = `
  /* Reset & Base */
  .p10-root *, .p10-root *::before, .p10-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .p10-root {
    min-height: 100vh;
    background: hsl(0 0% 98%);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: hsl(240 10% 20%);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* Hero */
  .p10-hero {
    position: relative;
    overflow: hidden;
  }

  .p10-hero-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom right, hsl(330 80% 85%), hsl(340 70% 90%), hsl(270 60% 85%));
  }

  .p10-hero-blob1 {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 288px;
    height: 288px;
    background: hsla(330 70% 70% / 0.4);
    border-radius: 50%;
    filter: blur(48px);
  }

  .p10-hero-blob2 {
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 384px;
    height: 384px;
    background: hsla(270 60% 70% / 0.3);
    border-radius: 50%;
    filter: blur(48px);
  }

  .p10-hero-inner {
    position: relative;
    max-width: 768px;
    margin: 0 auto;
    padding: 48px 16px;
  }

  .p10-hero-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  @media (min-width: 640px) {
    .p10-hero-flex {
      flex-direction: row;
      align-items: center;
    }
    .p10-hero-info {
      text-align: left !important;
    }
    .p10-hero-info-row {
      justify-content: flex-start !important;
    }
    .p10-actions {
      margin: 32px 0 0 0 !important;
    }
  }

  /* Avatar */
  .p10-avatar-wrap {
    position: relative;
    flex-shrink: 0;
  }

  .p10-avatar-glow {
    position: absolute;
    inset: -4px;
    background: linear-gradient(to bottom right, hsl(330 80% 65%), hsl(270 60% 65%));
    border-radius: 16px;
    filter: blur(8px);
    opacity: 0.5;
  }

  .p10-avatar {
    position: relative;
    width: 160px;
    height: 160px;
    border-radius: 16px;
    object-fit: cover;
    border: 4px solid hsla(0 0% 100% / 0.5);
    display: block;
  }

  /* Info */
  .p10-hero-info {
    text-align: center;
  }

  .p10-hero-info-row {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .p10-badge-premium {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: linear-gradient(to right, hsl(330 80% 55%), hsl(270 60% 55%));
    color: white;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 9999px;
  }

  .p10-name {
    font-size: 32px;
    font-weight: 900;
    color: hsl(240 10% 10%);
    margin: 4px 0;
  }

  .p10-title {
    color: hsl(340 65% 50%);
    font-weight: 500;
    font-size: 16px;
  }

  .p10-location {
    font-size: 14px;
    color: hsl(240 10% 45%);
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;
    margin-top: 4px;
  }

  .p10-rating-row {
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;
    margin-top: 8px;
  }

  .p10-rating-value {
    font-weight: 700;
    color: hsl(240 10% 10%);
    font-size: 16px;
  }

  .p10-rating-count {
    font-size: 14px;
    color: hsl(240 10% 45%);
  }

  .p10-badges-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
    justify-content: center;
  }

  .p10-badge-chip {
    font-size: 12px;
    background: hsla(0 0% 100% / 0.6);
    backdrop-filter: blur(8px);
    padding: 4px 12px;
    border-radius: 9999px;
    font-weight: 500;
    color: hsl(240 10% 15%);
  }

  /* Actions */
  .p10-actions {
    display: flex;
    gap: 12px;
    margin: 32px auto 0;
    max-width: 448px;
  }

  .p10-btn-primary {
    flex: 1;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(to right, hsl(330 80% 55%), hsl(270 60% 55%));
    color: white;
    font-weight: 700;
    font-size: 14px;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 25px -5px hsla(330 80% 55% / 0.25);
    transition: opacity 0.2s;
  }

  .p10-btn-primary:hover {
    opacity: 0.9;
  }

  .p10-btn-icon {
    height: 48px;
    width: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid hsla(0 0% 100% / 0.3);
    backdrop-filter: blur(8px);
    background: hsla(0 0% 100% / 0.3);
    cursor: pointer;
    transition: background 0.2s;
  }

  .p10-btn-icon:hover {
    background: hsla(0 0% 100% / 0.5);
  }

  /* Content area */
  .p10-content {
    max-width: 768px;
    margin: 0 auto;
    padding: 40px 16px;
  }

  /* USPs */
  .p10-usps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-bottom: 40px;
  }

  .p10-usp-card {
    padding: 16px;
    background: hsl(0 0% 100%);
    border-radius: 16px;
    border: 1px solid hsl(240 15% 92%);
    text-align: center;
    transition: box-shadow 0.2s, border-color 0.2s;
  }

  .p10-usp-card:hover {
    box-shadow: 0 4px 16px hsla(240 10% 20% / 0.08);
    border-color: hsla(340 65% 65% / 0.3);
  }

  .p10-usp-title {
    font-weight: 600;
    color: hsl(240 10% 10%);
    font-size: 14px;
  }

  .p10-usp-desc {
    font-size: 12px;
    color: hsl(240 10% 45%);
    margin-top: 4px;
  }

  /* Section titles */
  .p10-section {
    margin-bottom: 40px;
  }

  .p10-section-title {
    font-size: 20px;
    font-weight: 700;
    color: hsl(240 10% 10%);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* Gallery */
  .p10-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .p10-gallery-item {
    overflow: hidden;
    border-radius: 12px;
  }

  .p10-gallery-img {
    aspect-ratio: 1/1;
    width: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s;
  }

  .p10-gallery-item:hover .p10-gallery-img {
    transform: scale(1.1);
  }

  /* Reviews */
  .p10-review-card {
    padding: 16px;
    border-radius: 12px;
    background: linear-gradient(to right, hsla(330 80% 95% / 0.5), hsla(270 60% 95% / 0.5));
    border: 1px solid hsla(340 65% 65% / 0.1);
    margin-bottom: 12px;
  }

  .p10-stars-row {
    display: flex;
    gap: 4px;
    margin-bottom: 8px;
  }

  .p10-review-text {
    font-size: 14px;
    color: hsl(240 10% 45%);
  }

  .p10-review-author {
    font-size: 12px;
    font-weight: 500;
    color: hsl(240 10% 10%);
    margin-top: 8px;
  }

  /* FAQ */
  .p10-faq-card {
    padding: 16px;
    background: hsl(0 0% 100%);
    border-radius: 12px;
    border: 1px solid hsl(240 15% 92%);
    margin-bottom: 12px;
    transition: border-color 0.2s;
  }

  .p10-faq-card:hover {
    border-color: hsla(340 65% 65% / 0.3);
  }

  .p10-faq-q {
    font-weight: 600;
    color: hsl(240 10% 10%);
    font-size: 14px;
  }

  .p10-faq-a {
    font-size: 14px;
    color: hsl(240 10% 45%);
    margin-top: 4px;
  }

  /* CTA Footer */
  .p10-cta {
    background: linear-gradient(to right, hsl(330 80% 55%), hsl(270 60% 55%));
    border-radius: 16px;
    padding: 24px;
    text-align: center;
    color: white;
  }

  .p10-cta h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .p10-cta p {
    color: hsla(0 0% 100% / 0.8);
    font-size: 14px;
    margin-bottom: 16px;
  }

  .p10-btn-white {
    background: white;
    color: hsl(330 80% 45%);
    border: none;
    border-radius: 9999px;
    padding: 10px 32px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s;
  }

  .p10-btn-white:hover {
    background: hsl(0 0% 95%);
  }

  .p10-icon {
    flex-shrink: 0;
  }
`;

export default function Page10() {
  return (
    <>
      <style>{styles}</style>
      <div className="p10-root">
        {/* Hero Section */}
        <div className="p10-hero">
          <div className="p10-hero-bg" />
          <div className="p10-hero-blob1" />
          <div className="p10-hero-blob2" />

          <div className="p10-hero-inner">
            <div className="p10-hero-flex">
              {/* Avatar */}
              <div className="p10-avatar-wrap">
                <div className="p10-avatar-glow" />
                <img src={artist.avatar} alt={artist.name} className="p10-avatar" />
              </div>

              {/* Info */}
              <div className="p10-hero-info">
                <div className="p10-hero-info-row" style={{ marginBottom: 4 }}>
                  <span className="p10-badge-premium">
                    <Zap className="p10-icon" style={{ width: 12, height: 12 }} />Premium
                  </span>
                </div>
                <h1 className="p10-name">{artist.name}</h1>
                <p className="p10-title">{artist.title}</p>
                <p className="p10-location">
                  <MapPin className="p10-icon" style={{ width: 14, height: 14 }} />{artist.location} · {artist.experience}
                </p>
                <div className="p10-rating-row">
                  <Star className="p10-icon" style={{ width: 16, height: 16, color: 'hsl(45 100% 50%)', fill: 'hsl(45 100% 50%)' }} />
                  <span className="p10-rating-value">{artist.rating}</span>
                  <span className="p10-rating-count">({artist.reviews} reviews)</span>
                </div>
                <div className="p10-badges-row">
                  {artist.badges.map(b => (
                    <span key={b} className="p10-badge-chip">{b}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p10-actions">
              <button className="p10-btn-primary">
                <Phone className="p10-icon" style={{ width: 16, height: 16 }} />Book Now — {artist.price}
              </button>
              <button className="p10-btn-icon">
                <MessageSquare className="p10-icon" style={{ width: 16, height: 16, color: 'hsl(240 10% 20%)' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p10-content">
          {/* USPs */}
          <div className="p10-usps">
            {artist.usps.map(u => {
              const Icon = u.icon;
              return (
                <div key={u.title} className="p10-usp-card">
                  <Icon className="p10-icon" style={{ width: 24, height: 24, color: 'hsl(340 65% 50%)', margin: '0 auto 8px' }} />
                  <p className="p10-usp-title">{u.title}</p>
                  <p className="p10-usp-desc">{u.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Portfolio */}
          <div className="p10-section">
            <h2 className="p10-section-title">Portfolio</h2>
            <div className="p10-gallery">
              {artist.gallery.map((src, i) => (
                <div key={i} className="p10-gallery-item">
                  <img src={src} alt="" className="p10-gallery-img" />
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="p10-section">
            <h2 className="p10-section-title">
              <Star className="p10-icon" style={{ width: 20, height: 20, color: 'hsl(45 100% 50%)', fill: 'hsl(45 100% 50%)' }} />
              {artist.rating} · {artist.reviews} Reviews
            </h2>
            {artist.reviews_list.map((r, i) => (
              <div key={i} className="p10-review-card">
                <div className="p10-stars-row">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="p10-icon" style={{ width: 12, height: 12, color: 'hsl(45 100% 50%)', fill: 'hsl(45 100% 50%)' }} />
                  ))}
                </div>
                <p className="p10-review-text">{r.text}</p>
                <p className="p10-review-author">{r.name}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="p10-section">
            <h2 className="p10-section-title">FAQ</h2>
            {artist.faq.map((f, i) => (
              <div key={i} className="p10-faq-card">
                <p className="p10-faq-q">{f.q}</p>
                <p className="p10-faq-a">{f.a}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="p10-cta">
            <h3>Ready to Look Your Best?</h3>
            <p>Limited slots available for this season</p>
            <button className="p10-btn-white">
              Get Started <ArrowRight className="p10-icon" style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
