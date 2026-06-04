import { useEffect, useRef, useState } from 'react';

const frameModules = import.meta.glob('../../assets/servidor/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const frameUrls = Object.keys(frameModules)
  .sort()
  .map((key) => frameModules[key]);

const FRAME_W = 1100;
const FRAME_H = 618;

export default function ServidorScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrame = useRef(0);
  const rafId = useRef<number | null>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: '600px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || frameUrls.length === 0) return;
    let count = 0;
    const done = () => {
      count += 1;
      setLoaded(count);
      if (count === frameUrls.length) setReady(true);
    };
    imagesRef.current = frameUrls.map((url) => {
      const img = new Image();
      img.onload = done;
      img.onerror = done;
      img.src = url;
      return img;
    });
  }, [shouldLoad]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    if (!ready) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      drawFrame(frameUrls.length - 1);
      return;
    }

    drawFrame(0);
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const scrollable = el.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / scrollable));
      const frame = Math.min(frameUrls.length - 1, Math.round(progress * (frameUrls.length - 1)));
      if (frame !== currentFrame.current) {
        currentFrame.current = frame;
        if (rafId.current) cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(() => drawFrame(frame));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ready]);

  return (
    <section
      ref={sectionRef}
      id="servidor"
      aria-label="Anatomía de la infraestructura"
      className="relative h-[300vh] border-t border-rule"
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 px-6">
        <header className="pointer-events-none max-w-2xl text-center">
          <p className="font-serif text-xs uppercase tracking-[0.25em] text-muted">
            Anatomía de la infraestructura
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            La máquina detrás del análisis
          </h2>
        </header>

        <div className="relative w-full max-w-6xl">
          <canvas ref={canvasRef} width={FRAME_W} height={FRAME_H} className="h-auto w-full" />
          {shouldLoad && !ready && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Cargando… {frameUrls.length ? Math.round((loaded / frameUrls.length) * 100) : 0}%
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}