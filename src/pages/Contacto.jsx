import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

// Datos de contacto consistentes con el resto de la web
const email = 'info@esmaltamostubañera.com';
const phoneNumber = '+34615771841';
const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;

export default function Contacto() {
  return (
    <section className="py-12 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contacta con Nosotros</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres solicitar un presupuesto? Utiliza nuestros canales de contacto directo. Te responderemos en la mayor brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">

          {/* Canales de Contacto Directo */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contáctanos directamente</h3>
            <a href={`mailto:${email}`} className="flex items-center gap-4 p-4 border border-border rounded-md hover:bg-card transition-colors">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">{email}</p>
              </div>
            </a>
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-4 p-4 border border-border rounded-md hover:bg-card transition-colors">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Teléfono</p>
                <p className="text-muted-foreground">{phoneNumber}</p>
              </div>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-border rounded-md hover:bg-card transition-colors">
              <MessageSquare className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-muted-foreground">Envíanos un mensaje rápido</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}