"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

const serviceLinks = ["Viviendas", "Reformas", "Ampliaciones", "Comercial"];

const bodyFont = { fontFamily: "var(--font-barlow), system-ui, sans-serif" };

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-5">
              <span
                className="text-accent block"
                style={{
                  fontFamily: "var(--font-barlow-condensed), sans-serif",
                  fontSize: "1.414rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                OBRA-PRIMA
              </span>
              <span
                style={{ ...bodyFont, fontSize: "1.25rem", color: "rgba(255,255,255,0.50)" }}
              >
                Construimos lo que imaginás.
              </span>
            </div>
            <p
              className="leading-relaxed max-w-[220px]"
              style={{ ...bodyFont, color: "rgba(255,255,255,0.60)" }}
            >
              Constructora argentina especializada en viviendas, reformas,
              ampliaciones y proyectos comerciales de alto estándar.
            </p>
          </div>

          <div>
            <h6
              className="text-xl tracking-[0.18em] uppercase mb-5 font-semibold"
              style={{ ...bodyFont, color: "rgba(255,255,255,0.40)" }}
            >
              Navegación
            </h6>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-accent transition-colors duration-200 cursor-pointer"
                    style={{ ...bodyFont, color: "rgba(255,255,255,0.72)" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.72)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6
              className="text-xl tracking-[0.18em] uppercase mb-5 font-semibold"
              style={{ ...bodyFont, color: "rgba(255,255,255,0.40)" }}
            >
              Servicios
            </h6>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="transition-colors duration-200 cursor-pointer"
                    style={{ ...bodyFont, color: "rgba(255,255,255,0.72)" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.72)")}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6
              className="text-xl tracking-[0.18em] uppercase mb-5 font-semibold"
              style={{ ...bodyFont, color: "rgba(255,255,255,0.40)" }}
            >
              Contacto
            </h6>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-accent flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href="tel:+541100000000"
                  className="transition-colors duration-200"
                  style={{ ...bodyFont, color: "rgba(255,255,255,0.72)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.72)")}
                >
                  +54 11 0000-0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="text-accent flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href="mailto:contacto@obra-prima.com.ar"
                  className="transition-colors duration-200"
                  style={{ ...bodyFont, color: "rgba(255,255,255,0.72)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.72)")}
                >
                  contacto@obra-prima.com.ar
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-accent flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span style={{ ...bodyFont, color: "rgba(255,255,255,0.72)" }}>
                  Av. del Ejemplo 1234, CABA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xl" style={{ ...bodyFont, color: "rgba(255,255,255,0.40)" }}>
            © 2025 OBRA-PRIMA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xl transition-colors duration-200 cursor-pointer"
              style={{ ...bodyFont, color: "rgba(255,255,255,0.40)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.40)")}
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-xl transition-colors duration-200 cursor-pointer"
              style={{ ...bodyFont, color: "rgba(255,255,255,0.40)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.40)")}
            >
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
