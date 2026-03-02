import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/contexts/LanguageContext";

const projectKeys = [
  { key: "1", tags: ["Python", "XGBoost", "Pandas", "Scikit-learn"], image: "/placeholder.svg", github: "#", demo: "#" },
  { key: "2", tags: ["PyTorch", "Transformers", "FastAPI", "Docker"], image: "/placeholder.svg", github: "#", demo: "#" },
  { key: "3", tags: ["Python", "Prophet", "Plotly", "SQL"], image: "/placeholder.svg", github: "#", demo: "#" },
  { key: "4", tags: ["TensorFlow", "Keras", "OpenCV", "AWS"], image: "/placeholder.svg", github: "#", demo: "#" },
  { key: "5", tags: ["Python", "Keras", "Pandas", "SQL"], image: "/placeholder.svg", github: "#", demo: "#" },
  { key: "6", tags: ["Python", "Scikit-learn", "NumPy", "FastAPI"], image: "/placeholder.svg", github: "#", demo: "#" },
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth ?? 400;
    const gap = 24;
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = (scrollRef.current.children[0]?.clientWidth ?? 400) + 24;
    const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{t("projects.subtitle")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">{t("projects.title")}</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll("left")} className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors bg-card" aria-label="Previous project"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={() => scroll("right")} className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors bg-card" aria-label="Next project"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </motion.div>

        <div ref={scrollRef} onScroll={handleScroll} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {projectKeys.map((project, i) => (
            <motion.div key={project.key} className="snap-start shrink-0 w-[85vw] md:w-[420px]" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <TiltCard className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300" intensity={6}>
                <div className="aspect-video bg-muted overflow-hidden relative">
                  <img src={project.image} alt={t(`project.${project.key}.title`)} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono font-medium border-primary shadow-none border text-primary bg-secondary">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {t(`project.${project.key}.result`)}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-secondary-foreground hover:text-primary transition-colors cursor-pointer">{t(`project.${project.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{t(`project.${project.key}.description`)}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-secondary text-primary border border-border">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4" />{t("projects.github")}</a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4" />{t("projects.demo")}</a>
                    </Button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {projectKeys.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"}`}
              onClick={() => {
                if (!scrollRef.current) return;
                const cardWidth = (scrollRef.current.children[0]?.clientWidth ?? 400) + 24;
                scrollRef.current.scrollTo({ left: cardWidth * i, behavior: "smooth" });
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
