import React, { useState, useCallback } from 'react';
import TrabajoCard from './TrabajoCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Datos de los trabajos
const trabajosData = [
  {
    id: 1,
    title: "Esmaltado con cambio de color",
    images: ["plato1e.jpg", "plato1a.jpg", "plato1b.jpg", "plato1c.jpg"],
    description: "Proceso de reparación de grietas y esmaltado completo para devolverle su aspecto original y durabilidad."
  },
  {
    id: 2,
    title: "Arreglos de oxido y esmaltado",
    images: ["banera2b.jpg", "banera1a.jpg", "banera1b.jpg", "banera2a.jpg"],
    description: "Esmaltado profesional para bañeras con desgaste, recuperando el brillo y la suavidad de la superficie."
  },
  {
    id: 3,
    title: "Reparacion y renovación de sanitarios",
    images: ["banera1b.jpg", "baneraazul.jpeg", "banera1.jpeg", "banera1a.jpg"],
    description: "Aplicación de esmalte de alta resistencia para un acabado como nuevo, eliminando manchas y óxido."
  }
];

export default function Trabajos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  // Distancia mínima de deslizamiento para que se considere un swipe
  const minSwipeDistance = 50;

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? trabajosData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === trabajosData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null); // Resetear
  };

  return (
    <section className="py-16 md:py-24 bg-background text-foreground" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-center px-2">Servicios</h2>

        {/* Controles del carrusel */}{/* Botones de Navegación */}
        <div className="mt-8 flex justify-center items-center gap-30">
          <button onClick={prevSlide} className="p-3 bg-card/50 hover:bg-card rounded-full transition-colors" aria-label="Trabajo anterior"><ChevronLeft className="h-8 w-8" /></button>
          <button onClick={nextSlide} className="p-3 bg-card/50 hover:bg-card rounded-full transition-colors" aria-label="Siguiente trabajo"><ChevronRight className="h-8 w-8" /></button>
        </div>
        
        {/* Contenedor del carrusel con overflow hidden */}
        <div className="overflow-hidden">
          {/* Contenedor de las tarjetas que se moverá */}
          <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {trabajosData.map((trabajo) => (
              <div key={trabajo.id} className="w-full flex-shrink-0 px-4">
                <TrabajoCard trabajo={trabajo} />
              </div>
            ))}
          </div>
        </div> 
      </div>
    </section>
  );
}
