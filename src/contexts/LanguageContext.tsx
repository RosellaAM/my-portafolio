import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.about": { en: "About", es: "Sobre Mí" },
  "nav.skills": { en: "Skills", es: "Habilidades" },
  "nav.projects": { en: "Projects", es: "Proyectos" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.language": { en: "Language", es: "Idioma" },

  // Hero
  "hero.role": { en: "DATA SCIENTIST & BI ANALYST", es: "CIENTÍFICA DE DATOS & ANALISTA BI" },
  "hero.description": {
    en: "I build machine learning models, analyze complex datasets, and create data-driven solutions that make an impact. Passionate about uncovering patterns hidden in data.",
    es: "Desarrollo modelos de machine learning, analizo datos complejos y creo soluciones basadas en datos que generan impacto real. Apasionada por descubrir patrones ocultos en la información y convertirlos en oportunidades de negocio.",
  },
  "hero.viewProjects": { en: "View Projects", es: "Ver Proyectos" },

  // About
  "about.subtitle": { en: "Who I Am", es: "Quién Soy" },
  "about.title": { en: "About Me", es: "Sobre Mí" },
  "about.description": {
    en: "I'm a results-driven Data Professional with hands on experience in data science and analytics, from developing end-to-end machine learning pipelines to extracting actionable insights through exploratory analysis and data visualization. I combine technical expertise in Python, SQL, and predictive modeling with a strategic mindset to transform complex data into business solutions. I specialize in building interactive dashboards and telling compelling data stories that bridge the gap between technical findings and strategic decision-making. My goal is to deliver immediate, measurable value by leveraging advanced analytics and data science to drive impact from day one.",
    es: "Soy una profesional de datos orientada a resultados con experiencia práctica en ciencia de datos y analítica. Mi trabajo abarca desde el desarrollo de pipelines completos de machine learning hasta la extracción de insights accionables mediante análisis exploratorio y visualización de datos. Combino conocimientos técnicos en Python, SQL y modelado predictivo con una visión estratégica para transformar datos complejos en soluciones de negocio concretas. Me especializo en crear dashboards interactivos y contar historias con datos que conectan los hallazgos técnicos con la toma de decisiones estratégicas. Mi objetivo es generar valor inmediato y medible desde el primer día, aplicando analítica avanzada y ciencia de datos para impulsar resultados que realmente importan al negocio."

  // Skills
  "skills.subtitle": { en: "Tech Stack", es: "Stack Tecnológico" },
  "skills.title": { en: "Skills & Tools", es: "Habilidades y Herramientas" },
  "skills.languages": { en: "Languages", es: "Lenguajes" },
  "skills.mlai": { en: "ML & AI", es: "ML & IA" },
  "skills.datatools": { en: "Data Tools", es: "Herramientas de Datos" },
  "skills.visualization": { en: "Visualization", es: "Visualización" },
  "skills.deployment": { en: "Deployment", es: "Despliegue" },

  // Projects Section
  "projects.subtitle": { en: "Portfolio", es: "Portafolio" },
  "projects.title": { en: "Featured Projects", es: "Proyectos Destacados" },
  "projects.github": { en: "GitHub", es: "GitHub" },
  "projects.demo": { en: "Live Demo", es: "Demo en Vivo" },

  // MEGALINE PROJECT
  "project.megaline.title": { 
    en: "Megaline Plan Recommendation System", 
    es: "Sistema de Recomendación de Planes Megaline" 
  },
  "project.megaline.description": {
    en: "Classification system that analyzes customer usage patterns to recommend optimal mobile plans, achieving 88% accuracy. Helps customers find the right plan based on their actual behavior.",
    es: "Sistema de clasificación que analiza patrones de uso de clientes para recomendar planes móviles óptimos, alcanzando 88% de precisión. Ayuda a los clientes a encontrar el plan adecuado según su comportamiento real.",
  },
  "project.megaline.result": { 
    en: "88% accuracy on 2,500+ clients", 
    es: "88% precisión en 2,500+ clientes" 
  },

  // BANK CHURN PROJECT
  "project.bank-churn.title": { 
    en: "Customer Churn Prediction - Beta Bank", 
    es: "Predicción de Abandono - Beta Bank" 
  },
  "project.bank-churn.description": {
    en: "Machine learning model predicting customer churn with 87% AUC-ROC. Enables proactive retention strategies and optimized resource allocation.",
    es: "Modelo de machine learning que predice abandono de clientes con 87% AUC-ROC. Permite estrategias proactivas de retención y asignación optimizada de recursos.",
  },
  "project.bank-churn.result": { 
    en: "87% AUC-ROC on 10K+ customers", 
    es: "87% AUC-ROC en 10K+ clientes" 
  },

  // GOLD RECOVERY PROJECT
  "project.gold-recovery.title": { 
    en: "Gold Recovery Prediction Model", 
    es: "Modelo de Predicción de Recuperación de Oro" 
  },
  "project.gold-recovery.description": {
    en: "Industrial ML solution predicting gold recovery rates with 12.82% sMAPE. Optimizes mineral processing through predictive modeling of purification stages.",
    es: "Solución ML industrial que predice tasas de recuperación de oro con 12.82% sMAPE. Optimiza el procesamiento mineral mediante modelado predictivo de etapas de purificación.",
  },
  "project.gold-recovery.result": { 
    en: "12.82% sMAPE on 50K+ mining records", 
    es: "12.82% sMAPE en 50K+ registros mineros" 
  },

  // SENTIMENT ANALYSIS PROJECT
  "project.sentiment.title": { 
    en: "Film Review Sentiment Analysis", 
    es: "Análisis de Sentimientos de Reseñas de Cine" 
  },
  "project.sentiment.description": {
    en: "NLP system detecting negative movie reviews with 0.87 F1-score. Deployed for automated content filtering and community moderation.",
    es: "Sistema NLP que detecta reseñas negativas de películas con 0.87 F1-score. Desplegado para filtrado automático y moderación comunitaria.",
  },
  "project.sentiment.result": { 
    en: "87% F1-score on 50K+ IMDB reviews", 
    es: "87% F1-score en 50K+ reseñas de IMDB" 
  },

  // VEHICLE EXPLORER PROJECT
  "project.vehicle-explorer.title": { 
    en: "Vehicle Data Explorer", 
    es: "Explorador de Datos de Vehículos" 
  },
  "project.vehicle-explorer.description": {
    en: "Interactive web application transforming complex vehicle data into intuitive visualizations. Deployed on Streamlit Cloud with Plotly dashboards.",
    es: "Aplicación web interactiva que transforma datos complejos de vehículos en visualizaciones intuitivas. Desplegado en Streamlit Cloud con dashboards de Plotly.",
  },
  "project.vehicle-explorer.result": { 
    en: "", 
    es: "" 
  },

  // Contact
  "contact.subtitle": { en: "Get In Touch", es: "Contáctame" },
  "contact.title": { en: "Let's Work Together", es: "Trabajemos Juntos" },
  "contact.description": {
    en: "Interested in collaborating on a data science project or have a role that fits? I'd love to hear from you.",
    es: "¿Interesado en colaborar en un proyecto de ciencia de datos o tienes un rol que encaje? Me encantaría saber de ti.",
  },
  "contact.email": { en: "Email", es: "Correo" },
  "contact.resume": { en: "Resume", es: "Currículum" },
  "contact.footer": { en: "Built with passion for data", es: "Construido con pasión por los datos" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
