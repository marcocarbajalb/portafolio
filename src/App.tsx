import Layout from './components/layout/Layout';
import Section from './components/layout/Section';
import Hero from './components/sections/Hero';
import CardProyecto, { type Project } from './components/sections/CardProyecto';

const sampleProject: Project = {
  index: '01',
  kicker: 'Optimización · Algoritmos',
  title: 'Route-Optimizer',
  problem: 'Planificar rutas a mano es lento y rara vez óptimo con muchas paradas.',
  solution:
    'Algoritmo genético en Python expuesto vía Firebase Cloud Functions y conectado a la API de Google Maps, con un frontend en React + Vite.',
  result: 'El usuario ingresa sus paradas y obtiene una ruta optimizada sobre el mapa en segundos.',
  stack: ['React', 'Vite', 'Python', 'Firebase', 'Google Maps API'],
  media: {
    kind: 'placeholder',
    label: 'Demo en video (pendiente)',
    caption: 'Generación de ruta óptima en tiempo real.',
  },
};

export default function App() {
  return (
    <Layout>
      <Hero />
      <Section id="proyectos" aria-labelledby="proyectos-title" className="border-t border-rule">
        <h2 id="proyectos-title" className="text-3xl font-semibold text-ink sm:text-4xl">
          Proyectos
        </h2>
        <div className="mt-16">
          <CardProyecto project={sampleProject} />
        </div>
      </Section>
    </Layout>
  );
}