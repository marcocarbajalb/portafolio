import Container from './Container';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-serif text-sm text-muted">© {year} Marco Carbajal</p>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Compuesto en Newsreader · React + Vite
          </p>
        </div>
      </Container>
    </footer>
  );
}