import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const staticClients = [
  "Bloom Beauty", "Altitude Fitness", "Vibe Co.", "Luxe Interiors",
  "CloudStack", "FreshBite", "NovaTech", "Solaris", "PeakMedia", "UrbanEdge",
];

const ClientLogosMarquee = () => {
  const { t } = useLanguage();
  const { data: dbLogos } = useQuery({
    queryKey: ["client-logos"],
    queryFn: async () => {
      const { data, error } = await supabase.from("client_logos").select("*").order("display_order");
      if (error) throw error;
      return data;
    },
  });

  const logos = dbLogos && dbLogos.length > 0 ? dbLogos : staticClients.map((name) => ({ name, logo_url: null }));
  const minItems = Math.max(1, Math.ceil(10 / logos.length));
  const filled = Array.from({ length: minItems }, () => logos).flat();
  const doubled = [...filled, ...filled];

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-medium text-primary tracking-wide uppercase">{t(translations.clientLogos.trustedBy)}</p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">{t(translations.clientLogos.brandsWorkedWith)}</h3>
      </div>
      <div className="flex marquee-logos">
        {doubled.map((logo, i) => (
          <div key={i} className="flex items-center justify-center px-10 shrink-0">
            {logo.logo_url ? (
              <img src={logo.logo_url} alt={logo.name} className="h-10 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-opacity" />
            ) : (
              <span className="text-xl font-bold text-muted-foreground/40 whitespace-nowrap tracking-tight select-none">
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
