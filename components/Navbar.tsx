"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const WA_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5491100000000"}?text=Hola%2C%20quiero%20consultar%20por%20un%20presupuesto%20con%20OBRA-PRIMA`;

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20"
          aria-label="Navegación principal"
        >
          <a href="#" aria-label="OBRA-PRIMA — inicio">
            <Image
              src="/images/obra-prima-logo.webp"
              alt="OBRA-PRIMA logo"
              width={110}
              height={79}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-foreground-muted hover:text-foreground tracking-wide transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
              >
                {label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold bg-accent text-black px-5 py-2.5 rounded-full hover:opacity-90 transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
            >
              Presupuesto GRATIS
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="lg:hidden p-2 text-foreground cursor-pointer"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-background/96 backdrop-blur-md flex flex-col items-center justify-center gap-10 transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="text-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
            }}
          >
            {label}
          </a>
        ))}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold bg-accent text-black px-8 py-3 rounded-full hover:opacity-90 transition-colors duration-200 mt-4 cursor-pointer"
          style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
        >
          Presupuesto gratis
        </a>
      </div>
    </>
  );
}
