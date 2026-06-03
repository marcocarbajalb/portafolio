import Container from './Container';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule py-10">
      <Container>
        <div className="flex justify-end">
          <p className="font-serif text-sm text-muted">© {year} Marco Carbajal</p>
        </div>
      </Container>
    </footer>
  );
}