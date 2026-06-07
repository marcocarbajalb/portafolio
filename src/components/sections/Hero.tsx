import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from 'motion/react';
import Container from '../layout/Container';
import gaussSurface from '../../assets/hero-gauss.webp';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
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
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={prefersReduced ? undefined : { opacity, y }}
            className="max-w-2xl"
          >
            <motion.div variants={item} className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-ink" />
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-muted">
                Ing. en ciencia de los datos
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              id="hero-title"
              className="text-6xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl md:text-8xl"
            >
              Los datos no se explican solos
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl font-serif text-lg leading-relaxed text-ink/80 sm:text-xl"
            >
              Soy Marco Carbajal, estudiante de Ingeniería en Ciencia de los Datos en la Universidad del Valle de Guatemala. Construyo y valido modelos; luego los traduzco en algo que se puede ver y usar.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <a
                href="#proyectos"
                className="bg-ink px-6 py-3 font-serif text-paper transition-colors hover:bg-ink/85"
              >
                Ver proyectos
              </a>
              <a
                href={cvHref}
                download
                className="border-b border-ink pb-0.5 font-serif text-ink transition-colors hover:text-muted"
              >
                Descargar CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            style={prefersReduced ? undefined : { opacity }}
            className="pointer-events-none hidden select-none lg:-mr-4 lg:block xl:-mr-12"
          >
            <motion.img
              src={gaussSurface}
              alt=""
              decoding="async"
              initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-auto w-full"
              style={{
                maskImage: 'linear-gradient(to right, transparent, #000 12%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, #000 12%)',
              }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}