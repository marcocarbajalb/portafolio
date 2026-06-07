import Container from './Container';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-rule transition-colors duration-300 hover:text-ink">
            // y'all need data
          </p>
          <p className="font-serif text-sm text-muted">© {year} Marco Carbajal</p>
        </div>
      </Container>
    </footer>
  );
}