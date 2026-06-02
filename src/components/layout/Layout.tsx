import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <a href="#contenido" className="sr-only rounded-md font-mono text-sm text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2">
        Saltar al contenido
      </a>
      {/* Navbar irá aquí más adelante */}
      <main id="contenido">{children}</main>
      {/* Footer irá aquí más adelante */}
    </>
  );
}