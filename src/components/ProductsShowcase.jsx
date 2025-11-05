import { motion } from 'framer-motion';

const COLORS = {
  cream: '#F5EDE3',
  ivory: '#FAF7F3',
  gold: '#C89B54',
  brown: '#3E2E1F',
  lightGold: '#E8C77D',
  bronze: '#B3884E',
};

function ProductCard({ tag, title, price, volume, tagline, desc, results, details, cta, paired }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-8 bg-white/80 backdrop-blur border shadow-sm"
      style={{ borderColor: COLORS.gold + '33' }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full" style={{ backgroundColor: COLORS.cream, color: COLORS.brown }}>
          {tag}
        </span>
        {paired ? (
          <span className="text-xs px-3 py-1 rounded-full" style={{ border: `1px solid ${COLORS.gold}`, color: COLORS.gold }}>
            {paired}
          </span>
        ) : null}
      </div>
      <h3 className="text-2xl font-serif" style={{ color: COLORS.brown }}>{title}</h3>
      <p className="mt-2 text-sm" style={{ color: COLORS.brown }}>{tagline}</p>
      <p className="mt-4 text-sm leading-relaxed" style={{ color: COLORS.brown }}>{desc}</p>

      <div className="mt-6">
        <h4 className="font-semibold mb-2" style={{ color: COLORS.brown }}>Results</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm" style={{ color: COLORS.brown }}>
          {results.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm" style={{ color: COLORS.brown }}>
        {details.map((d) => (
          <div key={d.label} className="flex items-start gap-2">
            <span className="font-medium" style={{ color: COLORS.brown }}>{d.label}:</span>
            <span className="opacity-90">{d.value}</span>
          </div>
        ))}
        <div className="flex items-start gap-2"><span className="font-medium">Volume:</span><span>{volume}</span></div>
        <div className="flex items-start gap-2"><span className="font-medium">Price:</span><span>{price}</span></div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <a
          href="#buy"
          className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white"
          style={{ backgroundColor: COLORS.gold, boxShadow: `0 8px 24px rgba(200,155,84,0.35)` }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 10px 28px ${COLORS.lightGold}66`)}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 8px 24px rgba(200,155,84,0.35)`)}
        >
          Buy Now
        </a>
        <span className="text-sm" style={{ color: COLORS.brown }}>{cta}</span>
      </div>
    </motion.div>
  );
}

export default function ProductsShowcase() {
  return (
    <section id="products" className="py-24" style={{ backgroundColor: COLORS.cream }} aria-label="Featured Products">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-serif mb-2" style={{ color: COLORS.brown }}>Night Ritual</h2>
          <p className="text-sm" style={{ color: COLORS.brown }}>Curated duo for lifting and overnight regeneration.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ProductCard
            tag="Lifting Night Cream"
            title="Night Hydra Lift"
            price="89 BGN"
            volume="50 ml"
            tagline="Luxurious regenerating night cream with lifting effect and triple hydration."
            desc={
              'Wake up to rejuvenated, nourished, and radiant skin. Night Hydra Lift combines 3 types of hyaluronic acid (high, medium, and low molecular) for full hydration, while D-Panthenol and Niacinamide restore barrier and even tone. Pomegranate & Rosehip oils (3%) offer antioxidant protection and support natural overnight regeneration. Matrixyl 3000 and Coenzyme Q10 stimulate collagen, reduce wrinkles, and improve elasticity. With Centella Asiatica, Ceramides, Aloe Vera, and Vitamin E, it shields skin from oxidative stress and deeply nourishes it through the night.'
            }
            results={[
              'Smoother, firmer, more elastic skin',
              'Even and radiant tone',
              'Reduced wrinkle depth',
              'Enhanced overnight regeneration',
            ]}
            details={[
              { label: 'Type', value: 'Night lifting cream' },
              { label: 'Action', value: 'Regeneration, hydration, smoothing' },
              { label: 'Key Ingredients', value: 'Hyaluronic Acid, D-Panthenol, Niacinamide, Matrixyl 3000, Coenzyme Q10' },
              { label: 'Origin', value: 'Made in Bulgaria' },
              { label: 'Certification', value: 'Authenticity Certificate' },
            ]}
            cta="Clinically tested for visible results in 7 days."
          />

          <ProductCard
            tag="Eye Contour Cream"
            title="Eye Sculpt Illumine"
            price="69 BGN"
            volume="30 ml"
            tagline="Luxury eye cream with firming, smoothing, and brightening effect."
            desc={
              'Eye Sculpt Illumine provides precise care for the delicate eye area. Formulated with 3 types of hyaluronic acid, D-Panthenol, Niacinamide, and Caffeine to reduce puffiness and dark circles. Squalane, Camellia oil, and Coffee bean oil nourish and soften the skin. Matrixyl 3000 renews cells and smooths fine lines. Centella Asiatica strengthens capillaries and restores youthful glow. Ceramides, Vitamin E, Aloe Vera, and Licorice Extract brighten and refresh the eye contour.'
            }
            results={[
              'Reduced puffiness and dark circles',
              'Smoother, firmer texture',
              'Brighter, refreshed look',
            ]}
            details={[
              { label: 'Type', value: 'Eye contour cream' },
              { label: 'Action', value: 'Firming, brightening, hydration' },
              { label: 'Key Ingredients', value: 'Hyaluronic Acid, Caffeine, Matrixyl 3000, Niacinamide' },
              { label: 'Origin', value: 'Made in Bulgaria' },
              { label: 'Certification', value: 'Authenticity Certificate' },
            ]}
            cta="Visibly firmer and radiant eye contour."
            paired="Best paired with Night Hydra Lift"
          />
        </div>
      </div>
    </section>
  );
}
