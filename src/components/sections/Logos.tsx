import Container from '../layout/Container';

type Logo = { name: string; src?: string };

const logos: Logo[] = [
  { name: 'Banco Agromercantil (Bam)' },
  { name: 'Universidad del Valle de Guatemala' },
  { name: 'Colegio Príncipe de Asturias' },
  { name: 'Casa Hermes' },
  { name: 'Krudo Studio' },
];

function LogoItem({ logo }: { logo: Logo }) {
  if (logo.src) {
    return (
      <img
        src={logo.src}
        alt={logo.name}
        className="h-8 w-auto opacity-60 grayscale transition hover:opacity-100"
      />
    );
  }
  return <span className="whitespace-nowrap font-serif text-lg text-muted">{logo.name}</span>;
}

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 list-none items-center gap-16 pr-16"
    >
      {logos.map((logo) => (
        <li key={logo.name}>
          <LogoItem logo={logo} />
        </li>
      ))}
    </ul>
  );
}

export default function Logos() {
  return (
    <section aria-label="Formación y experiencia" className="border-t border-rule py-16">
      <Container>
        <p className="text-center font-serif text-xs uppercase tracking-[0.25em] text-muted">
          Formación y experiencia
        </p>
      </Container>
      <div className="marquee mt-10 overflow-hidden">
        <div className="marquee-track flex w-max">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
}