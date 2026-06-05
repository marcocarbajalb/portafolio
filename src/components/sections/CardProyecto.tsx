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
    return <img src={media.src} alt={media.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />;
  }
  if (media.kind === 'video') {
    return (
      <video src={media.src} poster={media.poster} autoPlay loop muted playsInline preload="metadata" aria-label={media.caption} className="h-full w-full object-cover" />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-paper">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">{media.label ?? 'Visual pendiente'}</span>
    </div>
  );
}

type CardProyectoProps = { project: Project; reverse?: boolean };

export default function CardProyecto({ project, reverse = false }: CardProyectoProps) {
  const aspect = project.media.aspect ?? 'aspect-[16/10]';
  return (
    /* Restauramos el gap a 10/16 para mejor espaciado */
    <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className={cn('order-2', reverse ? 'md:order-2' : 'md:order-1')}>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-muted">{project.index}</span>
          <span className="font-serif text-xs uppercase tracking-[0.25em] text-muted">{project.kicker}</span>
        </div>
        {/* mt-4 le da espacio al título */}
        <h3 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{project.title}</h3>
        <div className="mt-6 space-y-5">
          <Block label="El problema" text={project.problem} />
          <Block label="La solución" text={project.solution} />
          <Block label="El resultado" text={project.result} />
        </div>
        <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">{project.stack.join('  ·  ')}</p>
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block border-b border-ink pb-0.5 font-serif text-ink transition-colors hover:text-muted">Ver repositorio ↗</a>
        )}
      </div>
      <figure className={cn('order-1 m-0', reverse ? 'md:order-1' : 'md:order-2')}>
        <div className={cn('overflow-hidden border border-rule bg-paper', aspect)}>
          <Media media={project.media} />
        </div>
        {project.media.caption && <figcaption className="mt-2 font-serif text-sm italic text-muted">{project.media.caption}</figcaption>}
      </figure>
    </article>
  );
}