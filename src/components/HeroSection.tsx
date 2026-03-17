import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logoSvg from "@/assets/logo.svg";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0" style={{
        background: `
          linear-gradient(to bottom, hsl(241 99% 56%) 0%, hsl(241 99% 56% / 0.6) 30%, transparent 65%),
          radial-gradient(ellipse 50% 70% at 50% 20%, white 0%, transparent 60%)
        `,
      }} />
      
      <div className="absolute top-0 left-0 right-0 h-[420px] overflow-hidden">
        <div className="absolute -inset-16">
          {[...Array(5)].map((_, row) => (
            <div
              key={row}
              className="flex"
              style={{
                marginTop: row === 0 ? 0 : '4px',
                marginLeft: row % 2 === 1 ? '7%' : 0,
              }}
            >
              {[...Array(8)].map((_, col) => {
                const distFromCenter = Math.sqrt(Math.pow(col - 3.5, 2) + Math.pow(row - 1.5, 2));
                const opacity = Math.max(0.06, 0.32 - distFromCenter * 0.04);
                return (
                  <div key={col} className="shrink-0 flex items-center justify-center" style={{ width: '16.5%', height: '82px', opacity }}>
                    <img src={logoSvg} alt="" className="w-44 h-44 lg:w-48 lg:h-48" style={{ filter: 'brightness(0) invert(1)' }} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,white_0%,transparent_65%)]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border text-sm text-muted-foreground mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {t(translations.hero.badge)}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="text-5xl sm:text-6xl lg:text-[5rem] font-bold tracking-[-0.04em] leading-[0.95] text-foreground text-balance max-w-4xl mx-auto"
        >
          {t(translations.hero.heading1)}<br /><span className="sm:whitespace-nowrap">{t(translations.hero.heading2)}</span> <span className="inline-flex items-center px-5 sm:px-6 pb-2 sm:pb-4 pt-1 sm:pt-2 rounded-[14px] sm:rounded-[20px] text-primary-foreground relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(241 99% 66%) 0%, hsl(241 99% 56%) 100%)', verticalAlign: 'baseline' }}><span className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.35)_0%,transparent_60%)]" />{t(translations.hero.heading3)}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
        >
          {t(translations.hero.description)}
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
            {t(translations.hero.learnMore)}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_hsl(241_99%_56%/0.35)]"
          >
            {t(translations.hero.getStarted)} <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
