const metrics = [
  { value: "20+", label: "Brands Transformed" },
  { value: "1M+", label: "Social Impressions" },
  { value: "3x", label: "Avg. Engagement Growth" },
  { value: "10+", label: "Websites Launched" },
  { value: "98%", label: "Client Retention" },
  { value: "5K+", label: "Designs Delivered" },
];

const MetricMarquee = () => {
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
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricMarquee;
