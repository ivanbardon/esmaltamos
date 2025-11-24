import React, { useEffect, useState } from 'react'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // trigger the enter animation after mount
    setMounted(true)
  }, [])

  return (
    <section className='py-4 bg-transparent text-foreground overflow-hidden'>
      <p className={`mt-4 text-lg text-center px-2 ${mounted ? 'hero-enter' : 'hero-before'}`}>
        La solución más rápida y económica para reparar tu bañera
      </p>
      <img
        src="baneraheader.webp"
        alt="Esmaltado de bañera"
        className={`mt-6 mx-auto w-full max-w-4xl ${mounted ? 'hero-image-enter' : 'hero-image-before'}`}
      />
    </section>
  )
}
