import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="NOVA" className="h-7 w-auto brightness-0 invert-0 hue-rotate-[220deg] saturate-[5] brightness-[0.6]" style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(95%) saturate(5713%) hue-rotate(243deg) brightness(96%) contrast(107%)' }} />
            <span className="text-sm font-bold tracking-tight text-primary">NOVA</span>
          </div>

          <div className="flex items-center gap-8">
            {["Services", "Results", "Testimonials", "FAQ"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-background/70 hover:text-background transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} NOVA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
