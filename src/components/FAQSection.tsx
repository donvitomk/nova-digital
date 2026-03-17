import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How does NOVA measure campaign success?",
    a: "We track every metric that matters — ROAS, CPA, LTV, and custom KPIs aligned to your business goals. No vanity metrics, no fluff. You get a live dashboard with full attribution transparency.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We work with B2B SaaS, e-commerce, fintech, and high-growth startups. Our strategies are data-first and adapt to any vertical where measurable ROI is the priority.",
  },
  {
    q: "How quickly can we expect results?",
    a: "Most clients see measurable improvements within 30-60 days. Paid channels deliver faster signal; SEO and content strategies compound over 3-6 months.",
  },
  {
    q: "What makes NOVA different from other agencies?",
    a: "We treat your marketing budget like an investment portfolio — every dollar is tracked, optimized, and accountable. No long-term contracts, no hidden fees. Just performance.",
  },
];

const FAQSection = () => {
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
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-foreground text-balance">
            Still have questions?
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-2xl card-glass border-none px-6"
            >
              <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
