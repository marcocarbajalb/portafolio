import { type CSSProperties } from 'react';
import { projects, secondaryProjects } from '../../data/projects';
import CardProyecto from './CardProyecto';
import CardSecundario from './CardSecundario';
import Container from '../layout/Container';

export default function Proyectos() {
  const totalCards = projects.length + 1;

  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-title"
      className="scroll-mt-24 border-t border-rule pb-20 pt-20 md:pb-32 md:pt-32"
    >
      <Container>
        <header className="max-w-2xl">
          <h2 id="proyectos-title" className="text-3xl font-semibold text-ink sm:text-4xl">
            Proyectos
          </h2>
          <p className="mt-4 font-serif text-lg leading-relaxed text-muted">
            Cuatro trabajos donde el análisis de datos se vuelve algo que se
            puede ver, usar y, sobre todo, decidir.
          </p>
        </header>
      </Container>

      <ul
        className="stack m-0 mt-12 list-none px-4 sm:px-6"
        style={{ '--n': totalCards } as CSSProperties}
      >
        {/* Renderizamos las 4 cartas principales */}
        {projects.map((project, i) => (
          <li key={project.title} className="stack-card" style={{ '--i': i } as CSSProperties}>
            <div className="stack-card-inner mx-auto max-w-6xl border border-rule bg-paper p-6 sm:p-10 md:px-16 md:py-14 flex flex-col justify-center">
              <CardProyecto project={project} reverse={i % 2 === 1} />
            </div>
          </li>
        ))}

        {/* 5ta Carta: Otros Proyectos */}
        <li className="stack-card" style={{ '--i': projects.length } as CSSProperties}>
          <div className="stack-card-inner mx-auto max-w-6xl border border-rule bg-paper p-6 sm:p-10 md:px-16 md:py-14 flex flex-col justify-center">
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-muted">
              Otros proyectos
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {secondaryProjects.map((project) => (
                <CardSecundario key={project.title} project={project} />
              ))}
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}