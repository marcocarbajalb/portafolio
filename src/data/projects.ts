import type { Project } from '../components/sections/CardProyecto';

export const projects: Project[] = [
  {
    index: '01',
    kicker: 'Optimización · Algoritmos',
    title: 'Route-Optimizer',
    problem:
      'Planificar rutas con múltiples paradas a mano es lento y casi nunca llega a la combinación óptima: el número de rutas posibles crece de forma explosiva con cada parada que se agrega.',
    solution:
      'Implementé un algoritmo genético en Python que evoluciona soluciones de ruta generación tras generación. Lo expuse como servicio con Firebase Cloud Functions y lo conecté a la API de Google Maps para distancias y tiempos reales, todo consumido desde un frontend en React + Vite.',
    result:
      'El usuario ingresa sus paradas y, en segundos, obtiene una ruta optimizada dibujada sobre el mapa, lista para seguir.',
    stack: ['React', 'Vite', 'Python', 'Firebase', 'Google Maps API'],
    media: {
      kind: 'placeholder',
      label: 'Demo en video (pendiente)',
      caption: 'Generación de la ruta óptima en tiempo real sobre el mapa.',
    },
  },
  {
    index: '02',
    kicker: 'Modelado · Simulación',
    title: 'Predicción del Mundial FIFA 2026',
    problem:
      'Predecir un torneo como el Mundial es difícil: hay pocos partidos entre selecciones, mucha incertidumbre, y un formato de grupos más eliminatorias que encadena dependencias entre resultados.',
    solution:
      'Modelé la tasa de goles de cada selección con el modelo Dixon-Coles, lo contrasté contra enfoques de machine learning, y corrí una simulación de Monte Carlo del torneo completo miles de veces para estimar las probabilidades de avance y de título.',
    result:
      'El trabajo se consolidó en un artículo con formato de paper, con las probabilidades de cada selección y conclusiones sobre qué enfoque modela mejor este tipo de torneo.',
    stack: ['Python', 'Dixon-Coles', 'Machine Learning', 'Monte Carlo'],
    media: {
      kind: 'placeholder',
      label: 'Mockup del paper (pendiente)',
      caption: 'Distribución de resultados simulados por Monte Carlo.',
    },
  },
  {
    index: '03',
    kicker: 'Aprendizaje no supervisado · Visualización',
    title: 'Clusterización de jugadores de la NBA',
    problem:
      'Más allá de las posiciones tradicionales, los estilos de juego en la NBA no son obvios a simple vista. Buscábamos descubrir agrupaciones naturales a partir de las métricas de rendimiento de los jugadores.',
    solution:
      'Tras un análisis exploratorio y preprocesamiento completo, apliqué un pipeline de aprendizaje no supervisado (k-means y clustering jerárquico) para agrupar a los jugadores, caracterizando y nombrando cada clúster según las métricas que comparten. Las fotos de cada jugador se extrajeron por web scraping.',
    result:
      'Un dashboard interactivo en Power BI que permite explorar el rendimiento de cada jugador y a qué clúster pertenece, volviendo visible una estructura que los números crudos escondían.',
    stack: ['R', 'Python', 'Power BI', 'k-means', 'Clustering jerárquico'],
    media: {
      kind: 'placeholder',
      label: 'Dashboard Power BI (pendiente)',
      caption: 'Dashboard interactivo de clústeres y rendimiento por jugador.',
    },
  },
  {
    index: '04',
    kicker: 'Aprendizaje por refuerzo',
    title: 'Agente autónomo de Galaxian',
    problem:
      'Enseñarle a un agente a jugar Galaxian es un reto: el entorno de Gymnasium entrega observaciones de alta dimensión y recompensas escasas, sin reglas explícitas que seguir.',
    solution:
      'Entrené un agente con aprendizaje por refuerzo sobre el entorno de Galaxian en Gymnasium, dejando que aprendiera una política de juego por prueba y error a partir de la recompensa del propio juego.',
    result:
      'El agente aprendió a jugar de forma efectiva y ganó la competencia del curso frente a los demás agentes.',
    stack: ['Python', 'Reinforcement Learning', 'Gymnasium'],
    media: {
      kind: 'placeholder',
      label: 'Demo en video (pendiente)',
      caption: 'El agente jugando de forma autónoma.',
      aspect: 'aspect-[4/3]',
    },
  },
];