"use client"

import { useState } from "react"

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  const href =
    "https://wa.me/5491126794405?text=Hola%20Nahuel,%20quería%20consultarte%20sobre%20el%20desarrollo%20de%20una%20página%20o%20aplicación."

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <span
        className={`
          hidden sm:block
          bg-foreground text-background text-sm font-medium
          px-3 py-1.5 rounded-lg whitespace-nowrap
          shadow-lg pointer-events-none
          transition-all duration-200
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
        `}
        aria-hidden="true"
      >
        ¡Hablemos por WhatsApp!
      </span>

      {/* Botón circular */}
      <div className="relative">
        {/* Anillo de pulso */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

        {/* Círculo principal */}
        <div
          className={`
            relative w-14 h-14 rounded-full bg-[#25D366]
            flex items-center justify-center
            shadow-[0_4px_20px_rgba(37,211,102,0.45)]
            transition-transform duration-200
            ${hovered ? "scale-110" : "scale-100"}
          `}
        >
          {/* Ícono SVG oficial de WhatsApp */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8 fill-white"
            aria-hidden="true"
          >
            <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.35.633 4.636 1.836 6.638L2.667 29.333l6.874-1.803A13.29 13.29 0 0 0 16.003 29.333C23.365 29.333 29.333 23.362 29.333 16S23.365 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.617-1.536l-.402-.24-4.08 1.07 1.09-3.975-.262-.41A10.965 10.965 0 0 1 5.003 16c0-6.065 4.936-11 11-11s11 4.935 11 11-4.936 11-11 11zm6.03-8.236c-.33-.165-1.954-.964-2.257-1.074-.303-.11-.524-.165-.745.165-.22.33-.854 1.074-1.047 1.294-.193.22-.386.248-.716.083-.33-.165-1.394-.514-2.655-1.638-.981-.875-1.643-1.955-1.836-2.285-.193-.33-.02-.508.145-.673.149-.148.33-.385.495-.578.166-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.745-1.795-1.02-2.457-.27-.645-.543-.557-.745-.567l-.634-.011a1.217 1.217 0 0 0-.882.413c-.303.33-1.157 1.13-1.157 2.756s1.184 3.197 1.35 3.418c.165.22 2.33 3.56 5.648 4.993.79.34 1.406.543 1.886.696.792.252 1.513.216 2.083.131.636-.095 1.954-.799 2.23-1.571.275-.771.275-1.432.193-1.571-.083-.138-.303-.22-.634-.385z" />
          </svg>
        </div>
      </div>
    </a>
  )
}
