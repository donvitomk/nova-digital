import { motion } from "framer-motion";
import { Share2, Globe, Palette, Play, Sparkles, Code } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const icons = [Share2, Globe, Code, Palette, Play, Sparkles];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">{t(translations.services.label)}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground text-balance">
            {t(translations.services.heading)}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            {t(translations.services.subheading)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {translations.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.2, 0, 0, 1] }}
                whileHover={{ y: -4 }}
                className="relative p-8 rounded-2xl card-glass card-glass-hover overflow-hidden group cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <Icon className="text-primary mb-5" size={24} strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{t(service.title)}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{t(service.description)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
