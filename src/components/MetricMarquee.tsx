import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const metrics = [
  { value: "20+", labelKey: "brandsTransformed" as const },
  { value: "1M+", labelKey: "socialImpressions" as const },
  { value: "3x", labelKey: "avgEngagement" as const },
  { value: "10+", labelKey: "websitesLaunched" as const },
  { value: "98%", labelKey: "clientRetention" as const },
  { value: "1000+", labelKey: "designsDelivered" as const },
];

const MetricMarquee = () => {
  const { t } = useLanguage();
  const doubled = [...metrics, ...metrics];

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex marquee">
        {doubled.map((m, i) => (
          <div key={i} className="flex items-center gap-3 px-10 shrink-0">
            <span className="font-mono text-2xl font-semibold text-primary tabular-nums">
              {m.value}
            </span>
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {t(translations.metrics[m.labelKey])}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricMarquee;
