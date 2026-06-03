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
        className="border-t border-rule"
        >
        <h2 id="proyectos-title" className="text-3xl font-semibold text-ink">
          Proyectos
        </h2>
        <p className="mt-4 font-serif text-sm uppercase tracking-widest text-muted">
          próxima sección
        </p>
      </Section>
    </Layout>
  );
}