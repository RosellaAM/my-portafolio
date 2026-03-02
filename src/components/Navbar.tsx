import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Desktop floating pill */}
      <div className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-card/70 backdrop-blur-xl border border-border/60 shadow-lg shadow-primary/5">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="relative px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/60"
          >
            {item.label}
          </a>
        ))}

        <div className="w-px h-5 bg-border mx-1" />

        {/* Language dropdown */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-muted/60"
          >
            <Globe className="w-3.5 h-3.5" />
            {language === "en" ? "EN" : "ES"}
            <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-3 w-36 rounded-xl border border-border/60 bg-card/90 backdrop-blur-xl shadow-xl overflow-hidden"
              >
                <button
                  onClick={() => { setLanguage("en"); setLangOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${language === "en" ? "text-primary bg-primary/10 font-medium" : "text-foreground hover:bg-muted/60"}`}
                >
                  🇺🇸 English
                </button>
                <button
                  onClick={() => { setLanguage("es"); setLangOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${language === "es" ? "text-primary bg-primary/10 font-medium" : "text-foreground hover:bg-muted/60"}`}
                >
                  🇪🇸 Español
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile floating button + menu */}
      <div className="md:hidden">
        <button
          className="flex items-center justify-center w-11 h-11 rounded-full bg-card/70 backdrop-blur-xl border border-border/60 shadow-lg shadow-primary/5 text-muted-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute top-14 right-0 w-52 rounded-2xl bg-card/90 backdrop-blur-xl border border-border/60 shadow-xl p-3 space-y-1"
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors px-3 py-2 rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-border my-1.5" />
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider px-3 pt-1">
                {t("nav.language")}
              </p>
              <button
                onClick={() => { setLanguage("en"); setOpen(false); }}
                className={`block w-full text-left text-sm px-3 py-2 rounded-lg ${language === "en" ? "text-primary font-medium bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"}`}
              >
                🇺🇸 English
              </button>
              <button
                onClick={() => { setLanguage("es"); setOpen(false); }}
                className={`block w-full text-left text-sm px-3 py-2 rounded-lg ${language === "es" ? "text-primary font-medium bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"}`}
              >
                🇪🇸 Español
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
