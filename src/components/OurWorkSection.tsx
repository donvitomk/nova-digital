import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

type GalleryItem = {
  label: string;
  color: string;
  type: "image" | "video";
  src?: string;
};

const projects = [
  {
    title: "Bloom Beauty",
    category: "Social Media & Branding",
    color: "from-pink-500/20 to-purple-500/20",
    description: "We built Bloom Beauty's entire social identity from the ground up — a cohesive brand system, monthly content calendars, and a visual language that resonated with their Gen-Z audience. Engagement grew 4x in 3 months.",
    services: ["Social Media Marketing", "Branding", "Graphic Design"],
    gallery: [
      { label: "Brand Identity", color: "from-pink-400/30 to-rose-300/30", type: "image" as const },
      { label: "Social Feed", color: "from-purple-400/30 to-pink-300/30", type: "image" as const },
      { label: "Story Templates", color: "from-fuchsia-400/30 to-purple-300/30", type: "image" as const },
      { label: "Campaign Launch", color: "from-rose-400/30 to-pink-400/30", type: "video" as const },
    ],
  },
  {
    title: "Altitude Fitness",
    category: "Website Design & Development",
    color: "from-primary/20 to-blue-400/20",
    description: "A high-performance website designed to convert visitors into members. We crafted a bold, energetic design language with seamless booking integration and mobile-first responsiveness.",
    services: ["Website Design", "Website Development", "Branding"],
    gallery: [
      { label: "Homepage", color: "from-blue-400/30 to-cyan-300/30", type: "image" as const },
      { label: "Mobile View", color: "from-primary/30 to-blue-300/30", type: "image" as const },
      { label: "Booking Flow", color: "from-sky-400/30 to-blue-300/30", type: "image" as const },
      { label: "Brand System", color: "from-indigo-400/30 to-primary/30", type: "image" as const },
    ],
  },
  {
    title: "Vibe Co.",
    category: "Motion Graphics & Content",
    color: "from-orange-400/20 to-red-400/20",
    description: "Vibe Co. needed scroll-stopping content for their product launches. We produced a series of animated reels and stories that consistently hit 100K+ views and drove a 60% increase in website traffic.",
    services: ["Motion Graphic Design", "Social Media Marketing"],
    gallery: [
      { label: "Product Reel", color: "from-orange-400/30 to-amber-300/30", type: "video" as const },
      { label: "Launch Video", color: "from-red-400/30 to-orange-300/30", type: "video" as const },
      { label: "Story Sequence", color: "from-amber-400/30 to-yellow-300/30", type: "image" as const },
      { label: "Ad Creative", color: "from-orange-500/30 to-red-300/30", type: "image" as const },
    ],
  },
  {
    title: "Luxe Interiors",
    category: "Branding & Graphic Design",
    color: "from-emerald-500/20 to-teal-400/20",
    description: "A complete rebrand for a luxury interior design studio. From a refined logo to print collateral and a premium social media aesthetic, we positioned Luxe as the go-to for high-end residential projects.",
    services: ["Branding", "Graphic Design", "Social Media Marketing"],
    gallery: [
      { label: "Logo Design", color: "from-emerald-400/30 to-green-300/30", type: "image" as const },
      { label: "Print Collateral", color: "from-teal-400/30 to-emerald-300/30", type: "image" as const },
      { label: "Social Aesthetic", color: "from-green-400/30 to-teal-300/30", type: "image" as const },
      { label: "Brand Book", color: "from-emerald-500/30 to-cyan-300/30", type: "image" as const },
    ],
  },
  {
    title: "CloudStack",
    category: "Website Design & Social Media",
    color: "from-violet-500/20 to-primary/20",
    description: "We designed and developed a sleek SaaS landing page and managed CloudStack's LinkedIn and Twitter presence, helping them generate 2,000+ qualified leads in their first quarter.",
    services: ["Website Design", "Website Development", "Social Media Marketing"],
    gallery: [
      { label: "Landing Page", color: "from-violet-400/30 to-purple-300/30", type: "image" as const },
      { label: "Dashboard UI", color: "from-primary/30 to-violet-300/30", type: "image" as const },
      { label: "Social Content", color: "from-purple-400/30 to-indigo-300/30", type: "image" as const },
      { label: "Ad Campaigns", color: "from-indigo-400/30 to-primary/30", type: "video" as const },
    ],
  },
  {
    title: "FreshBite",
    category: "Branding & Motion Graphics",
    color: "from-amber-400/20 to-orange-400/20",
    description: "A vibrant brand identity and animated content suite for a healthy food delivery startup. Our motion graphics and packaging design helped FreshBite stand out in a crowded market.",
    services: ["Branding", "Motion Graphic Design", "Graphic Design"],
    gallery: [
      { label: "Packaging", color: "from-amber-400/30 to-yellow-300/30", type: "image" as const },
      { label: "Brand Identity", color: "from-orange-400/30 to-amber-300/30", type: "image" as const },
      { label: "App Promo Video", color: "from-yellow-400/30 to-orange-300/30", type: "video" as const },
      { label: "Social Templates", color: "from-amber-500/30 to-orange-400/30", type: "image" as const },
    ],
  },
];

const OurWorkSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
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
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.2, 0, 0, 1] }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden card-glass card-glass-hover cursor-pointer"
              >
                <div className={`h-52 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-5xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
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

          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-medium transition-all hover:bg-secondary"
            >
              {showAll ? "Show Less" : "View More Projects"} <ArrowRight size={16} className={showAll ? "rotate-[-90deg] transition-transform" : "transition-transform"} />
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-background rounded-2xl shadow-2xl overflow-hidden border border-border"
          >
            <div className={`h-56 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center`}>
              <span className="text-7xl font-bold text-foreground/10">
                {selectedProject.title.charAt(0)}
              </span>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <X size={18} />
            </button>

            <div className="p-8 max-h-[60vh] overflow-y-auto">
              <p className="text-xs text-primary font-medium uppercase tracking-wide mb-2">{selectedProject.category}</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">{selectedProject.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Project Gallery</h4>
              <div className="grid grid-cols-2 gap-3">
                {selectedProject.gallery.map((item, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-br ${item.color} rounded-xl h-36 flex items-center justify-center`}
                  >
                    <span className="text-sm font-medium text-foreground/50">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default OurWorkSection;
