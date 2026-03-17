const metrics = [
  { value: "47.2%", label: "Avg. ROAS Increase" },
  { value: "3.8x", label: "Revenue Growth" },
  { value: "62%", label: "Lower CPA" },
  { value: "150+", label: "Brands Scaled" },
  { value: "98%", label: "Client Retention" },
  { value: "2.4M+", label: "Leads Generated" },
];

const MetricMarquee = () => {
  const doubled = [...metrics, ...metrics];

  return (
    <section className="py-12 border-y border-foreground/[0.06] overflow-hidden">
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
