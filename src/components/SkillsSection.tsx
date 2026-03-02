import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    { titleKey: "skills.languages", icon: "💻", skills: ["Python", "SQL", "HTTPS"] },
    { titleKey: "skills.mlai", icon: "🧠", skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"] },
    { titleKey: "skills.datatools", icon: "📊", skills: ["Pandas", "NumPy", "SciPy"] },
    { titleKey: "skills.visualization", icon: "📈", skills: ["Matplotlib", "Plotly", "Seaborn", "PowerBI"] },
    { titleKey: "skills.deployment", icon: "🚀", skills: ["Git", "Joblib", "Google Drive API"] },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{t("skills.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14 font-serif text-foreground">{t("skills.title")}</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.titleKey}
              className="w-full md:w-[calc(33.333%-14px)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="h-full bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5" intensity={10}>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="font-mono text-sm font-semibold tracking-wide text-primary uppercase">{t(category.titleKey)}</h3>
                  </div>
                  <div className="space-y-2.5">
                    {category.skills.map((skill, j) => (
                      <motion.div key={skill} className="flex items-center gap-3 group/skill" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.08 + j * 0.06 }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/skill:bg-primary group-hover/skill:shadow-[0_0_6px_hsl(var(--primary)/0.4)] transition-all duration-200" />
                        <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-200 font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
