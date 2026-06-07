import { motion, useReducedMotion, type Variants } from 'motion/react';
import Section from '../layout/Section';

const email = 'carbajalbonilla@gmail.com';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marco-antonio-carbajal-bonilla-a909141b9/' },
  { label: 'GitHub', href: 'https://github.com/marcocarbajalb' },
];

export default function Contacto() {
  const prefersReduced = useReducedMotion();

  const reveal: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <Section id="contacto" aria-labelledby="contacto-title" className="border-t border-rule">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-3xl"
      >
        <h2 id="contacto-title" className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          Hablemos.
        </h2>
        <p className="mt-6 font-serif text-lg leading-relaxed text-muted">
          Estoy abierto a oportunidades laborales, proyectos y colaboraciones en ciencia e ingeniería de
          datos. Escríbeme y conversamos.
        </p>
        
        <a href={`mailto:${email}`}
          className="mt-10 inline-block border-b border-ink pb-1 font-serif text-2xl text-ink transition-colors hover:text-muted sm:text-3xl"
        >
          {email}
        </a>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          {links.map((link) => (
            
            <a key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}