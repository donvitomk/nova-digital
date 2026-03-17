import { motion } from "framer-motion";
import { Share2, Globe, Palette, Play, Sparkles, Code } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategy, content calendars, and community management that grow your audience and drive real engagement.",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Custom websites built for conversion — fast, responsive, and designed to make your brand unforgettable.",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Clean, performant code that brings designs to life — from landing pages to full-scale web applications.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "From social posts to print campaigns, we create visuals that stop the scroll and communicate your story.",
  },
  {
    icon: Play,
    title: "Motion Graphic Design",
    description: "Animated content that captivates — reels, explainers, and video graphics that bring your brand to life.",
  },
  {
    icon: Sparkles,
    title: "Branding",
    description: "Complete brand identity systems — logo, typography, color, voice — that make you instantly recognizable.",
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
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground text-balance">
            Everything your brand needs
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Five core creative services. One unified vision for your brand.
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
