import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t, language } = useLanguage();

  const links = [
    { 
      icon: Mail, 
      label: t("contact.email"), 
      href: "mailto:rosella.astrain@gmail.com",
      external: false
    },
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/RosellaAM",
      external: true 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/maria-rosella-astrain/",
      external: true 
    },
    { 
      icon: FileText, 
      label: t("contact.resume"), 
      href: language === "en" ? "/cv/Rosella_Astrain_CV_English.pdf" : "/cv/Rosella_Astrain_CV_Spanish.pdf",
      external: false
    },
  ];

  return (
    <section className="py-24 relative" id="contact">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{t("contact.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-serif">{t("contact.title")}</h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">{t("contact.description")}</p>
        </motion.div>

        <motion.div className="flex items-center justify-center gap-4 flex-wrap" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          {links.map(({ icon: Icon, label, href, external }) => (
            <TiltCard key={label} className="inline-block" intensity={12}>
              <a 
                href={href} 
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} 
                className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-lg text-sm hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-foreground bg-card"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            </TiltCard>
          ))}
        </motion.div>

        <motion.p className="mt-16 text-xs text-muted-foreground font-mono" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
          © {new Date().getFullYear()} · {t("contact.footer")}
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;