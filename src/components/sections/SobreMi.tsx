import { motion, useReducedMotion, type Variants } from 'motion/react';
import Section from '../layout/Section';
import retrato from '../../assets/retrato.webp';

const honors = [
  { year: '2024–2026', text: 'Honor al mérito académico (promedio anual > 95), UVG' },
  { year: '2024', text: 'Medalla Francisco Nieves Calvo (promedio más alto de primer año), UVG' },
  { year: '2023', text: 'Valedictorian, Colegio Español de Guatemala "Príncipe de Asturias"' },
  { year: '2018', text: 'Segundo lugar en la Olimpíada Nacional de Ciencias (matemáticas), USAC' },
];

const ventures = [
  {
    name: 'Krudo Studio',
    text: 'Nuestra agencia de marketing digital. Analizo datos de Meta Business Suite y construyo bases de datos y dashboards para que cada marca entienda sus campañas y decida mejor.',
  },
  {
    name: 'Daten',
    text: 'Nuestro emprendimiento de soluciones tecnológicas, con fuerte enfoque en datos. Según el proyecto tomamos el rol de ingenieros, arquitectos, científicos o analistas de datos, del dato crudo a la acción concreta de negocio.',
  },
];

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
              Me llamo Marco Carbajal. Crecí en una familia bicultural, entre Guatemala y México, y
              desde pequeño quise aprender un poco de todo. La ciencia de datos resultó ser el lugar
              donde esa curiosidad, la matemática y la programación por fin se encontraban. Curso el
              cuarto año de Ingeniería en Ciencia de los Datos en la Universidad del Valle de
              Guatemala. Si tuviera que describir mi trayectoria con una palabra, sería{' '}
              <em>dedicación</em>: más constancia que perfección, y la disposición a equivocarme,
              corregir y volver a intentar.
            </p>
            <p className="mt-6 font-serif text-lg leading-relaxed text-ink/85">
              Desde 2023 doy tutorías de matemática, física y programación, adaptando cada
              explicación al modo en que aprende cada quien. Esa experiencia ordenó mi forma de
              entender el trabajo técnico: el valor de un modelo no está en lo sofisticado del
              algoritmo, sino en lo claro que queda para quien tiene que decidir con él. Me interesa
              volver accesible lo complejo, no impresionar con ello.
            </p>
            <p className="mt-6 font-serif text-lg leading-relaxed text-ink/85">
              Hoy reparto el tiempo entre lo corporativo y lo propio. Como practicante en el área
              analítica de Banco Agromercantil (Bam) llevo ese rigor a un entorno de gran escala; en
              paralelo, soy cofundador de dos proyectos de naturaleza distinta:
            </p>

            <dl className="mt-6 space-y-6">
              {ventures.map((v) => (
                <div key={v.name} className="border-l border-rule pl-5">
                  <dt className="font-serif text-base font-semibold text-ink">{v.name}</dt>
                  <dd className="m-0 mt-1 font-serif text-base leading-relaxed text-ink/85">
                    {v.text}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 font-serif text-lg leading-relaxed text-ink/85">
              Fuera de lo técnico me equilibran el entrenamiento, la música, el fútbol y los
              videojuegos. Y comparto el día a día con mi novia, Dulce, que estudia Ingeniería
              Mecatrónica, así que los proyectos, las ideas y la tecnología nos acompañan también
              fuera del trabajo.
            </p>
          </div>

          <aside className="space-y-10">
            <figure className="m-0">
              <div className="aspect-[4/5] w-full overflow-hidden border border-rule bg-paper">
                <img
                  src={retrato}
                  alt="Retrato de Marco Carbajal"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
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
          </aside>
        </div>
      </motion.div>
    </Section>
  );
}