import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Imágenes representativas desde /public (Vite las sirve correctamente con base)
const services = [
  {
    title: 'Esmaltado Completo',
    description: 'Renovación total con acabado resistente y brillante.',
    img: 'banera3a.jpeg',
  },
  {
    title: 'Reparación de Oxido y Esmaltado',
    description: 'Sellado y restauración de fisuras y golpes.',
    img: 'banera2.jpeg',
  },
  {
    title: 'Cambio de Color',
    description: 'Personaliza el color de tus sanitarios.',
    img: 'baneraazul.jpeg',
  },
  {
    title: 'Renovacion de Bañeras y Platos de Ducha',
    description: 'Intervenciones rápidas sin obras mayores.',
    img: 'banera1.jpeg',
  },
];

export default function OurServicesSection() {
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const touchStartX = useRef(null);
  const intervalRef = useRef(null);

  const total = services.length;

  const goTo = useCallback((i) => {
    const next = (i + total) % total;
    setIndex(next);
  }, [total]);

  const prev = useCallback(() => goTo(index - 1), [index, goTo]);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);

  // Autoplay con pausa al hacer hover
  useEffect(() => {
    if (isHover) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [isHover, total]);

  // Navegación por teclado cuando el carrusel tiene foco
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  // Swipe táctil
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 50; // px
    if (delta > threshold) prev();
    if (delta < -threshold) next();
    touchStartX.current = null;
  };

  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Nuestros Servicios</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Un vistazo rápido a lo que hacemos: esmaltado, reparación y personalización de sanitarios.
        </p>
      </div>

      {/* Carrusel accesible */}
      <div
        className="container mx-auto mt-10 select-none"
        role="region"
        aria-roledescription="carousel"
        aria-label="Carrusel de servicios"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* Controles */}
        <div className="flex justify-center items-center gap-8 mb-4">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="p-3 bg-card/50 hover:bg-card rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="p-3 bg-card/50 hover:bg-card rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Ventana */}
        <div className="overflow-hidden rounded-xl" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {/* Pista */}
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {services.map((s, i) => (
              <div
                key={s.title}
                className="w-full shrink-0 px-1 sm:px-2"
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${total}`}
                aria-hidden={i !== index}
              >
                <article className="bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Overlay sutil adaptado al tema */}
                    <div className="absolute inset-0 bg-foreground/5" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-card-foreground">{s.title}</h3>
                    <p className="mt-1 text-muted-foreground text-sm">{s.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Paginación */}
        <div className="mt-4 flex justify-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? 'bg-primary' : 'bg-accent hover:bg-accent-foreground/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
