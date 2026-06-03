export type SecondaryProject = {
  category: string;
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  image?: { src: string; alt: string };
};

export default function CardSecundario({ project }: { project: SecondaryProject }) {
  return (
    <article className="flex h-full flex-col border border-rule bg-paper">
      {project.image && (
        <div className="aspect-[16/10] overflow-hidden border-b border-rule">
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="font-serif text-xs uppercase tracking-[0.25em] text-muted">{project.category}</p>
        <h4 className="mt-3 text-xl font-semibold text-ink">{project.title}</h4>
        <p className="mt-3 flex-1 font-serif text-base leading-relaxed text-ink/85">{project.description}</p>
        <p className="mt-5 font-mono text-xs uppercase tracking-wider text-muted">{project.stack.join('  ·  ')}</p>
        {project.repoUrl && (
          
          <a href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block self-start border-b border-ink pb-0.5 font-serif text-sm text-ink transition-colors hover:text-muted"
          >
            Ver repositorio ↗
          </a>
        )}
      </div>
    </article>
  );
}