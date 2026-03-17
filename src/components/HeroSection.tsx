import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Blue-to-white gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.18] via-primary/[0.06] to-transparent" />
      
      {/* Geometric column shapes at top */}
      <div className="absolute top-0 left-0 right-0 h-[340px] overflow-hidden opacity-[0.35]">
        <div className="absolute inset-0 flex justify-center gap-3 px-4">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="shrink-0 w-[140px] lg:w-[160px] rounded-b-3xl"
              style={{
                height: `${180 + Math.sin(i * 0.8) * 60}px`,
                background: `linear-gradient(180deg, hsl(241 99% 56% / ${0.3 - i * 0.02}) 0%, hsl(241 99% 56% / 0.05) 100%)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(241_99%_56%/0.12)_0%,transparent_70%)]" />

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
          Scale at the speed of light.
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
