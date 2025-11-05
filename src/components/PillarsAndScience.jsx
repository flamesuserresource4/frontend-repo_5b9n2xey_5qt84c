import { motion } from 'framer-motion';
import { Activity, FlaskConical, Leaf } from 'lucide-react';

const COLORS = {
  cream: '#F5EDE3',
  ivory: '#FAF7F3',
  gold: '#C89B54',
  brown: '#3E2E1F',
  lightGold: '#E8C77D',
};

const pillars = [
  {
    icon: Activity,
    title: 'Lifting Effect',
    desc: 'Visible firming and smoothing for youthful contours.',
  },
  {
    icon: FlaskConical,
    title: 'Clinical-Grade Formulas',
    desc: 'Actives backed by cosmetic science and testing.',
  },
  {
    icon: Leaf,
    title: 'Clean & Responsible Beauty',
    desc: 'Thoughtful, cruelty-free, skin-forward choices.',
  },
];

export default function PillarsAndScience() {
  return (
    <section aria-label="Values and Science" className="py-20" style={{ backgroundColor: COLORS.ivory }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 shadow-sm bg-white/70 backdrop-blur border"
              style={{ borderColor: COLORS.gold + '33' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: COLORS.cream, boxShadow: `0 0 0 1px ${COLORS.gold} inset` }}
              >
                <p.icon color={COLORS.gold} />
              </div>
              <h3 className="text-xl font-serif mb-2" style={{ color: COLORS.brown }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.brown }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div id="science" className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: COLORS.brown }}>
              The Science of Lift
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: COLORS.brown }}>
              Our formulas support collagen and elastin with peptides like Matrixyl 3000 and antioxidants
              such as Coenzyme Q10 to improve elasticity and reduce wrinkle depth. Multi-weight Hyaluronic
              Acid delivers surface-to-deep hydration for plumper, smoother skin.
            </p>
            <div className="flex items-center gap-4 text-sm" style={{ color: COLORS.brown }}>
              <span className="inline-flex items-center px-3 py-1 rounded-full" style={{ backgroundColor: COLORS.cream }}>
                Made in Bulgaria
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full" style={{ backgroundColor: COLORS.cream }}>
                Certified Authenticity
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl p-6 overflow-hidden bg-white" style={{ boxShadow: `0 10px 30px ${COLORS.gold}22` }}>
              <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-2xl opacity-40" style={{ background: COLORS.gold }} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl" style={{ backgroundColor: COLORS.ivory }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: COLORS.brown }}>Collagen</p>
                  <div className="h-24 w-full rounded bg-gradient-to-b from-amber-200 to-amber-400" />
                  <p className="mt-2 text-xs" style={{ color: COLORS.brown }}>Structure & firmness</p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: COLORS.ivory }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: COLORS.brown }}>Elastin</p>
                  <div className="h-24 w-full rounded bg-gradient-to-b from-rose-200 to-rose-400" />
                  <p className="mt-2 text-xs" style={{ color: COLORS.brown }}>Elasticity & bounce</p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: COLORS.ivory }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: COLORS.brown }}>Hydration</p>
                  <div className="h-24 w-full rounded bg-gradient-to-b from-sky-200 to-sky-400" />
                  <p className="mt-2 text-xs" style={{ color: COLORS.brown }}>Multi-weight HA</p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: COLORS.ivory }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: COLORS.brown }}>Defense</p>
                  <div className="h-24 w-full rounded bg-gradient-to-b from-emerald-200 to-emerald-400" />
                  <p className="mt-2 text-xs" style={{ color: COLORS.brown }}>Antioxidants</p>
                </div>
              </div>
              <p className="mt-4 text-xs" style={{ color: COLORS.brown }}>
                Simplified infographic illustrating skin-support pillars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
