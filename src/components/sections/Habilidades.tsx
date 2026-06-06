import { motion, useReducedMotion, type Variants } from 'motion/react';
import Section from '../layout/Section';

const skillGroups = [
  {
    index: '01',
    label: 'Data & Machine Learning',
    blurb:
      'Construyo modelos, comparo enfoques y me quedo con el que mejor rinde.',
    items: ['Python', 'R', 'pandas', 'scikit-learn', 'PyTorch', 'XGBoost', 'Gymnasium'],
  },
  {
    index: '02',
    label: 'Desarrollo & Backend',
    blurb:
      'La estructura sobre la que viven los datos: APIs y bases de datos relacionales robustas y mantenibles.',
    items: ['Java', 'Go', 'SQL', 'PostgreSQL', 'SQLite', 'Firebase', 'REST APIs', 'Git'],
  },
  {
    index: '03',
    label: 'Frontend & Web',
    blurb:
      'Para que el análisis no se quede en un notebook: interfaces que se pueden ver, usar y entender.',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion', 'HTML/CSS'],
  },
  {
    index: '04',
    label: 'BI & Herramientas',
    blurb:
      'De los datos a la decisión: dashboards que comunican y la automatización que los mantiene al día.',
    items: ['Power BI', 'Excel', 'Google Apps Script'],
  },
  {
    index: '05',
    label: 'Idiomas',
    blurb: 'Porque un análisis solo sirve si quien lo recibe lo entiende: explico resultados en español e inglés.',
    items: ['Español (nativo)', 'Inglés (B2)'],
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Habilidades() {
  const prefersReduced = useReducedMotion();

  const row: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <Section id="habilidades" aria-labelledby="habilidades-title" className="border-t border-rule">
      <header className="max-w-2xl">
        <h2 id="habilidades-title" className="text-3xl font-semibold text-ink sm:text-4xl">
          Habilidades
        </h2>
        <p className="mt-4 font-serif text-lg leading-relaxed text-muted">
          Las herramientas con las que trabajo, agrupadas por lo que hago con ellas.
        </p>
      </header>

      <motion.dl
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="mt-12 border-b border-rule"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.label}
            variants={row}
            className="grid gap-x-10 gap-y-3 border-t border-rule py-8 md:grid-cols-[17rem_1fr]"
          >
            <dt className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-muted">{group.index}</span>
              <span className="font-serif text-lg font-semibold leading-snug text-ink">
                {group.label}
              </span>
            </dt>
            <dd className="m-0">
              <p className="font-serif text-base leading-relaxed text-ink/85">{group.blurb}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
                {group.items.join('  ·  ')}
              </p>
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </Section>
  );
}