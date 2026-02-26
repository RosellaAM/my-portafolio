import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap } from "lucide-react";

const highlights = [
{
  icon: Briefcase,
  title: "Experience",
  text: "3+ years working with data-driven teams to build ML solutions and analytics pipelines."
},
{
  icon: GraduationCap,
  title: "Education",
  text: "M.S. in Data Science with a focus on statistical modeling and machine learning."
},
{
  icon: BookOpen,
  title: "Research",
  text: "Published work in predictive analytics and natural language processing applications."
}];


const AboutSection = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>

          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Who I Am
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#510b0b] font-serif">
            About Me
          </h2>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}>I'm a data scientist passionate about transforming raw data into actionable insights. With a strong foundation in statistics and machine learning, I enjoy tackling complex problems and delivering solutions that drive real business value. When I'm not building models, you'll find me exploring new datasets or contributing to open-source projects.







        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) =>
          <motion.div
            key={item.title}
            className="bg-card border border-border rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}>

              <item.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold mb-2 font-serif text-secondary-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutSection;