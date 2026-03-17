import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="NOVA" className="h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            <span className="text-base font-bold tracking-tight text-background">NOVA</span>
          </div>

          <div className="flex items-center gap-8">
            {["Services", "Our Work", "Results", "Testimonials", "FAQ"].map((link) => (
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
