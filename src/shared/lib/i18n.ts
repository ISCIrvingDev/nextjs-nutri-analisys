export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      faqs: "FAQs",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    hero: {
      title: "Analyze Your Meal Nutrition",
      subtitle:
        "Upload a photo of your meal and get instant nutritional analysis powered by AI",
      cta: "Get Started",
    },
    upload: {
      title: "Upload Your Meal Image",
      dropzone: "Drag and drop an image here, or click to select",
      camera: "Take Photo",
      or: "or",
      analyzing: "Analyzing your meal...",
      error: "Error analyzing image",
      invalidFormat: "Please upload a PNG or JPG image",
    },
    results: {
      title: "Nutritional Analysis",
      summary: "Summary",
      foodItems: "Food Items",
      totals: "Total Nutrition",
      negligible: "Garnishes & Condiments",
      healthConsiderations: "Health Considerations",
      downloadExcel: "Download Excel",
      downloadPDF: "Download PDF",
      analyzeAnother: "Analyze Another Meal",
      name: "Name",
      description: "Description",
      quantity: "Quantity",
      calories: "Calories",
      protein: "Protein",
      carbs: "Carbs",
      fat: "Fat",
      fiber: "Fiber",
      micronutrients: "Micronutrients",
      strengths: "Strengths",
      considerations: "Considerations",
    },
    limit: {
      title: "Upload Limit Reached",
      message:
        "You have reached the maximum of 3 free analyses. To continue using our service, please contact us.",
      contact: "Contact Us",
    },
    footer: {
      rights: "© 2025 Nutri Analysis. All rights reserved.",
      developer: "Designed & Developed by",
    },
    about: {
      title: "About Nutri Analysis",
      mission: "Our Mission",
      missionText:
        "Nutri Analysis is an innovative web application that leverages artificial intelligence to provide instant nutritional information from meal photos. Our goal is to make nutrition tracking simple, accurate, and accessible to everyone.",
      developer: "About the Developer",
      developerText:
        "This application was created by a Computer Systems Engineer with over 8 years of experience in software development. With deep expertise in modern web technologies and artificial intelligence integration, the developer specializes in creating innovative solutions that combine cutting-edge AI capabilities with user-friendly interfaces.",
      skills: "Technical Expertise",
      skillsList: [
        "Full-stack web development with modern frameworks",
        "AI/ML integration and implementation",
        "Cloud services and database architecture",
        "API design and development",
        "Computer vision and image processing",
      ],
      contact: "Get in Touch",
      contactText:
        "Interested in similar AI-powered solutions for your business?",
    },
    faqs: {
      title: "Frequently Asked Questions",
      q1: "How does the nutritional analysis work?",
      a1: "Our AI-powered system analyzes your meal photo and identifies individual food items, portions, and ingredients. It then calculates the nutritional content based on a comprehensive food database.",
      q2: "How accurate is the analysis?",
      a2: "The analysis provides approximate nutritional values based on visual recognition. Accuracy depends on image quality and food visibility. For precise measurements, we recommend using standardized portions.",
      q3: "What image formats are supported?",
      a3: "We support JPG and PNG image formats. For best results, use clear, well-lit photos taken from above the meal.",
      q4: "Is my data stored or shared?",
      a4: "We only store minimal usage data to enforce our free tier limits. Your meal images are processed in real-time and not permanently stored on our servers.",
      q5: "How many free analyses do I get?",
      a5: "Each user gets 3 free meal analyses. For unlimited access, please contact us for pricing information.",
      q6: "Can I use this for commercial purposes?",
      a6: "For commercial use or integration into your application, please contact us to discuss licensing options.",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: October 4, 2025",
      intro:
        "This Privacy Policy describes how Nutri Analysis collects, uses, and protects your information when you use our service.",
      section1Title: "1. Information We Collect",
      section1Content:
        "We collect minimal information necessary to provide our service: anonymous usage data (browser fingerprint), upload timestamps, and temporary meal images for analysis purposes only.",
      section2Title: "2. How We Use Your Information",
      section2Content:
        "We use the collected information to: enforce usage limits, improve our AI analysis accuracy, provide nutritional analysis results, and maintain service quality.",
      section3Title: "3. Data Storage and Security",
      section3Content:
        "Meal images are processed in real-time and are not permanently stored. Usage data is stored securely in encrypted databases. We implement industry-standard security measures to protect your information.",
      section4Title: "4. Third-Party Services",
      section4Content:
        "We use third-party services for AI analysis and database hosting. These services are bound by their own privacy policies and security standards.",
      section5Title: "5. Your Rights",
      section5Content:
        "You have the right to request information about the data we store, request deletion of your usage data, and opt-out of our service at any time.",
      section6Title: "6. Changes to This Policy",
      section6Content:
        "We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.",
      section7Title: "7. Contact Us",
      section7Content:
        "If you have questions about this Privacy Policy, please contact us through our website.",
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated: October 4, 2025",
      intro:
        "By using Nutri Analysis, you agree to these Terms of Service. Please read them carefully.",
      section1Title: "1. Acceptance of Terms",
      section1Content:
        "By accessing and using Nutri Analysis, you accept and agree to be bound by these Terms of Service and our Privacy Policy.",
      section2Title: "2. Service Description",
      section2Content:
        "Nutri Analysis provides AI-powered nutritional analysis based on meal photos. Results are estimates and should not replace professional dietary advice.",
      section3Title: "3. Usage Limitations",
      section3Content:
        "Free users are limited to 3 meal analyses. Abuse of the service or attempts to circumvent limitations may result in access termination.",
      section4Title: "4. Accuracy Disclaimer",
      section4Content:
        "Nutritional analyses are approximations. We do not guarantee accuracy and are not liable for decisions made based on our analysis. Consult healthcare professionals for dietary advice.",
      section5Title: "5. Intellectual Property",
      section5Content:
        "All content, features, and functionality are owned by Nutri Analysis and protected by copyright and other intellectual property laws.",
      section6Title: "6. User Conduct",
      section6Content:
        "You agree not to: upload inappropriate content, attempt to reverse engineer our service, use the service for illegal purposes, or violate any applicable laws.",
      section7Title: "7. Limitation of Liability",
      section7Content:
        'Nutri Analysis is provided "as is" without warranties. We are not liable for any damages arising from use of our service.',
      section8Title: "8. Changes to Terms",
      section8Content:
        "We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance of new terms.",
      section9Title: "9. Contact",
      section9Content:
        "For questions about these Terms, contact us through our website.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      faqs: "Preguntas Frecuentes",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },
    hero: {
      title: "Analiza la Nutrición de tu Comida",
      subtitle:
        "Sube una foto de tu comida y obtén análisis nutricional instantáneo con IA",
      cta: "Comenzar",
    },
    upload: {
      title: "Sube la Imagen de tu Comida",
      dropzone:
        "Arrastra y suelta una imagen aquí, o haz clic para seleccionar",
      camera: "Tomar Foto",
      or: "o",
      analyzing: "Analizando tu comida...",
      error: "Error al analizar la imagen",
      invalidFormat: "Por favor sube una imagen PNG o JPG",
    },
    results: {
      title: "Análisis Nutricional",
      summary: "Resumen",
      foodItems: "Alimentos",
      totals: "Nutrición Total",
      negligible: "Guarniciones y Condimentos",
      healthConsiderations: "Consideraciones de Salud",
      downloadExcel: "Descargar Excel",
      downloadPDF: "Descargar PDF",
      analyzeAnother: "Analizar Otra Comida",
      name: "Nombre",
      description: "Descripción",
      quantity: "Cantidad",
      calories: "Calorías",
      protein: "Proteína",
      carbs: "Carbohidratos",
      fat: "Grasa",
      fiber: "Fibra",
      micronutrients: "Micronutrientes",
      strengths: "Fortalezas",
      considerations: "Consideraciones",
    },
    limit: {
      title: "Límite de Subidas Alcanzado",
      message:
        "Has alcanzado el máximo de 3 análisis gratuitos. Para continuar usando nuestro servicio, por favor contáctanos.",
      contact: "Contáctanos",
    },
    footer: {
      rights: "© 2025 Nutri Analysis. Todos los derechos reservados.",
      developer: "Diseñado y Desarrollado por",
    },
    about: {
      title: "Acerca de Nutri Analysis",
      mission: "Nuestra Misión",
      missionText:
        "Nutri Analysis es una aplicación web innovadora que aprovecha la inteligencia artificial para proporcionar información nutricional instantánea a partir de fotos de comidas. Nuestro objetivo es hacer que el seguimiento nutricional sea simple, preciso y accesible para todos.",
      developer: "Acerca del Desarrollador",
      developerText:
        "Esta aplicación fue creada por un Ingeniero en Sistemas Computacionales con más de 8 años de experiencia en desarrollo de software. Con profunda experiencia en tecnologías web modernas e integración de inteligencia artificial, el desarrollador se especializa en crear soluciones innovadoras que combinan capacidades de IA de vanguardia con interfaces fáciles de usar.",
      skills: "Experiencia Técnica",
      skillsList: [
        "Desarrollo web full-stack con frameworks modernos",
        "Integración e implementación de IA/ML",
        "Servicios en la nube y arquitectura de bases de datos",
        "Diseño y desarrollo de APIs",
        "Visión por computadora y procesamiento de imágenes",
      ],
      contact: "Contáctanos",
      contactText:
        "¿Interesado en soluciones similares con IA para tu negocio?",
    },
    faqs: {
      title: "Preguntas Frecuentes",
      q1: "¿Cómo funciona el análisis nutricional?",
      a1: "Nuestro sistema impulsado por IA analiza la foto de tu comida e identifica alimentos individuales, porciones e ingredientes. Luego calcula el contenido nutricional basado en una base de datos completa de alimentos.",
      q2: "¿Qué tan preciso es el análisis?",
      a2: "El análisis proporciona valores nutricionales aproximados basados en reconocimiento visual. La precisión depende de la calidad de la imagen y la visibilidad de los alimentos. Para mediciones precisas, recomendamos usar porciones estandarizadas.",
      q3: "¿Qué formatos de imagen son compatibles?",
      a3: "Soportamos formatos de imagen JPG y PNG. Para mejores resultados, usa fotos claras y bien iluminadas tomadas desde arriba de la comida.",
      q4: "¿Se almacenan o comparten mis datos?",
      a4: "Solo almacenamos datos mínimos de uso para aplicar los límites de nuestro nivel gratuito. Tus imágenes de comida se procesan en tiempo real y no se almacenan permanentemente en nuestros servidores.",
      q5: "¿Cuántos análisis gratuitos obtengo?",
      a5: "Cada usuario obtiene 3 análisis de comida gratuitos. Para acceso ilimitado, contáctanos para información de precios.",
      q6: "¿Puedo usar esto con fines comerciales?",
      a6: "Para uso comercial o integración en tu aplicación, contáctanos para discutir opciones de licencia.",
    },
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 4 de octubre de 2025",
      intro:
        "Esta Política de Privacidad describe cómo Nutri Analysis recopila, usa y protege tu información cuando usas nuestro servicio.",
      section1Title: "1. Información que Recopilamos",
      section1Content:
        "Recopilamos información mínima necesaria para proporcionar nuestro servicio: datos de uso anónimos (huella digital del navegador), marcas de tiempo de subida e imágenes temporales de comidas solo para fines de análisis.",
      section2Title: "2. Cómo Usamos tu Información",
      section2Content:
        "Usamos la información recopilada para: aplicar límites de uso, mejorar la precisión de nuestro análisis de IA, proporcionar resultados de análisis nutricional y mantener la calidad del servicio.",
      section3Title: "3. Almacenamiento y Seguridad de Datos",
      section3Content:
        "Las imágenes de comida se procesan en tiempo real y no se almacenan permanentemente. Los datos de uso se almacenan de forma segura en bases de datos encriptadas. Implementamos medidas de seguridad estándar de la industria para proteger tu información.",
      section4Title: "4. Servicios de Terceros",
      section4Content:
        "Usamos servicios de terceros para análisis de IA y alojamiento de bases de datos. Estos servicios están sujetos a sus propias políticas de privacidad y estándares de seguridad.",
      section5Title: "5. Tus Derechos",
      section5Content:
        "Tienes derecho a solicitar información sobre los datos que almacenamos, solicitar la eliminación de tus datos de uso y optar por no usar nuestro servicio en cualquier momento.",
      section6Title: "6. Cambios a esta Política",
      section6Content:
        "Podemos actualizar esta Política de Privacidad periódicamente. Los cambios se publicarán en esta página con una fecha de revisión actualizada.",
      section7Title: "7. Contáctanos",
      section7Content:
        "Si tienes preguntas sobre esta Política de Privacidad, contáctanos a través de nuestro sitio web.",
    },
    terms: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: 4 de octubre de 2025",
      intro:
        "Al usar Nutri Analysis, aceptas estos Términos de Servicio. Por favor léelos cuidadosamente.",
      section1Title: "1. Aceptación de Términos",
      section1Content:
        "Al acceder y usar Nutri Analysis, aceptas y te comprometes a cumplir con estos Términos de Servicio y nuestra Política de Privacidad.",
      section2Title: "2. Descripción del Servicio",
      section2Content:
        "Nutri Analysis proporciona análisis nutricional impulsado por IA basado en fotos de comidas. Los resultados son estimaciones y no deben reemplazar el consejo dietético profesional.",
      section3Title: "3. Limitaciones de Uso",
      section3Content:
        "Los usuarios gratuitos están limitados a 3 análisis de comidas. El abuso del servicio o intentos de eludir las limitaciones pueden resultar en la terminación del acceso.",
      section4Title: "4. Descargo de Responsabilidad de Precisión",
      section4Content:
        "Los análisis nutricionales son aproximaciones. No garantizamos la precisión y no somos responsables de las decisiones tomadas basadas en nuestro análisis. Consulta a profesionales de la salud para asesoramiento dietético.",
      section5Title: "5. Propiedad Intelectual",
      section5Content:
        "Todo el contenido, características y funcionalidad son propiedad de Nutri Analysis y están protegidos por derechos de autor y otras leyes de propiedad intelectual.",
      section6Title: "6. Conducta del Usuario",
      section6Content:
        "Aceptas no: subir contenido inapropiado, intentar aplicar ingeniería inversa a nuestro servicio, usar el servicio para fines ilegales o violar cualquier ley aplicable.",
      section7Title: "7. Limitación de Responsabilidad",
      section7Content:
        'Nutri Analysis se proporciona "tal cual" sin garantías. No somos responsables de ningún daño que surja del uso de nuestro servicio.',
      section8Title: "8. Cambios a los Términos",
      section8Content:
        "Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado después de los cambios constituye la aceptación de los nuevos términos.",
      section9Title: "9. Contacto",
      section9Content:
        "Para preguntas sobre estos Términos, contáctanos a través de nuestro sitio web.",
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang];
}
