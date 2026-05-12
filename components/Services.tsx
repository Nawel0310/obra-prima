"use client";

import { Home, Hammer, Maximize2, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { TextSplit } from "@/components/animations/TextSplit";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Viviendas",
    description:
      "Construcción residencial desde cero. Materiales de primera, plazos respetados y atención al detalle en cada etapa.",
  },
  {
    icon: Hammer,
    title: "Reformas",
    description:
      "Renovación integral de espacios existentes. Transformamos lo que tenés en lo que siempre quisiste.",
  },
  {
    icon: Maximize2,
    title: "Ampliaciones",
    description:
      "Sumamos metros con continuidad estética y estructural al diseño original de tu propiedad.",
  },
  {
    icon: Building2,
    title: "Comercial",
    description:
      "Locales, oficinas y espacios de trabajo pensados para funcionar bien y representar bien a tu marca.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-36" style={{ backgroundColor: "var(--color-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p
              className="text-accent text-xl tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
            >
              Lo que hacemos
            </p>
          </ScrollReveal>
          <TextSplit
            text="Nuestros servicios"
            as="h2"
            className="text-background"
          />
        </div>

        <StaggerReveal
          className="grid md:grid-cols-2 gap-6"
          stagger={0.12}
          y={60}
        >
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(35,87,212,0.35)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,233,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              <div className="mb-6">
                <Icon
                  size={40}
                  className="text-accent"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h4 className="text-background mb-3">{title}</h4>
              <p
                className="leading-relaxed mb-6"
                style={{
                  fontFamily: "var(--font-barlow), system-ui, sans-serif",
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                {description}
              </p>
              <span
                className="text-accent text-xl tracking-wide inline-block group-hover:translate-x-1.5 transition-transform duration-200"
                style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
              >
                Ver más →
              </span>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
