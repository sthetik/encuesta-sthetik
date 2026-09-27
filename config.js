// Reemplaza con los datos de tu proyecto: Supabase → Project Settings → API
window.STHETIK_CONFIG = {
  SUPABASE_URL: "https://yvvimzudloazuabkfllv.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_ztehHruXyy6azgNDDiyu7g_7GLoRLN3"
};

// Preguntas. "score" va de 1 (peor) a 5 (mejor) para el dashboard.
window.STHETIK_QUESTIONS = [
  {
    key: "atencion",
    title: "¿Cómo calificarías la atención recibida por parte del personal de Sthetik?",
    options: [
      { label: "Excelente", score: 5 },
      { label: "Buena", score: 4 },
      { label: "Regular", score: 2.5 },
      { label: "Mala", score: 1 }
    ]
  },
  {
    key: "resultados",
    title: "¿Qué tan satisfecho(a) estás con los resultados del tratamiento recibido?",
    options: [
      { label: "Muy satisfecho(a)", score: 5 },
      { label: "Satisfecho(a)", score: 4 },
      { label: "Poco satisfecho(a)", score: 2.5 },
      { label: "Nada satisfecho(a)", score: 1 }
    ]
  },
  {
    key: "ambiente",
    title: "¿El ambiente del centro (higiene, comodidad, estética) cumplió con tus expectativas?",
    options: [
      { label: "Superó mis expectativas", score: 5 },
      { label: "Cumplió con mis expectativas", score: 4 },
      { label: "No cumplió con mis expectativas", score: 1 }
    ]
  },
  {
    key: "volveria",
    title: "¿Volverías a realizarte otro tratamiento en Sthetik?",
    options: [
      { label: "Sí, sin dudarlo", score: 5 },
      { label: "Tal vez", score: 3 },
      { label: "No", score: 1 }
    ]
  },
  {
    key: "recomendaria",
    title: "¿Recomendarías Sthetik a tus familiares o amigos?",
    options: [
      { label: "Sí", score: 5 },
      { label: "No", score: 1 }
    ]
  },
  {
    key: "comentario",
    title: "¿Hay algo que quisieras destacar o sugerir para mejorar tu experiencia?",
    type: "text",
    optional: true
  }
];
