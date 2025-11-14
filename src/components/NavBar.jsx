import { useState, useEffect } from "react";
import Logo from "./Logo";
import CallToAction from "./CallToAction";
import { ChevronLeft, TextAlignStart, Sun, Moon } from 'lucide-react';

// Usa el BASE_URL que inyecta Vite para evitar hardcodear "/esmaltamos/".
// En desarrollo BASE_URL será "/" y en producción "/esmaltamos/" según tu vite.config.
const base = import.meta.env.BASE_URL;

const navLinks = [
  { href: base, text: "Inicio" },
  { href: `${base}trabajos.html`, text: "Trabajos" },
  { href: `${base}servicios.html`, text: "Servicios" },
  { href: `${base}contacto.html`, text: "Contacto" },
];

export default function NavBar() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Modo actual (light | dark | system)
  const [mode, setMode] = useState(() => (window.__getTheme ? window.__getTheme() : 'system'));
  // Estado de tema efectivo aplicado (clase .dark presente o no)
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Bloquear el scroll del body cuando el menú está abierto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Escucha los cambios en el historial del navegador (botones atrás/adelante)
    window.addEventListener("popstate", handleLocationChange);

    // Sync icon with system theme changes
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onScheme = () => {
      // Actualiza el estado efectivo según la clase en <html>
      setIsDark(document.documentElement.classList.contains('dark'));
      // Si estamos en modo system reflejamos posibles cambios (mantiene coherencia)
      if ((window.__getTheme ? window.__getTheme() : 'system') === 'system') setMode('system');
    };
    if (mql.addEventListener) mql.addEventListener('change', onScheme);
    else if (mql.addListener) mql.addListener(onScheme);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      if (mql.removeEventListener) mql.removeEventListener('change', onScheme);
      else if (mql.removeListener) mql.removeListener(onScheme);
    };
  }, [isMenuOpen]);

  const getLinkClass = (href) => {
    const baseClasses = "transition-colors duration-300 tracking-wide font-medium";
    // Comprueba si la ruta actual es la misma que la del enlace.
    // El caso de "Inicio" es especial porque puede ser "/" o "/index.html".
    const isActive = currentPath === href || (href === base && currentPath.endsWith("/index.html"));
    return isActive ? `${baseClasses} text-primary` : `${baseClasses} text-muted-foreground hover:text-foreground`;
  };
  // El ciclo del botón solo alterna entre light y dark.
  // Desde 'system' (carga inicial) elegimos el contrario al tema efectivo actual para que el icono "pida" el cambio natural.
  const computeNextMode = (m, effectiveDark) => {
    if (m === 'system') return effectiveDark ? 'light' : 'dark';
    return m === 'light' ? 'dark' : 'light';
  };
  const toggleTheme = () => {
    const next = computeNextMode(mode, isDark);
    setMode(next);
    if (window.__setTheme) {
      window.__setTheme(next);
    } else {
      // Fallback simple
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (next === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', prefersDark);
      }
    }
    // Sin esperar a observers externos, actualizamos el estado efectivo
    setIsDark(next === 'dark');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm text-foreground shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between p-4 h-20">
          {/* Botón de menú para móvil */}
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2" aria-label="Abrir menú" aria-expanded={isMenuOpen} aria-controls="mobile-drawer">
            <TextAlignStart className="h-6 w-6" />
          </button>
          <h1 className="text-2xl text-center font-medium flex-1">Esmaltamos tu Bañera</h1>
          {/* Enlaces de navegación para escritorio */}
          <ul className="hidden md:flex space-x-6 items-center text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={getLinkClass(link.href)}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay */}
  <div onClick={() => setIsMenuOpen(false)} className={`fixed inset-0 bg-foreground/50 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

      {/* Menú lateral (Drawer) */}
      <div id="mobile-drawer" role="dialog" aria-modal="true" className={`fixed top-0 left-0 h-full w-90 bg-background text-foreground border border-border shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="relative p-6 border-b border-border">
          <button onClick={() => setIsMenuOpen(false)} className="p-2 absolute top-4 right-4" aria-label="Cerrar menú">
            <ChevronLeft className="h-6 w-6 text-muted-foreground" />
          </button>
          {/* Icono tema actual (clicable para cambiar) */}
          {(() => {
            const nextMode = computeNextMode(mode, isDark);
            const Icon = nextMode === 'light' ? Sun : Moon;
            return (
              <button
                type="button"
                onClick={toggleTheme}
                className="absolute top-4 left-4 p-2 rounded-md hover:bg-accent"
                aria-label={`Cambiar a modo ${nextMode}`}
                title={`Cambiar a modo ${nextMode}`}
              >
                <Icon className="h-5 w-5 text-muted-foreground" />
              </button>
            );
          })()}
          <div className="flex flex-col items-center justify-center gap-3 pt-2 pb-2">
            <Logo className="h-24 w-auto" />
            <span className="text-2xl font-semibold tracking-wide text-card-foreground">Esmaltamos tu Bañera</span>
          </div>
        </div>
        <ul className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`${getLinkClass(link.href)} block p-3 rounded-md text-lg hover:bg-accent`}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-8">
          <CallToAction compact showIntro={false} />
        </div>
      </div>
    </>
  );
}
 
