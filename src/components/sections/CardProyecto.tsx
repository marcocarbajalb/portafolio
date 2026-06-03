import { motion, useReducedMotion, type Variants } from 'motion/react';
import { cn } from '../../lib/utils';

export type ProjectMedia =
  | { kind: 'image'; src: string; alt: string; caption?: string; aspect?: string }
  | { kind: 'video'; src: string; poster?: string; caption?: string; aspect?: string }
  | { kind: 'placeholder'; label?: string; caption?: string; aspect?: string };

export type Project = {
  index: string;
  kicker: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  media: ProjectMedia;
  repoUrl?: string;
};

const textContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-serif text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
      <p className="mt-1 font-serif text-base leading-relaxed text-ink/85">{text}</p>
    </div>
  );
}

function Media({ media }: { media: ProjectMedia }) {
  if (media.kind === 'image') {
    return (
      <img src={media.src} alt={media.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
    );
  }
  if (media.kind === 'video') {
    return (
      <video
        src={media.src}
        poster={media.poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={media.caption}
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-paper">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        {media.label ?? 'Visual pendiente'}
      </span>
    </div>
  );
}

type CardProyectoProps = {
  project: Project;
  reverse?: boolean;
};

export default function CardProyecto({ project, reverse = false }: CardProyectoProps) {
  const prefersReduced = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const aspect = project.media.aspect ?? 'aspect-[16/10]';

  return (
    <motion.article
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
    >
      <div className={cn('order-2', reverse ? 'md:order-2' : 'md:order-1')}>
        <motion.div variants={fadeUp} className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-muted">{project.index}</span>
          <span className="font-serif text-xs uppercase tracking-[0.25em] text-muted">
            {project.kicker}
          </span>
        </motion.div>

        <motion.h3 variants={fadeUp} className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {project.title}
        </motion.h3>

        <motion.div variants={fadeUp} className="mt-6 space-y-4">
          <Block label="El problema" text={project.problem} />
          <Block label="La solución" text={project.solution} />
          <Block label="El resultado" text={project.result} />
        </motion.div>

        <motion.p variants={fadeUp} className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">
          {project.stack.join('  ·  ')}
        </motion.p>

        {project.repoUrl && (
          <motion.a
            variants={fadeUp}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border-b border-ink pb-0.5 font-serif text-ink transition-colors hover:text-muted"
          >
            Ver repositorio ↗
          </motion.a>
        )}
      </div>

      <motion.figure variants={fadeUp} className={cn('order-1 m-0', reverse ? 'md:order-1' : 'md:order-2')}>
        <div className={cn('overflow-hidden border border-rule bg-paper', aspect)}>
          <Media media={project.media} />
        </div>
        {project.media.caption && (
          <figcaption className="mt-3 font-serif text-sm italic text-muted">
            {project.media.caption}
          </figcaption>
        )}
      </motion.figure>
    </motion.article>
  );
}