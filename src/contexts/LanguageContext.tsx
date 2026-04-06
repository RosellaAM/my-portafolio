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

  // Hero - Clear, impactful, non-technical
  "hero.role": { en: "DATA SCIENTIST & ANALYTICS PROFESSIONAL", es: "CIENTÍFICA DE DATOS & ANALISTA" },
  "hero.description": {
    en: "I turn complex data into clear business solutions. Using machine learning and analytics, I help companies understand their customers, optimize operations, and make smarter decisions.",
    es: "Convierto datos complejos en soluciones claras para el negocio. Uso machine learning y analítica para ayudar a empresas a entender sus clientes, optimizar operaciones y tomar mejores decisiones.",
  },
  "hero.viewProjects": { en: "View My Work", es: "Ver Mi Trabajo" },

  // About - Professional but accessible
  "about.subtitle": { en: "Who I Am", es: "Quién Soy" },
  "about.title": { en: "About Me", es: "Sobre Mí" },
  "about.description": {
    en: "I'm a data professional who bridges the gap between technical analysis and business strategy. I help organizations make sense of their data—whether that's predicting customer behavior, improving operational efficiency, or uncovering new opportunities.\n\nMy approach combines strong technical skills (Python, SQL, machine learning) with a focus on real-world results. I don't just build models; I build solutions that answer specific business questions and drive measurable impact.\n\nI specialize in making data understandable and actionable for everyone, from technical teams to executive leadership.",
    es: "Soy una profesional de datos que conecta el análisis técnico con la estrategia de negocio. Ayudo a las organizaciones a dar sentido a sus datos—ya sea prediciendo el comportamiento de clientes, mejorando la eficiencia operativa, o descubriendo nuevas oportunidades.\n\nMi enfoque combina sólidas habilidades técnicas (Python, SQL, machine learning) con un enfoque en resultados del mundo real. No solo construyo modelos; construyo soluciones que responden preguntas específicas del negocio y generan impacto medible.\n\nMe especializo en hacer que los datos sean comprensibles y accionables para todos, desde equipos técnicos hasta liderazgo ejecutivo.",
  },

  // Skills
  "skills.subtitle": { en: "What I Bring", es: "Lo Que Ofrezco" },
  "skills.title": { en: "Skills & Expertise", es: "Habilidades y Experiencia" },
  "skills.languages": { en: "Programming", es: "Programación" },
  "skills.mlai": { en: "Machine Learning", es: "Machine Learning" },
  "skills.datatools": { en: "Data Processing", es: "Procesamiento de Datos" },
  "skills.visualization": { en: "Visualization", es: "Visualización" },
  "skills.deployment": { en: "Deployment", es: "Despliegue" },

  // Projects Section
  "projects.subtitle": { en: "My Work", es: "Mi Trabajo" },
  "projects.title": { en: "Featured Projects", es: "Proyectos Destacados" },
  "projects.github": { en: "View Code", es: "Ver Código" },
  "projects.demo": { en: "Live Demo", es: "Demo en Vivo" },

  // MEGALINE PROJECT - Story format with line breaks
  "project.megaline.title": { 
    en: "Mobile Plan Recommendation System", 
    es: "Sistema de Recomendación de Planes Móviles" 
  },
  "project.megaline.description": {
    en: "The Challenge: A telecom company wanted to help customers find the right mobile plan. Many were overpaying or under-using their plans, leading to dissatisfaction.\n\nWhat I Did: I built a machine learning system that analyzes customer usage patterns (calls, data, texts) and recommends the optimal plan for their needs.\n\nThe Result: 88% accuracy in matching customers to the right plan, helping 2,500+ clients get better value while improving customer satisfaction.",
    es: "El Desafío: Una empresa de telecomunicaciones quería ayudar a sus clientes a encontrar el plan móvil adecuado. Muchos estaban pagando de más o usando menos de lo que pagaban, generando insatisfacción.\n\nMi Solución: Construí un sistema de machine learning que analiza patrones de uso (llamadas, datos, mensajes) y recomienda el plan óptimo para cada cliente.\n\nEl Resultado: 88% de precisión recomendando el plan correcto, ayudando a más de 2,500 clientes a obtener mejor valor y aumentando la satisfacción.",
  },
  "project.megaline.result": { 
    en: "88% accuracy • 2,500+ clients helped", 
    es: "88% precisión • 2,500+ clientes ayudados" 
  },

  // FASHION RETAIL ANALYTICS PROJECT - Story format with line breaks
  "project.fashion-retail.title": {
    en: "Global Retail Analytics Dashboard",
    es: "Dashboard de Analítica de Retail Global"
  },
  "project.fashion-retail.description": {
    en: "The Challenge: A multinational fashion retailer with 35 stores across 7 countries needed to understand 4+ million transactions. Executives couldn't quickly answer: Which countries are growing? What products sell best? Who are their most valuable customers?\n\nWhat I Did: I built an interactive Power BI dashboard that transforms raw transaction data into actionable business intelligence. The dashboard features executive KPIs, customer segmentation, and product performance analysis with dynamic filtering.\n\nThe Result: 79.8% repeat purchase rate identified, $1.56B in analyzed revenue, and clear insights showing that 25-34 year olds drive 40% of revenue—enabling targeted marketing campaigns and regional inventory optimization.",
    es: "El Desafío: Una empresa multinacional de moda con 35 tiendas en 7 países necesitaba entender más de 4 millones de transacciones. Los ejecutivos no podían responder rápidamente: ¿Qué países están creciendo? ¿Qué productos venden mejor? ¿Quiénes son sus clientes más valiosos?\n\nMi Solución: Construí un dashboard interactivo en Power BI que transforma datos de transacciones en inteligencia de negocio accionable. El dashboard incluye KPIs ejecutivos, segmentación de clientes y análisis de rendimiento de productos con filtros dinámicos.\n\nEl Resultado: 79.8% de tasa de recompra identificada, $1.56B en ingresos analizados, e insights claros que muestran que los jóvenes de 25-34 años generan el 40% de los ingresos—permitiendo campañas de marketing dirigidas y optimización de inventario regional."
  },
  "project.fashion-retail.result": {
    en: "Power BI • 1.56B revenue • 7 countries",
    es: "Power BI • $1.56B ingresos • 7 países"
  },

  // BANK CHURN PROJECT - Story format with line breaks
  "project.bank-churn.title": { 
    en: "Customer Retention Analytics", 
    es: "Analítica de Retención de Clientes" 
  },
  "project.bank-churn.description": {
    en: "The Challenge: A bank was losing customers month after month without understanding why. They needed to identify at-risk clients before they left.\n\nWhat I Did: I developed a predictive model that analyzes customer behavior patterns to flag those likely to leave, giving the retention team time to act.\n\nThe Result: 87% accuracy in predicting churn across 10,000+ customers, enabling targeted retention efforts and helping keep valuable clients.",
    es: "El Desafío: Un banco estaba perdiendo clientes mes tras mes sin entender por qué. Necesitaban identificar clientes en riesgo antes de que se fueran.\n\nMi Solución: Desarrollé un modelo predictivo que analiza patrones de comportamiento para señalar clientes propensos a irse, dando tiempo al equipo de retención para actuar.\n\nEl Resultado: 87% de precisión prediciendo abandono en más de 10,000 clientes, permitiendo esfuerzos de retención específicos y ayudando a mantener clientes valiosos.",
  },
  "project.bank-churn.result": { 
    en: "87% accuracy • 10,000+ customers analyzed", 
    es: "87% precisión • 10,000+ clientes analizados" 
  },

  // GOLD RECOVERY PROJECT - Story format with line breaks
  "project.gold-recovery.title": { 
    en: "Mining Process Optimization", 
    es: "Optimización de Procesos Mineros" 
  },
  "project.gold-recovery.description": {
    en: "The Challenge: A mining company wanted to maximize gold extraction while reducing energy costs. They needed to predict recovery rates at each stage of purification.\n\nWhat I Did: I built a machine learning model that analyzes operational data to predict gold recovery throughout the purification process, identifying opportunities for improvement.\n\nThe Result: 12.82% error rate across 50,000+ mining records, helping optimize energy use and increase gold yield—saving costs while improving production.",
    es: "El Desafío: Una empresa minera quería maximizar la extracción de oro reduciendo costos de energía. Necesitaban predecir tasas de recuperación en cada etapa de purificación.\n\nMi Solución: Construí un modelo de machine learning que analiza datos operacionales para predecir la recuperación de oro durante el proceso de purificación, identificando oportunidades de mejora.\n\nEl Resultado: 12.82% de error en más de 50,000 registros mineros, ayudando a optimizar uso de energía y aumentar rendimiento—ahorrando costos mientras mejoraba producción.",
  },
  "project.gold-recovery.result": { 
    en: "12.82% error rate • 50,000+ records", 
    es: "12.82% tasa de error • 50,000+ registros" 
  },

  // SENTIMENT ANALYSIS PROJECT - Story format with line breaks
  "project.sentiment.title": { 
    en: "Movie Review Analysis", 
    es: "Análisis de Reseñas de Cine" 
  },
  "project.sentiment.description": {
    en: "The Challenge: A film community needed to automatically identify negative reviews to help moderate discussions and understand audience sentiment.\n\nWhat I Did: I created an NLP system that reads movie reviews and determines if they're positive or negative, learning from thousands of examples.\n\nThe Result: 87% accuracy in detecting negative reviews across 50,000+ IMDB reviews, enabling automated content filtering and deeper insights into audience opinions.",
    es: "El Desafío: Una comunidad de cine necesitaba identificar automáticamente reseñas negativas para moderar discusiones y entender el sentimiento de la audiencia.\n\nMi Solución: Creé un sistema NLP que lee reseñas de películas y determina si son positivas o negativas, aprendiendo de miles de ejemplos.\n\nEl Resultado: 87% de precisión detectando reseñas negativas en más de 50,000 reseñas de IMDB, permitiendo filtrado automático y mejores insights sobre opiniones de la audiencia.",
  },
  "project.sentiment.result": { 
    en: "87% accuracy • 50,000+ reviews analyzed", 
    es: "87% precisión • 50,000+ reseñas analizadas" 
  },

  // VEHICLE EXPLORER PROJECT - Story format with line breaks
  "project.vehicle-explorer.title": { 
    en: "Vehicle Data Visualization Tool", 
    es: "Visualizador de Datos de Vehículos" 
  },
  "project.vehicle-explorer.description": {
    en: "The Challenge: Complex vehicle data is hard to explore and understand without technical skills. Dealers and analysts needed an easy way to spot trends and patterns.\n\nWhat I Did: I built an interactive web app that lets anyone explore vehicle data through intuitive charts and filters—no coding required.\n\nThe Result: A live dashboard where users can filter, sort, and visualize vehicle data instantly, making data exploration accessible to everyone.",
    es: "El Desafío: Los datos complejos de vehículos son difíciles de explorar sin habilidades técnicas. Concesionarios y analistas necesitaban una forma fácil de ver tendencias y patrones.\n\nMi Solución: Construí una aplicación web interactiva que permite a cualquiera explorar datos de vehículos a través de gráficos intuitivos y filtros—sin necesidad de programar.\n\nEl Resultado: Un dashboard en vivo donde los usuarios pueden filtrar, ordenar y visualizar datos de vehículos al instante, haciendo la exploración de datos accesible para todos.",
  },
  "project.vehicle-explorer.result": { 
    en: "Live demo • Interactive dashboards", 
    es: "Demo en vivo • Dashboards interactivos" 
  },

  // Contact - Friendly and approachable
  "contact.subtitle": { en: "Let's Connect", es: "Conectemos" },
  "contact.title": { en: "Interested in Working Together?", es: "¿Interesado en Trabajar Juntos?" },
  "contact.description": {
    en: "Whether you have a specific role in mind, a project idea, or just want to chat about data—I'd love to hear from you.",
    es: "Ya sea que tengas un rol específico en mente, una idea de proyecto, o solo quieras conversar sobre datos—me encantaría saber de ti.",
  },
  "contact.email": { en: "Email Me", es: "Enviar Correo" },
  "contact.resume": { en: "View Resume", es: "Ver Currículum" },
  "contact.footer": { en: "Built with curiosity and care", es: "Construido con curiosidad y dedicación" },
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
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};