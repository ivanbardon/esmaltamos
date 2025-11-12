import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const CallToAction = ({ compact = false, showIntro = true }) => {
  const email = 'info@esmaltamostubañera.com';
  const phoneNumber = '+34615771841';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;

  return (
    <div className={`bg-background text-foreground ${compact ? 'px-2 py-4' : 'px-2 py-8'}`}>
      {showIntro && (
        <>
          <h2 className={`${compact ? 'text-2xl' : 'text-4xl'} text-center font-medium`}>Contacta con Nosotros</h2>
          <p className={`${compact ? 'text-center mb-4 text-sm px-3 py-2' : 'text-left mb-8 text-lg px-4 py-6'} text-muted-foreground`}>
            ¿Tienes alguna pregunta o quieres solicitar un presupuesto? Utiliza nuestros canales de contacto directo. Te responderemos en la mayor brevedad.
          </p>
        </>
      )}
  <div className={`grid grid-cols-1 sm:grid-cols-3 ${compact ? 'gap-3 max-w-md' : 'gap-4 max-w-4xl'} mx-auto px-4`}>
        <a href={`mailto:${email}`} className="flex items-center gap-4 p-4 border border-border rounded-md hover:bg-card transition-colors justify-center sm:justify-start">
          <Mail className="w-6 h-6 text-primary" />
          <div className='text-left'>
            <p className="font-semibold">Email</p>
            <p className="text-muted-foreground hidden sm:block">{email}</p>
          </div>
        </a>
        <a href={`tel:${phoneNumber}`} className="flex items-center gap-4 p-4 border border-border rounded-md hover:bg-card transition-colors justify-center sm:justify-start">
          <Phone className="w-6 h-6 text-primary" />
          <div className='text-left'>
            <p className="font-semibold">Teléfono</p>
            <p className="text-muted-foreground hidden sm:block">{phoneNumber}</p>
          </div>
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-border rounded-md hover:bg-card transition-colors justify-center sm:justify-start">
          <MessageCircle className="w-6 h-6 text-primary" />
          <div className='text-left'>
            <p className="font-semibold">WhatsApp</p>
            <p className="text-muted-foreground hidden sm:block">Envíanos un mensaje</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;

