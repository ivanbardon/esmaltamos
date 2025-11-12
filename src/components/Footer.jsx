import React from 'react'

const base = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className="text-center px-6 mt-12 bg-transparent text-foreground">
      <div className="pt-8 text-sm text-muted-foreground space-x-3">
        <span>&copy; 2025 Esmaltamos Tu Bañera.</span>
        <span>Todos los derechos reservados.</span>
        <a href={`${base}privacy.html`} className="underline hover:text-foreground">Privacidad</a>
      </div>
    </footer>
  )
}
