import { motion } from "framer-motion";

const skillCategories = [
{
  title: "Languages",
  skills: ["Python", "SQL", "HTTPS"]
},
{
  title: "ML & AI",
  skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"]
},
{
  title: "Data Tools",
  skills: ["Pandas", "NumPy", "SciPy"]
},
{
  title: "Visualization",
  skills: ["Matplotlib", "Plotly", "Seaborn", "PowerBI"]
},
{
  title: "Deployment",
  skills: ["Git", "Joblib", "Google Drive API"]
}];


const SkillsSection = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>

          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif text-foreground">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) =>
          <motion.div
            key={category.title}
            className="bg-card border border-border rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}>

              <h3 className="font-mono text-sm font-medium mb-5 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) =>
              <motion.span
                key={skill}
                className="inline-block text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "hsl(345 40% 35% / 0.2)" }}>

                    {skill}
                  </motion.span>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default SkillsSection;