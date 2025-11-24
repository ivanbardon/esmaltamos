import React, { useEffect, useState } from 'react';
import { Award, PiggyBank, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    // Usamos un padding más generoso y centramos el contenido
    <section className='py-16 md:py-24 px-4 overflow-hidden'>
      <div className={`container mx-auto text-left ${mounted ? 'slide-fade-enter' : 'slide-fade-before'}`}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Ventajas de esmaltar tu bañera
        </h2>
        {/* Creamos una rejilla que se adapta a diferentes tamaños de pantalla */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Tarjeta 1: Renovación sin Obras */}
          <div className="p-6 bg-card rounded-xl">
            <Sparkles className="h-8 w-8 text-card-foreground" />
            <h3 className='mt-4 text-xl font-bold'>Renueva sin Obras</h3>
            <p className="mt-2 text-muted-foreground">Olvídate del polvo y los escombros. Esmaltamos tu bañera en el día, dejándola como nueva sin necesidad de reformas.</p>
          </div>
          {/* Tarjeta 2: Calidad y Durabilidad */}
          <div className="p-6 bg-card rounded-xl">
            <Award className="h-8 w-8 text-card-foreground" />
            <h3 className='mt-4 text-xl font-bold'>Calidad y Durabilidad</h3>
            <p className="mt-2 text-muted-foreground">Utilizamos materiales de alta gama que garantizan un acabado brillante, liso y resistente al uso diario durante años.</p>
          </div>
          {/* Tarjeta 3: Ahorro Inteligente */}
          <div className="p-6 bg-card rounded-xl">
            <PiggyBank className="h-8 w-8 text-card-foreground" />
            <h3 className='mt-4 text-xl font-bold'>Ahorro Inteligente</h3>
            <p className="mt-2 text-muted-foreground">Renovar tu bañera es hasta un 70% más económico que sustituirla. Una solución ideal para tu bolsillo y el medio ambiente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}