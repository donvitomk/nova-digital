const clients = [
  "Bloom Beauty",
  "Altitude Fitness",
  "Vibe Co.",
  "Luxe Interiors",
  "CloudStack",
  "FreshBite",
  "NovaTech",
  "Solaris",
  "PeakMedia",
  "UrbanEdge",
];

const ClientLogosMarquee = () => {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-medium text-primary tracking-wide uppercase">Trusted By</p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">Brands we've worked with</h3>
      </div>
      <div className="flex marquee-logos">
        {doubled.map((name, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-10 shrink-0"
          >
            <span className="text-xl font-bold text-muted-foreground/40 whitespace-nowrap tracking-tight select-none">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
