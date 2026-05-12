"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextSplit } from "@/components/animations/TextSplit";

const WA_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5491100000000"}?text=Hola%2C%20quiero%20consultar%20por%20un%20presupuesto%20con%20OBRA-PRIMA`;

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  tipoProyecto: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  tipoProyecto?: string;
  mensaje?: string;
}

const projectTypes = ["Vivienda", "Reforma", "Ampliación", "Comercial", "Otro"];

const inputBase =
  "w-full bg-surface-2 border border-border text-text-primary px-4 py-3 focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-text-muted/40";

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.nombre.trim()) errs.nombre = "El nombre es requerido.";
    if (!form.email.trim()) {
      errs.email = "El email es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Ingresá un email válido.";
    }
    if (!form.tipoProyecto) errs.tipoProyecto = "Seleccioná un tipo de proyecto.";
    if (!form.mensaje.trim()) errs.mensaje = "El mensaje es requerido.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    console.log("OBRA-PRIMA — Consulta recibida:", form);
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  const bodyFont = { fontFamily: "var(--font-barlow), system-ui, sans-serif" };

  return (
    <section id="contacto" className="bg-bg py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-accent text-xs tracking-[0.2em] uppercase mb-4" style={bodyFont}>
              Contacto
            </p>
          </ScrollReveal>
          <TextSplit
            text="Hablemos de tu proyecto"
            as="h2"
            className="text-text-primary"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            {submitted ? (
              <div className="bg-surface-2 border border-accent/30 p-8">
                <h4 className="text-accent mb-3">¡Consulta enviada!</h4>
                <p className="text-text-muted leading-relaxed" style={bodyFont}>
                  Gracias por contactarte con OBRA-PRIMA. Te respondemos dentro
                  de las próximas 24 horas hábiles. Si necesitás una respuesta
                  inmediata, podés escribirnos por WhatsApp.
                </p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 text-accent text-sm hover:underline cursor-pointer"
                  style={bodyFont}
                >
                  Escribir por WhatsApp →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="text-text-muted text-sm mb-2 block"
                    style={bodyFont}
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre y apellido"
                    className={inputBase}
                    style={bodyFont}
                    autoComplete="name"
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-xs mt-1" style={bodyFont}>
                      {errors.nombre}
                    </p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-text-muted text-sm mb-2 block"
                      style={bodyFont}
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className={inputBase}
                      style={bodyFont}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1" style={bodyFont}>
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="text-text-muted text-sm mb-2 block"
                      style={bodyFont}
                    >
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+54 11 0000-0000"
                      className={inputBase}
                      style={bodyFont}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="tipoProyecto"
                    className="text-text-muted text-sm mb-2 block"
                    style={bodyFont}
                  >
                    Tipo de proyecto *
                  </label>
                  <select
                    id="tipoProyecto"
                    name="tipoProyecto"
                    value={form.tipoProyecto}
                    onChange={handleChange}
                    className={`${inputBase} cursor-pointer`}
                    style={bodyFont}
                  >
                    <option value="">Seleccioná una opción</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.tipoProyecto && (
                    <p className="text-red-400 text-xs mt-1" style={bodyFont}>
                      {errors.tipoProyecto}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="text-text-muted text-sm mb-2 block"
                    style={bodyFont}
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Contanos sobre tu proyecto..."
                    rows={4}
                    className={`${inputBase} resize-none`}
                    style={bodyFont}
                  />
                  {errors.mensaje && (
                    <p className="text-red-400 text-xs mt-1" style={bodyFont}>
                      {errors.mensaje}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-black font-semibold text-sm tracking-[0.12em] uppercase px-8 py-4 hover:bg-accent-hover transition-colors duration-200 cursor-pointer"
                  style={bodyFont}
                >
                  Enviar consulta
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h4 className="text-text-primary mb-8">Información de contacto</h4>
              <div className="space-y-5">
                {(
                  [
                    {
                      Icon: Phone,
                      label: "+54 11 0000-0000",
                      href: "tel:+541100000000",
                    },
                    {
                      Icon: Mail,
                      label: "contacto@obra-prima.com.ar",
                      href: "mailto:contacto@obra-prima.com.ar",
                    },
                    {
                      Icon: MapPin,
                      label: "Av. del Ejemplo 1234, CABA",
                      href: undefined,
                    },
                    {
                      Icon: Clock,
                      label: "Lunes a viernes, 9 a 18hs",
                      href: undefined,
                    },
                  ] as const
                ).map(({ Icon, label, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <Icon
                      size={17}
                      className="text-accent flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    {href ? (
                      <a
                        href={href}
                        className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                        style={bodyFont}
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="text-text-muted text-sm" style={bodyFont}>
                        {label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-text-muted text-sm mb-4" style={bodyFont}>
                Seguinos en redes
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="OBRA-PRIMA en Instagram"
                  className="w-10 h-10 border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors duration-200 cursor-pointer"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="OBRA-PRIMA en LinkedIn"
                  className="w-10 h-10 border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors duration-200 cursor-pointer"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-surface-2 border border-border p-7">
              <p className="text-text-muted text-sm mb-4" style={bodyFont}>
                ¿Preferís hablar directamente? Te atendemos por WhatsApp.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:underline cursor-pointer"
                style={bodyFont}
              >
                Escribir por WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
