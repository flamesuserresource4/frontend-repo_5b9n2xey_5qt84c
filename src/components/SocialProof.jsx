import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const COLORS = {
  cream: '#F5EDE3',
  ivory: '#FAF7F3',
  gold: '#C89B54',
  brown: '#3E2E1F',
  lightGold: '#E8C77D',
};

const reviews = [
  {
    name: 'Elena K.',
    text: 'In just a week my skin felt firmer and looked brighter. The texture is luxurious.',
  },
  {
    name: 'Mariya P.',
    text: 'Puffiness around my eyes reduced significantly. Love the subtle glow!',
  },
  {
    name: 'Ivana N.',
    text: 'The duo is perfect for my night routine. Noticeably smoother forehead lines.',
  },
  {
    name: 'Stoyanka R.',
    text: 'Feels premium and absorbs beautifully. Authentic Bulgarian excellence.',
  },
  {
    name: 'Borisla V.',
    text: 'Gentle yet effective. My skin tone looks so even now.',
  },
];

export default function SocialProof() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form?.email?.value;
    if (email) alert('Thank you! You will receive 10% off in your inbox.');
    form.reset();
  };

  return (
    <section aria-label="Social Proof and Newsletter" className="pt-20" style={{ backgroundColor: COLORS.ivory }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: COLORS.brown }}>What clients say</h2>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" role="list">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name + i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="min-w-[280px] max-w-sm snap-start rounded-2xl p-6 bg-white/80 backdrop-blur border"
                  style={{ borderColor: COLORS.gold + '33' }}
                  role="listitem"
                >
                  <div className="flex items-center gap-1 mb-3" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} color={COLORS.gold} fill={COLORS.gold} />
                    ))}
                  </div>
                  <p className="text-sm mb-3" style={{ color: COLORS.brown }}>
                    “{r.text}”
                  </p>
                  <p className="text-xs" style={{ color: COLORS.brown }}>— {r.name} (Verified)</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="text-2xl font-serif mb-3" style={{ color: COLORS.brown }}>About 8th Wonder Pro Cosmetics</h3>
            <p className="text-sm leading-relaxed" style={{ color: COLORS.brown }}>
              8th Wonder Pro Cosmetics merges Bulgarian skincare expertise with advanced cosmetic science.
              Clinically tested, cruelty-free, and certified for authenticity. Our warm, luxury approach
              honors timeless femininity with science-led results.
            </p>
          </div>

          <div className="rounded-2xl p-6" style={{ backgroundColor: COLORS.cream }}>
            <h3 className="text-xl font-serif mb-2" style={{ color: COLORS.brown }}>
              Get 10% off your first order + early access to new skincare rituals
            </h3>
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/70 border outline-none focus:ring"
                style={{ borderColor: COLORS.gold + '66', color: COLORS.brown }}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full text-white"
                style={{ backgroundColor: COLORS.gold, boxShadow: `0 8px 24px rgba(200,155,84,0.35)` }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 10px 28px ${COLORS.lightGold}66`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 8px 24px rgba(200,155,84,0.35)`)}
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs" style={{ color: COLORS.brown }}>
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <footer className="py-10 border-t" style={{ borderColor: COLORS.gold + '33' }}>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-serif text-lg" style={{ color: COLORS.brown }}>8th Wonder Pro Cosmetics</p>
              <p className="text-sm" style={{ color: COLORS.brown }}>Reveal Your Eighth Wonder.</p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-4 text-sm" style={{ color: COLORS.brown }}>
              <a href="#products" className="hover:underline">Shop</a>
              <a href="#science" className="hover:underline">Science</a>
              <a href="#" className="hover:underline">Returns</a>
              <a href="#" className="hover:underline">Delivery</a>
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">BG / EN</a>
            </nav>
            <div className="text-xs" style={{ color: COLORS.brown }}>
              © {new Date().getFullYear()} 8th Wonder Pro Cosmetics. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
