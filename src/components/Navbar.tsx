import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t(translations.nav.services), href: "#services" },
    { label: t(translations.nav.ourWork), href: "#work" },
    { label: t(translations.nav.results), href: "#results" },
    { label: t(translations.nav.testimonials), href: "#testimonials" },
    { label: t(translations.nav.faq), href: "#faq" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-4xl bg-background/80 backdrop-blur-xl rounded-full border border-border shadow-[0_2px_16px_rgba(0,0,0,0.06)] flex items-center justify-between h-14 px-3 pl-5">
        <a href="#" className="flex items-center gap-1 shrink-0">
          <img src={logo} alt="NOVA" className="h-12 w-auto invert" />
          <span className="text-xl font-bold tracking-tight text-foreground">NOVA</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button
            onClick={() => setLang(lang === "en" ? "mk" : "en")}
            className="px-2.5 py-1 text-xs font-semibold rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            {lang === "en" ? "MK" : "EN"}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground transition-all hover:glow-primary hover:scale-[1.02]"
          >
            {t(translations.nav.contact)}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "mk" : "en")}
            className="px-2.5 py-1 text-xs font-semibold rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            {lang === "en" ? "MK" : "EN"}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute top-16 left-4 right-4 bg-background/95 backdrop-blur-xl rounded-2xl border border-border shadow-lg px-6 py-4 space-y-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center px-5 py-2.5 text-sm font-medium rounded-full bg-primary text-primary-foreground"
            onClick={() => setMobileOpen(false)}
          >
            {t(translations.nav.contact)}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
