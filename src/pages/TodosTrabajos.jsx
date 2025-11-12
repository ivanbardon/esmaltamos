import React from 'react';
import Layout from '../components/Layout';


const trabajosData = [
  {
    id: 1,
    title: "Reparación Integral de Plato de Ducha",
    images: ["plato1.jpeg"],
    fullDescription: "Este trabajo consistió en la restauración completa de un plato de ducha que presentaba múltiples grietas y desgaste general. Se realizó un proceso de saneamiento, sellado de fisuras con materiales de alta resistencia y, finalmente, un esmaltado completo en blanco brillante. El resultado es una superficie totalmente renovada, impermeable y con un acabado impecable, sin necesidad de realizar obras. El trabajo se completó en aproximadamente 4 horas, con un tiempo de secado de 24 horas para garantizar la máxima durabilidad.",
  },
  {
    id: 2,
    title: "Renovación y Esmaltado de Bañera",
    images: ["banera1.jpeg"],
    fullDescription: "La bañera mostraba signos de desgaste, falta de brillo y algunas picaduras. Nuestro equipo aplicó un esmalte profesional de poliuretano que restaura la suavidad y el brillo original. Este tratamiento no solo mejora la estética, sino que también crea una capa protectora contra el óxido y la acumulación de sarro. Es una solución rápida y económica para modernizar el baño sin obras, con una garantía de 2 años sobre el acabado.",
  },
  {
    id: 3,
    title: "Cambio de Color en Bañera Clásica",
    images: ["baneraazul.jpeg"],
    fullDescription: "El cliente deseaba modernizar su baño cambiando el color de una bañera antigua. Se procedió a un esmaltado completo con un color azul a elección, utilizando pigmentos especiales y esmalte de alta adherencia. Este proceso permite personalizar completamente los sanitarios, adaptándolos a un nuevo estilo decorativo. El acabado es uniforme, resistente a los productos de limpieza y devuelve la vida a piezas clásicas.",
  },
  {
    id: 4,
    title: "Reparación de óxido y Esmaltado de Bañera",
    images: ["banera2.jpeg"],
    fullDescription: "Se reparó una fisura en un inodoro que, aunque pequeña, representaba un riesgo de fuga y un problema estético. Utilizamos un compuesto sellador específico para cerámica y porcelana, seguido de un esmaltado parcial para igualar el color y el brillo. Es una intervención rápida, de menos de 2 horas, que evita tener que reemplazar el sanitario completo, ahorrando costes y molestias.",
  },
  {
    id: 5,
    title: "Esmaltado de Bañera",
    images: ["banera3b.jpeg", "banera3a.jpeg"],
    fullDescription: "Esmaltado completo de bañeras para restaurar su apariencia y protegerlas de futuros daños."
  }
];

export default function TodosTrabajos() {
  return (
    <div className="container mx-auto px-4 py-10 bg-background text-foreground">
      <div className="text-center mb-12">
        <h1 className="text-4xl">Nuestra Galería de Trabajos</h1>
        <p className="text-lg mt-4">Explora algunos de los proyectos que hemos realizado, transformando baños con resultados duraderos y de alta calidad.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {trabajosData.map((trabajo) => (
          <div key={trabajo.id} className="border rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{trabajo.title}</h2>
              <p className="leading-relaxed">{trabajo.fullDescription}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-6 pb-6">
              {trabajo.images.map((img, index) => {
                const isSingle = trabajo.images.length === 1;
                const isPortrait = /banera3a/i.test(img); // detectar la imagen en formato portrait específica
                // Para portrait: mantenemos proporción sin recorte agresivo usando object-contain y altura fija
                // Para landscape: rellenamos usando object-cover como antes
                return (
                  <div
                    key={index}
                    className={`rounded-md ${isSingle ? 'sm:col-span-2 justify-self-center max-w-xl w-full' : ''} ${isPortrait ? 'flex items-center justify-center bg-muted overflow-hidden h-72' : 'overflow-hidden'} `}
                  >
                    <img
                      src={img}
                      alt={`${trabajo.title} - imagen ${index + 1}`}
                      className={isPortrait
                        ? 'max-h-72 w-auto object-contain transition-transform duration-300 ease-in-out'
                        : 'w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out'}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}