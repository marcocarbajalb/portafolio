import { useEffect, useState } from 'react';
import Container from './Container';

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/80 backdrop-blur">
      <Container>
        <nav aria-label="Navegación principal" className="flex h-13.5 items-center justify-between">
          <a href="#inicio" className="font-serif text-sm font-bold uppercase tracking-[0.1em] text-ink">
            Marco Carbajal
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                
                <a href={link.href}
                  className="font-serif text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="font-serif text-xs uppercase tracking-[0.2em] text-ink md:hidden"
          >
            {open ? 'Cerrar' : 'Menú'}
          </button>
        </nav>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-rule bg-paper md:hidden">
          <Container>
            <ul className="flex flex-col py-2">
              {links.map((link) => (
                <li key={link.href}>
                  
                  <a href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-serif text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}