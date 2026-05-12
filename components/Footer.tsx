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
    <footer className="bg-surface border-t border-border">
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
                className="text-text-muted"
                style={{ ...bodyFont, fontSize: "0.707rem" }}
              >
                Construimos lo que imaginás.
              </span>
            </div>
            <p
              className="text-text-muted text-sm leading-relaxed max-w-[220px]"
              style={bodyFont}
            >
              Constructora argentina especializada en viviendas, reformas,
              ampliaciones y proyectos comerciales de alto estándar.
            </p>
          </div>

          <div>
            <h6
              className="text-text-primary text-xs tracking-[0.18em] uppercase mb-5 font-semibold"
              style={bodyFont}
            >
              Navegación
            </h6>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200 cursor-pointer"
                    style={bodyFont}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6
              className="text-text-primary text-xs tracking-[0.18em] uppercase mb-5 font-semibold"
              style={bodyFont}
            >
              Servicios
            </h6>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200 cursor-pointer"
                    style={bodyFont}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6
              className="text-text-primary text-xs tracking-[0.18em] uppercase mb-5 font-semibold"
              style={bodyFont}
            >
              Contacto
            </h6>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={14}
                  className="text-accent flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href="tel:+541100000000"
                  className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                  style={bodyFont}
                >
                  +54 11 0000-0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={14}
                  className="text-accent flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href="mailto:contacto@obra-prima.com.ar"
                  className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                  style={bodyFont}
                >
                  contacto@obra-prima.com.ar
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="text-accent flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-text-muted text-sm" style={bodyFont}>
                  Av. del Ejemplo 1234, CABA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs" style={bodyFont}>
            © 2025 OBRA-PRIMA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-text-muted text-xs hover:text-accent transition-colors duration-200 cursor-pointer"
              style={bodyFont}
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-text-muted text-xs hover:text-accent transition-colors duration-200 cursor-pointer"
              style={bodyFont}
            >
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
