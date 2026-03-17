import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient blobs */}
      <div className="absolute inset-0 gradient-radial-hero" />
      <div className="absolute inset-0 gradient-blob-1" />
      <div className="absolute inset-0 gradient-blob-2" />
      
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(241 99% 56%) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-8"
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
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_hsl(241_99%_56%/0.35)]"
          >
            Get Started <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-medium transition-all hover:bg-secondary"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
