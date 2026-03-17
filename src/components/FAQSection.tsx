import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">{t(translations.faq.label)}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-foreground text-balance">
            {t(translations.faq.heading)}
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {translations.faq.items.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-2xl card-glass border-none px-6"
            >
              <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                {t(faq.q)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {t(faq.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
