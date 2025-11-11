import React from 'react'

const base = import.meta.env.BASE_URL

export default function NotFound() {
  return (
    <section className="text-center">
      <h1 className="text-4xl">404 - Página no encontrada</h1>
      <p className="text-lg mt-4">La página que buscas no existe.</p>
      <a href={base} className="inline-block mt-8 bg-primary text-primary-foreground py-2 px-6 rounded-lg">Volver al inicio</a>
    </section>
  )
}