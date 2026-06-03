import { motion, useReducedMotion, type Variants } from 'motion/react';
import Section from '../layout/Section';

const skillGroups = [
  { label: 'Data & Machine Learning', items: ['Python', 'R', 'SQL', 'Aprendizaje por refuerzo', 'Algoritmos'] },
  { label: 'Desarrollo & Backend', items: ['Java', 'Go', 'Bases de datos relacionales'] },
  { label: 'Frontend & Web', items: ['React', 'TypeScript', 'HTML/CSS'] },
  { label: 'BI & Herramientas', items: ['Power BI', 'Excel', 'Google Apps Script'] },
  { label: 'Idiomas', items: ['Español (nativo)', 'Inglés (B2)'] },
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
            className="grid gap-x-8 gap-y-2 border-t border-rule py-6 md:grid-cols-[16rem_1fr]"
          >
            <dt className="font-serif text-xs uppercase tracking-[0.25em] text-muted">
              {group.label}
            </dt>
            <dd className="m-0 font-mono text-sm leading-relaxed text-ink">
              {group.items.join('  ·  ')}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </Section>
  );
}