import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What social media platforms do you manage?",
    a: "We manage Instagram, TikTok, Facebook, LinkedIn, X (Twitter), and Pinterest. We'll recommend the right mix based on your audience and goals.",
  },
  {
    q: "How long does a website project take?",
    a: "Most websites are designed, built, and launched within 3-5 weeks depending on complexity. We work in sprints and keep you involved at every milestone.",
  },
  {
    q: "Do you offer branding packages for startups?",
    a: "Absolutely. We have tailored branding packages that include logo design, brand guidelines, typography, color systems, and social media templates — perfect for new businesses.",
  },
  {
    q: "Can you create content for our social media?",
    a: "Yes — from graphic posts and carousel designs to reels, motion graphics, and stories. We handle the creative so you can focus on running your business.",
  },
  {
    q: "What makes NOVA different from other agencies?",
    a: "We combine creative excellence with strategic thinking. Every design, post, and pixel serves a purpose. No fluff, no cookie-cutter templates — just bold, original work tailored to your brand.",
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
