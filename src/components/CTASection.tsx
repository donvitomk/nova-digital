import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(241 99% 56%) 0%, hsl(241 99% 48%) 100%)' }}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-primary-foreground text-balance">
            {t(translations.cta.heading)}
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-md mx-auto">
            {t(translations.cta.subheading)}
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@nova.agency"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-background text-foreground font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
            >
              {t(translations.cta.button)} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
