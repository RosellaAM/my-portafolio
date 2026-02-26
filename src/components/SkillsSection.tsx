import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "R", "SQL", "JavaScript"],
  },
  {
    title: "ML & AI",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
  },
  {
    title: "Data Tools",
    skills: ["Pandas", "NumPy", "Spark", "Airflow"],
  },
  {
    title: "Visualization",
    skills: ["Matplotlib", "Plotly", "Tableau", "D3.js"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-glow/30 transition-colors border-glow/0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-mono text-primary text-sm font-medium mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-secondary-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
