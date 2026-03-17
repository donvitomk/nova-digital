import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Search, Megaphone, Target, Zap, Globe } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "Paid media campaigns engineered for conversion, not vanity metrics. Every dollar tracked.",
  },
  {
    icon: Search,
    title: "Performance SEO",
    description: "Technical audits and content clusters designed for conversion, not just traffic.",
  },
  {
    icon: Megaphone,
    title: "Social Media Growth",
    description: "Data-informed content strategies that build audiences and drive measurable engagement.",
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "A/B testing, funnel analysis, and UX improvements that directly increase revenue.",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Instant setup. Direct API connectivity. Workflows that nurture leads at scale.",
  },
  {
    icon: Globe,
    title: "Web Analytics & BI",
    description: "Custom dashboards and attribution models so you see exactly where growth comes from.",
  },
];

const ServicesSection = () => {
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
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">What we do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground text-balance">
            Full-stack growth engine
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Six core capabilities. One relentless focus on your bottom line.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -4 }}
              className="relative p-8 rounded-2xl card-glass card-glass-hover overflow-hidden group cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <service.icon className="text-primary mb-5" size={24} strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
