import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Bloom Beauty",
    category: "Social Media & Branding",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    title: "Altitude Fitness",
    category: "Website Design & Development",
    color: "from-primary/20 to-blue-400/20",
  },
  {
    title: "Vibe Co.",
    category: "Motion Graphics & Content",
    color: "from-orange-400/20 to-red-400/20",
  },
  {
    title: "Luxe Interiors",
    category: "Branding & Graphic Design",
    color: "from-emerald-500/20 to-teal-400/20",
  },
  {
    title: "CloudStack",
    category: "Website Design & Social Media",
    color: "from-violet-500/20 to-primary/20",
  },
  {
    title: "FreshBite",
    category: "Branding & Motion Graphics",
    color: "from-amber-400/20 to-orange-400/20",
  },
];

const OurWorkSection = () => {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Our Work</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground text-balance">
            Projects we're proud of
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            A selection of brands we've helped grow, design, and transform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden card-glass card-glass-hover cursor-pointer"
            >
              <div className={`h-52 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-4xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">{project.category}</p>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <div className="mt-3 flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
