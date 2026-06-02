import Layout from './components/layout/Layout';
import Section from './components/layout/Section';
import Hero from './components/sections/Hero';

export default function App() {
  return (
    <Layout>
      <Hero />

      <Section
        id="proyectos"
        aria-labelledby="proyectos-title"
        className="border-t border-line"
      >
        <h2 id="proyectos-title" className="font-display text-3xl font-semibold text-ink">
          Proyectos
        </h2>
        <p className="mt-4 font-mono text-sm text-accent">próxima sección</p>
      </Section>
    </Layout>
  );
}