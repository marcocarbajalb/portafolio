import Layout from './components/layout/Layout';
import Section from './components/layout/Section';

export default function App() {
  return (
    <Layout>
      <Section id="inicio" aria-labelledby="inicio-title">
        <h1 id="inicio-title" className="font-display text-5xl font-bold text-ink">
          Marco Carbajal
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Estudiante de Ingeniería en Ciencia de los Datos. Convierto datos
          complejos en decisiones estratégicas.
        </p>
      </Section>

      <Section
        id="proyectos"
        aria-labelledby="proyectos-title"
        className="border-t border-line"
      >
        <h2 id="proyectos-title" className="font-display text-3xl font-semibold text-ink">
          Proyectos
        </h2>
        <p className="mt-4 font-mono text-sm text-accent">
          layout + ritmo vertical · listo
        </p>
      </Section>
    </Layout>
  );
}