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
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="font-mono font-bold text-sm tracking-wider text-primary" />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition-colors text-foreground hover:text-primary"
            >
              {item.label}
            </a>
          ))}

          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-lg border border-border hover:border-primary/40"
            >
              <Globe className="w-4 h-4" />
              {t("nav.language")}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-36 rounded-lg border border-border bg-card shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => { setLanguage("en"); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${language === "en" ? "text-primary bg-primary/10 font-medium" : "text-foreground hover:bg-muted"}`}
                  >
                    🇺🇸 English
                  </button>
                  <button
                    onClick={() => { setLanguage("es"); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${language === "es" ? "text-primary bg-primary/10 font-medium" : "text-foreground hover:bg-muted"}`}
                  >
                    🇪🇸 Español
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-border space-y-1">
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-2">
              {t("nav.language")}
            </p>
            <button
              onClick={() => { setLanguage("en"); setOpen(false); }}
              className={`block w-full text-left text-sm px-2 py-1.5 rounded ${language === "en" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              🇺🇸 English
            </button>
            <button
              onClick={() => { setLanguage("es"); setOpen(false); }}
              className={`block w-full text-left text-sm px-2 py-1.5 rounded ${language === "es" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              🇪🇸 Español
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
