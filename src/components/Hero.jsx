import { motion } from 'framer-motion';

const COLORS = {
  cream: '#F5EDE3',
  ivory: '#FAF7F3',
  gold: '#C89B54',
  rose: '#DAB89E',
  brown: '#3E2E1F',
  lightGold: '#E8C77D',
};

export default function Hero() {
  const handleImgError = (e) => {
    if (e?.currentTarget) {
      e.currentTarget.style.display = 'none';
      const fallback = document.getElementById('logo-fallback');
      if (fallback) fallback.style.display = 'block';
    }
  };

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${COLORS.cream} 0%, ${COLORS.ivory} 100%)`,
      }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-3xl opacity-30"
          style={{ background: COLORS.rose }}
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-8"
        >
          <img
            src="/logo.png"
            alt="8th Wonder – Luxury Skincare Product logo (metallic gold infinity 8)"
            className="w-28 h-28 object-contain drop-shadow"
            onError={handleImgError}
          />
          <div
            id="logo-fallback"
            className="hidden text-3xl font-serif"
            style={{ color: COLORS.gold }}
          >
            8th Wonder Pro Cosmetics
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif tracking-tight mb-4"
          style={{ color: COLORS.brown }}
        >
          Reveal Your Eighth Wonder.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
          style={{ color: COLORS.brown }}
        >
          Professional anti-aging skincare with visible lifting and deep regeneration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white shadow-sm transition-transform hover:scale-[1.02] focus:scale-[1.02]"
            style={{ backgroundColor: COLORS.gold, boxShadow: `0 8px 24px rgba(200,155,84,0.35)` }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 10px 28px ${COLORS.lightGold}66`)}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 8px 24px rgba(200,155,84,0.35)`)}
          >
            Shop Now
          </a>
          <a
            href="#science"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full transition-colors"
            style={{ color: COLORS.gold, border: `1px solid ${COLORS.gold}` }}
          >
            The Science
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 text-xs tracking-wide uppercase"
          style={{ color: COLORS.brown, opacity: 0.9 }}
        >
          Made in Bulgaria • Certified Authenticity • Premium Ingredients
        </motion.p>
      </div>
    </section>
  );
}
