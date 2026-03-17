import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t(translations.nav.services), href: "#services" },
    { label: t(translations.nav.ourWork), href: "#work" },
    { label: t(translations.nav.results), href: "#results" },
    { label: t(translations.nav.testimonials), href: "#testimonials" },
    { label: t(translations.nav.faq), href: "#faq" },
  ];

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="NOVA" className="h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            <span className="text-base font-bold tracking-tight text-background">NOVA</span>
          </div>

          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-background/70 hover:text-background transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} NOVA. {t(translations.footer.rights)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
