import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial-hero" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground text-balance">
            Ready to accelerate your growth?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Book a free strategy session. We'll audit your current performance and show you exactly where the opportunity is.
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@nova.agency"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_hsl(241_99%_56%/0.4)]"
            >
              Book Strategy Call <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
