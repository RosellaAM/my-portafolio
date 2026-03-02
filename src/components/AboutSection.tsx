import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative" id="about">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{t("about.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-serif">{t("about.title")}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <TiltCard className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300" intensity={4}>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">{t("about.description")}</p>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
