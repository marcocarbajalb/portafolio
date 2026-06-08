import type { Project } from '../components/sections/CardProyecto';
import type { SecondaryProject } from '../components/sections/CardSecundario';
import routeOptimizerDemo from '../assets/route-optimizer-demo.webm';
import mundialPaper from '../assets/mundial-2026-portada-paper.webp';
import nbaDashboard from '../assets/nba-dashboard-demo.webm';
import galaxianDemo from '../assets/galaxian-demo.webm';
import trackerImg from '../assets/series-tracker.webp';
import restauranteConsola from '../assets/restaurante-consola.webp';

export const projects: Project[] = [
  {
    index: '01',
    kicker: 'Algoritmos genéticos · Full Stack',
    title: 'Route Optimizer',
    problem:
      'Visitar varios destinos en el orden equivocado desperdicia tiempo y combustible, y la cantidad de órdenes posibles crece tan rápido que encontrar la ruta más corta por fuerza bruta se vuelve inviable pasados unos pocos puntos.',
    solution:
      'Implementé un algoritmo genético (selección por torneo, Order Crossover OX1, mutación por intercambio y elitismo) sobre una Cloud Function serverless en Python con Firebase. El backend construye una matriz de distancias viales reales con la Distance Matrix API de Google Maps (no líneas rectas), y el frontend en React + Vite dibuja el orden óptimo sobre un mapa interactivo.',
    result:
      'El usuario obtiene un orden de visita casi óptimo con su distancia total en kilómetros para hasta 15 destinos, calculado evolucionando 500 generaciones de rutas candidatas sobre distancias viales reales en lugar de aproximaciones en línea recta.',
    stack: ['React', 'Vite', 'Python', 'Firebase', 'Google Maps API', 'Algoritmos genéticos'],
    media: {
      kind: 'video',
      src: routeOptimizerDemo,
      aspect: 'aspect-[16/9]',
      alt: 'Pantalla de Route Optimizer con un panel de destinos a la izquierda y un mapa con pines numerados conectados por una línea de ruta azul.',
      caption: 'La interfaz genera y traza la ruta óptima entre los destinos con pines numerados sobre el mapa.',
    },
    repoUrl: 'https://github.com/marcocarbajalb/route-optimizer',
  },
  {
    index: '02',
    kicker: 'Modelado estadístico · Simulación Monte Carlo',
    title: 'Predicción del Mundial FIFA 2026',
    problem:
      'Predecir un torneo de fútbol es difícil (hay azar en cada partido y el formato de 48 selecciones del Mundial 2026 no tiene precedente histórico), y queda abierta una duda real: ¿el machine learning moderno supera de verdad a los modelos estadísticos clásicos?',
    solution:
      'Construí una base de 23 086 partidos internacionales y extendí el ranking FIFA hasta 2026 con un ETL propio sobre la API interna de la FIFA. Comparé cuatro modelos bajo validación temporal: un baseline, Poisson, Dixon-Coles y XGBoost; y luego simulé el torneo 20 000 veces con Monte Carlo usando el mejor de ellos.',
    result:
      'Contra lo esperado, el modelo estadístico Dixon-Coles (1997) ganó con el menor log-loss (0.975) y XGBoost ni siquiera superó al baseline. La simulación corona a Argentina favorita al título con 16.9 %, sobre España y Brasil.',
    stack: ['Python', 'Dixon-Coles', 'XGBoost', 'Monte Carlo', 'Elo'],
    media: {
      kind: 'image',
      src: mundialPaper,
      fit: 'contain',
      aspect: 'aspect-[210/297]',
      alt: 'Portada del paper del proyecto: el escudo de la Universidad del Valle de Guatemala, el título "Predicción de resultados del Mundial FIFA 2026" con su subtítulo sobre modelos estadísticos y simulación de Monte Carlo, el nombre del autor y el emblema del Mundial FIFA 2026.',
      caption: 'El estudio completo, presentado como paper académico (mayo de 2026).',
    },
    repoUrl: 'https://github.com/marcocarbajalb/proyecto_final_MCI',
  },
  {
    index: '03',
    kicker: 'Aprendizaje no supervisado · Visualización',
    title: 'Clusterización de jugadores de la NBA',
    problem:
      'Las estadísticas crudas de un jugador (puntos, rebotes, asistencias, minutos) no dicen por sí solas qué tipo de jugador es; dos perfiles muy distintos pueden esconderse detrás de promedios parecidos, y mirar columna por columna no revela los arquetipos que comparten.',
    solution:
      'Tomé 50 jugadores de la NBA, hice un EDA y preprocesamiento completo en R, y construí un pipeline de clusterización comparando k-means y agrupamiento jerárquico. Elegí k-means con 6 grupos validando la decisión con el método del codo y el coeficiente de silueta, y enriquecí el dataset con web scraping en Python para traer las fotos de cada jugador vía la API de la NBA.',
    result:
      'El modelo separó a los 50 jugadores en 6 arquetipos interpretables y nombrados (de "Alpha del juego" a "Rookie invisible") visualizados en un dashboard interactivo de Power BI que cruza rendimiento, edad y clúster por jugador.',
    stack: ['R', 'Python', 'Power BI', 'k-means', 'Clustering jerárquico'],
    media: {
      kind: 'video',
      src: nbaDashboard,
      aspect: 'aspect-[16/9]',
      alt: 'Dashboard interactivo de Power BI con fotos de jugadores de la NBA organizados por clúster y gráficos de puntos, rebotes y asistencias por grupo.',
      caption: 'Dashboard de Power BI que agrupa a los jugadores de la NBA en seis arquetipos según su perfil de rendimiento.',
    },
    repoUrl: 'https://github.com/marcocarbajalb/Proyecto_Clustering_UL',
  },
  {
    index: '04',
    kicker: 'Aprendizaje por refuerzo · Deep Learning',
    title: 'Agente autónomo para Galaxian',
    problem:
      'Enseñarle a una máquina a jugar Galaxian desde cero es difícil: solo ve los píxeles de la pantalla y su puntaje, sin reglas ni instrucciones. Debe descubrir cómo ganar únicamente por ensayo y error.',
    solution:
      'Implementé y comparé dos algoritmos de aprendizaje por refuerzo en Python y PyTorch: Deep Q-Network (DQN) y Advantage Actor-Critic (A2C), usando Gymnasium como entorno. Tras confirmar que DQN era superior, entrené una red convolucional que aprende directamente de los píxeles del juego y probé cuatro variantes de arquitectura para optimizarla.',
    result:
      'El agente aprendió a jugar de forma autónoma y ganó la competencia del curso con 9,230 puntos, partiendo de cero conocimiento sobre el juego.',
    stack: ['Python', 'PyTorch', 'Gymnasium', 'DQN', 'Reinforcement Learning'],
    media: {
      kind: 'video',
      src: galaxianDemo,
      aspect: 'aspect-square',
      alt: 'Pantalla del videojuego Galaxian con la nave del jugador disparando hacia una formación de enemigos en la parte superior.',
      caption: 'El agente entrenado juega Galaxian en tiempo real, esquivando y disparando de forma autónoma.',
    },
    repoUrl: 'https://github.com/marcocarbajalb/Proyecto_final_Galaxian_RL',
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    category: 'Full Stack',
    title: 'Tracker de series',
    description:
      'Aplicación full-stack para llevar el registro de series vistas, con API REST en Go (net/http puro, sin frameworks) y SQLite en el backend, y un frontend en JavaScript vanilla. Lo interesante: cero dependencias de framework en ambos extremos, todo sobre la librería estándar.',
    stack: ['Go', 'SQLite', 'JavaScript', 'REST API'],
    image: {
      src: trackerImg,
      alt: 'Captura de una app web en modo oscuro con series en cuadrícula; cada tarjeta tiene portada, estrellas de rating y barra de progreso de episodios.',
    },
    repos: [
      { label: 'Backend', url: 'https://github.com/marcocarbajalb/proyecto1_web_backend' },
      { label: 'Frontend', url: 'https://github.com/marcocarbajalb/proyecto1_web_frontend' },
    ],
  },
  {
    category: 'Bases de datos',
    title: 'Sistema de gestión para restaurantes',
    description:
      'Sistema operativo para una cadena de restaurantes (reservas, pedidos e inventario por sucursal) construido en Java sobre PostgreSQL. Lo más interesante: triggers y stored procedures que automatizan las alertas de insumos críticos sin intervención manual.',
    stack: ['Java', 'PostgreSQL', 'SQL'],
    image: {
      src: restauranteConsola,
      alt: 'Captura de una terminal mostrando la cuadrícula de mesas del sistema, marcadas como disponibles u ocupadas por sucursal. Junto con el menú principal.',
    },
    repos: [{ url: 'https://github.com/marcocarbajalb/Proyecto2_BD1_G2' }],
  },
];