import React from 'react';
import { PaintRoller, Wrench, Palette, CheckCircle } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const servicesData = [
  {
    id: 1,
    Icon: PaintRoller,
    title: "Esmaltado de Bañeras y Platos de Ducha",
    description: "Devolvemos la vida a tu bañera o plato de ducha desgastado, manchado o anticuado. Aplicamos un esmalte de poliuretano de alta resistencia que restaura su brillo y suavidad originales.",
    advantages: [
      "Ahorro de hasta un 80% frente a la sustitución.",
      "Sin obras, polvo ni escombros en tu hogar.",
      "Acabado brillante, duradero y fácil de limpiar.",
      "Tu baño listo para usar en 24-48 horas."
    ]
  },
  {
    id: 2,
    Icon: Wrench,
    title: "Reparación de Sanitarios",
    description: "¿Un golpe o una grieta? Nos especializamos en reparar daños en la porcelana sanitaria, devolviéndole su integridad estructural y estética con un resultado imperceptible.",
    advantages: [
      "Solución ideal para piezas descatalogadas o de diseño.",
      "Evita el coste y la molestia de reemplazar el sanitario.",
      "La reparación queda totalmente integrada y sellada.",
      "Opción sostenible y ecológica al evitar residuos."
    ]
  },
  {
    id: 3,
    Icon: Palette,
    title: "Cambio de Color de Sanitarios",
    description: "Moderniza tu baño sin cambiar los sanitarios. Esmaltamos tus piezas en un blanco brillante y moderno o en el color que prefieras, unificando el estilo de tu baño.",
    advantages: [
      "Renovación estética completa a una fracción del coste.",
      "Aumenta el valor y el atractivo de tu propiedad.",
      "Acabado profesional que no se amarillea ni se desgasta.",
      "Posibilidad de personalizar el color para un diseño único."
    ]
  }
];

export default function Servicios() {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Nuestros Servicios</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Soluciones profesionales para renovar tu baño sin obras. Ofrecemos nuestros servicios en toda el área metropolitana de Barcelona y la Comunidad de Madrid.</p>
        </div>

        <div className="space-y-16">
          {servicesData.map(({ id, Icon, title, description, advantages }) => (
            <div key={id} className="p-6 md:p-8 bg-card rounded-xl">
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                {Icon && <Icon className="h-10 w-10 text-primary flex-shrink-0" />}
                <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
              </div>
              <p className="mt-4 text-muted-foreground">{description}</p>
              <ul className="mt-6 space-y-3">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>{advantage.split(' ')[0]}</strong> {advantage.substring(advantage.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <CallToAction />
      </div>
    </section>
  );
}
