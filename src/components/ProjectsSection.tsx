import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: "megaline",
    tags: ["Python", "Scikit-learn", "Random Forest", "Streamlit", "Joblib"],
    image: "/projects/megaline.png",
    github: "https://github.com/RosellaAM/Megaline-Plan-Recommendation-System",
    demo: "https://megaline-plans.streamlit.app/",
  },
  {
    id: "bank-churn",
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
    image: "/projects/bank-churn.png",
    github: "https://github.com/RosellaAM/Beta-Bank-Churn-Prediction",
    demo: "#",
  },
  {
    id: "gold-recovery",
    tags: ["Python", "Random Forest", "Pandas", "NumPy", "Seaborn"],
    image: "/projects/gold-recovery.png",
    github: "https://github.com/RosellaAM/Gold-Recovery-Prediction-Model",
    demo: "#",
  },
  {
    id: "sentiment",
    tags: ["Python", "NLTK", "Scikit-learn", "TF-IDF", "XGBoost"],
    image: "/projects/sentiment.png",
    github: "https://github.com/RosellaAM/Movie-Review-Sentiment-Analysis",
    demo: "https://notebook-display--rosellaastrain.replit.app/",
  },
  {
    id: "vehicle-explorer",
    tags: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy"],
    image: "/projects/vehicle-explorer.png",
    github: "https://github.com/RosellaAM/Vehicle-Data-Explorer",
    demo: "https://vehicle-data-explorer.streamlit.app/",
  }
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
              {t("projects.subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
              {t("projects.title")}
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll("left")} 
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors bg-card" 
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")} 
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors bg-card" 
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div 
          ref={scrollRef} 
          onScroll={handleScroll} 
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" 
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => {
            const resultText = t(`project.${project.id}.result`);
            const hasDemo = project.demo !== "#";
            
            return (
              <motion.div 
                key={project.id} 
                className="snap-start shrink-0 w-[85vw] md:w-[450px]" 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TiltCard 
                  className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300" 
                  intensity={6}
                >
                  <div className="aspect-video bg-muted overflow-hidden relative group">
                    <img 
                      src={project.image} 
                      alt={t(`project.${project.id}.title`)} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    
                    {/* Only show result bubble if project.result exists */}
                    {resultText && (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono font-medium border-primary shadow-none border text-primary bg-secondary/90 backdrop-blur-sm">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {resultText}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-secondary-foreground hover:text-primary transition-colors">
                        {t(`project.${project.id}.title`)}
                      </h3>
                    </div>
                    
                    {/* Project description with line breaks */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">
                      {t(`project.${project.id}.description`)}
                    </p>
                    
                    {/* IMPACT SECTION REMOVED */}
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-secondary text-primary border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Conditional button rendering */}
                    <div className="flex gap-2 mt-auto">
                      {hasDemo ? (
                        <>
                          <Button asChild variant="default" size="sm" className="flex-1">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-1" />
                              {t("projects.github")}
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="sm" className="flex-1">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              {t("projects.demo")}
                            </a>
                          </Button>
                        </>
                      ) : (
                        <Button asChild variant="default" size="sm" className="w-full">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            {t("projects.github")}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
              }`}
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