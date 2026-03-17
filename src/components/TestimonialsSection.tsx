import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const staticTestimonials = [
  { quote: "NOVA completely transformed our social media presence. Our engagement tripled in just two months.", author: "Sarah Chen", role: "Founder", company: "Bloom Beauty" },
  { quote: "The branding and website they created for us is stunning. We get compliments from clients every single day.", author: "Marcus Rodriguez", role: "CEO", company: "Altitude Fitness" },
  { quote: "Their motion graphics took our content to the next level. Our reels consistently hit 100K+ views now.", author: "Emily Park", role: "Marketing Director", company: "Vibe Co." },
];

const TestimonialsSection = () => {
  const { data: dbTestimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase.from("testimonials").select("*").order("display_order");
      if (error) throw error;
      return data;
    },
  });

  const testimonials = dbTestimonials && dbTestimonials.length > 0
    ? dbTestimonials.map((t) => ({ quote: t.quote, author: t.author, role: t.role, company: t.company }))
    : staticTestimonials;

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground text-balance">
            What our clients say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author + i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              className="p-8 rounded-2xl card-glass"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
