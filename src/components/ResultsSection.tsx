import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const statValues = ["3x", "20+", "1M+", "98%"];

const ResultsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="results" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial-hero opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">{t(translations.results.label)}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground text-balance">
            {t(translations.results.heading)}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {translations.results.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              className="p-8 rounded-2xl card-glass text-center"
            >
              <span className="font-mono text-4xl lg:text-5xl font-bold text-primary tabular-nums">
                {statValues[i]}
              </span>
              <p className="mt-3 text-sm text-muted-foreground">{t(stat.label)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
