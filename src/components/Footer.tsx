import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="NOVA" className="h-7 w-auto invert" />
            <span className="text-sm font-bold tracking-tight text-foreground">NOVA</span>
          </div>

          <div className="flex items-center gap-8">
            {["Services", "Results", "Testimonials", "FAQ"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NOVA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
