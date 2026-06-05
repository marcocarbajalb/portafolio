import { motion, useReducedMotion, type Variants } from 'motion/react';
import Section from '../layout/Section';

const honors = [
  { year: '2024–2026', text: 'Honor al mérito académico (promedio anual > 95), UVG' },
  { year: '2024', text: 'Medalla Francisco Nieves Calvo (promedio más alto de primer año), UVG' },
  { year: '2023', text: 'Valedictorian, Colegio Español de Guatemala "Príncipe de Asturias"' },
  { year: '2018', text: 'Segundo lugar en la Olimpíada Nacional de Ciencias (matemáticas), USAC' },
];

const interests = ['Fútbol', 'Fórmula 1', 'Música', 'Videojuegos', 'Entrenamiento físico'];

export default function SobreMi() {
  const prefersReduced = useReducedMotion();

  const reveal: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <Section id="sobre-mi" aria-labelledby="sobre-mi-title" className="border-t border-rule">
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }}>
        <header className="max-w-2xl">
          <h2 id="sobre-mi-title" className="text-3xl font-semibold text-ink sm:text-4xl">
            Sobre mí
          </h2>
        </header>

        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-16">
          <div className="md:col-span-2">
            <p className="font-serif text-lg leading-relaxed text-ink first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.7]">
              Soy estudiante de Ingeniería en Ciencia de los Datos en la Universidad del Valle de
              Guatemala. Si tuviera que resumir mi trayectoria en una palabra, sería <em>dedicación</em>:
              constancia más que perfección. Crecí entre Guatemala y México, con una curiosidad
              temprana por entender un poco de todo — y la ciencia de datos resultó ser el lugar donde
              esa curiosidad, la matemática y la programación se encuentran.
            </p>
            <p className="mt-6 font-serif text-lg leading-relaxed text-ink/85">
              Desde 2023 doy tutorías de matemáticas, física y programación, adaptando cada explicación
              al modo en que aprende cada estudiante. Esa experiencia moldeó cómo entiendo mi profesión:
              un análisis solo sirve si quien lo recibe lo entiende. Por eso me importa tanto comunicar
              los datos como modelarlos.
            </p>
            <p className="mt-6 font-serif text-lg leading-relaxed text-ink/85">
              Hoy soy cofundador y científico de datos en Krudo Studio, donde convierto datos de
              campañas en dashboards e insights accionables para nuestros clientes. Mi meta de fondo es
              usar la ciencia de datos para aportar al desarrollo de Guatemala.
            </p>
          </div>

          <aside className="space-y-10">
            <figure className="m-0">
              <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden border border-rule bg-paper">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">Retrato (pendiente)</span>
              </div>
              {/* Se agregó mb-10 para crear una separación más amplia y elegante con la siguiente sección */}
              <figcaption className="mt-3 mb-10 font-serif text-sm italic text-muted">
                Marco Carbajal, Ciudad de Guatemala
              </figcaption>
            </figure>

            <div>
              <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-muted">Reconocimientos</h3>
              <ul className="mt-4 space-y-0">
                {honors.map((h) => (
                  <li key={h.year} className="flex gap-4 border-t border-rule py-3">
                    <span className="shrink-0 font-mono text-xs text-muted">{h.year}</span>
                    <span className="font-serif text-sm leading-snug text-ink">{h.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-muted">Intereses</h3>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
                {interests.join('  ·  ')}
              </p>
            </div>
          </aside>
        </div>
      </motion.div>
    </Section>
  );
}