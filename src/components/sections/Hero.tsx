import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from 'motion/react';
import Container from '../layout/Container';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cvHref = `${import.meta.env.BASE_URL}cv-marco-carbajal.pdf`;

  return (
    <section
      ref={ref}
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen scroll-mt-24 items-center"
    >
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={prefersReduced ? undefined : { opacity, y }}
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="font-mono text-sm uppercase tracking-widest text-accent"
          >
            Ciencia de datos · Ingeniería de datos
          </motion.p>

          <motion.h1
            variants={item}
            id="hero-title"
            className="mt-6 font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl md:text-7xl"
          >
            Transformando datos complejos en{' '}
            <span className="text-accent">decisiones estratégicas</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            Soy Marco Carbajal, estudiante de Ingeniería en Ciencia de los Datos
            en la Universidad del Valle de Guatemala. Convierto datos crudos en
            modelos, visualizaciones y productos que impulsan decisiones.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            
            <a href="#proyectos"
              className="rounded-lg bg-accent px-6 py-3 font-medium text-canvas transition-colors hover:bg-accent-strong"
            >
              Ver proyectos
            </a>
            
            <a href={cvHref}
              download
              className="rounded-lg border border-line px-6 py-3 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Descargar CV
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}