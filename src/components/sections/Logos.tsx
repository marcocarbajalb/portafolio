import Container from '../layout/Container';
import bam from '../../assets/bam.webp';
import uvg from '../../assets/uvg.webp';
import asturias from '../../assets/cpa.webp';
import casaHermes from '../../assets/casa_hermes.webp';
import krudo from '../../assets/krudo_studio.webp';
import daten from '../../assets/daten.webp';

type Logo = { name: string; src: string; className?: string };

const logos: Logo[] = [
  { name: 'Banco Agromercantil (Bam)', src: bam },
  { name: 'Universidad del Valle de Guatemala', src: uvg },
  { name: 'Colegio Príncipe de Asturias', src: asturias },
  { name: 'Casa Hermes', src: casaHermes, className: 'h-16 md:h-24' },
  { name: 'Krudo Studio', src: krudo },
  { name: 'Daten', src: daten },
];

const REPEAT = 3;
const sequence = Array.from({ length: REPEAT }, () => logos).flat();

function LogoRow() {
  return (
    <ul className="flex shrink-0 list-none items-center gap-16 pr-16">
      {sequence.map((logo, i) => (
        <li key={`${logo.name}-${i}`}>
          <img
            src={logo.src}
            alt=""
            loading="lazy"
            decoding="async"
            className={`w-auto ${logo.className ?? 'h-12 md:h-16'}`}
          />
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

      <ul className="sr-only">
        {logos.map((logo) => (
          <li key={logo.name}>{logo.name}</li>
        ))}
      </ul>

      <div className="marquee mt-10 overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex w-max">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </section>
  );
}