import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, AppWindowMac, ChevronRight, ChevronLeft, TextAlignJustify, TextAlignStart, } from 'lucide-react';

const navLinks = [
  { href: "/esmaltamos/", text: "Inicio" },
  { href: "/esmaltamos/trabajos.html", text: "Trabajos" },
  { href: "/esmaltamos/servicios.html", text: "Servicios" },
  { href: "/esmaltamos/contacto.html", text: "Contacto" },
];

export default function NavBar() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, [isMenuOpen]);

  const getLinkClass = (href) => {
    const baseClasses = "transition-colors duration-300 tracking-wide font-medium";
    // Comprueba si la ruta actual es la misma que la del enlace.
    // El caso de "Inicio" es especial porque puede ser "/" o "/index.html".
    const isActive = currentPath === href || (href === "/esmaltamos/" && currentPath.endsWith("/index.html"));
    return isActive ? `${baseClasses} text-primary` : `${baseClasses} text-muted-foreground hover:text-foreground`;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm text-foreground shadow-md z-50 font-s">
        <div className="container mx-auto flex items-center justify-between p-4 h-20">
          {/* Botón de menú para móvil */}
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2" aria-label="Abrir menú">
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
      <div onClick={() => setIsMenuOpen(false)} className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

      {/* Menú lateral (Drawer) */}
      <div className={`fixed top-0 left-0 h-full w-90 bg-white text-black dark:bg-black dark:text-white dark:border-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-border h-20">
          <Logo className="h-12 w-auto" />
          <span className="text-2xl font-medium">EsmaltamostuBañera</span>
          <button onClick={() => setIsMenuOpen(false)} className="p-2" aria-label="Cerrar menú">
            <ChevronLeft className="h-6 w-6" />
          </button>
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
      </div>
    </>
  );
}
