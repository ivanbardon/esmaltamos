import React from 'react'

export default function HeroSection() {
  return (
    <section className='py-4 bg-transparent text-foreground'>
      <p className="mt-4 text-lg text-center px-2">La solución más rápida y económica para reparar tu bañera.</p>
      <img
        src="baneraheader.webp"
        alt="Esmaltado de bañera"
        className="mt-6 mx-auto w-full max-w-4xl"
      />
    </section>
  )
}
