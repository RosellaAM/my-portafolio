import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "SQL", "HTTPS"],
  },
  {
    title: "ML & AI",
    icon: "🧠",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
  },
  {
    title: "Data Tools",
    icon: "📊",
    skills: ["Pandas", "NumPy", "SciPy"],
  },
  {
    title: "Visualization",
    icon: "📈",
    skills: ["Matplotlib", "Plotly", "Seaborn", "PowerBI"],
  },
  {
    title: "Deployment",
    icon: "🚀",
    skills: ["Git", "Joblib", "Google Drive API"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14 font-serif text-foreground">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className="group relative bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-mono text-sm font-semibold tracking-wide text-primary uppercase">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 group/skill"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 + j * 0.06 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/skill:bg-primary group-hover/skill:shadow-[0_0_6px_hsl(var(--primary)/0.4)] transition-all duration-200" />
                      <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-200 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
