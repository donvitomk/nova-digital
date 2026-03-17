import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Full blue at edges, white in center — fading down to white */}
      <div className="absolute inset-0" style={{
        background: `
          linear-gradient(to bottom, hsl(241 99% 56%) 0%, hsl(241 99% 56% / 0.6) 30%, transparent 65%),
          radial-gradient(ellipse 50% 70% at 50% 20%, white 0%, transparent 60%)
        `,
      }} />
      
      {/* Geometric column shapes at top */}
      <div className="absolute top-0 left-0 right-0 h-[300px] overflow-hidden">
        <div className="absolute inset-0 flex justify-center gap-3 px-4">
          {[...Array(11)].map((_, i) => {
            const distFromCenter = Math.abs(i - 5);
            return (
              <div
                key={i}
                className="shrink-0 w-[130px] lg:w-[150px] rounded-b-3xl"
                style={{
                  height: `${200 + Math.sin(i * 0.7) * 50}px`,
                  background: `linear-gradient(180deg, hsl(241 99% 56% / ${0.9 - distFromCenter * 0.08}) 0%, hsl(241 99% 56% / ${0.3 - distFromCenter * 0.03}) 100%)`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Center white radial behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,white_0%,transparent_65%)]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.08] border border-primary/[0.12] text-sm text-muted-foreground mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Performance-driven digital marketing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="text-5xl sm:text-6xl lg:text-[5rem] font-bold tracking-[-0.04em] leading-[0.95] text-foreground text-balance max-w-4xl mx-auto"
        >
          Your brand needs<br />better <span className="inline-flex items-center px-6 pb-4 pt-2 rounded-xl text-primary-foreground relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(241 99% 66%) 0%, hsl(241 99% 56%) 100%)', verticalAlign: 'baseline' }}><span className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.35)_0%,transparent_60%)]" />content</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
        >
          NOVA helps ambitious brands achieve predictable growth with data-driven campaigns, precision targeting, and measurable ROI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0, 0, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-medium transition-all hover:bg-secondary"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_hsl(241_99%_56%/0.35)]"
          >
            Get Started <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
