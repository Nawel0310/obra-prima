import {
  Clock,
  Receipt,
  Award,
  MessageCircle,
  Shield,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { TextSplit } from "@/components/animations/TextSplit";

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Clock,
    title: "Plazos que se cumplen",
    description: "Entregamos en fecha. Sin excusas, sin prórrogas unilaterales.",
  },
  {
    icon: Receipt,
    title: "Presupuestos sin sorpresas",
    description: "Lo que acordamos al inicio es lo que pagás al final.",
  },
  {
    icon: Award,
    title: "Materiales de primera",
    description:
      "Solo trabajamos con proveedores certificados y materiales de calidad comprobada.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación constante",
    description:
      "Sabés el estado de tu obra en todo momento, sin tener que perseguirnos.",
  },
  {
    icon: Shield,
    title: "25 años de trayectoria",
    description:
      "Experiencia que se ve en cada metro cuadrado que entregamos.",
  },
  {
    icon: Wrench,
    title: "Garantía de obra",
    description:
      "Respaldamos lo que construimos. Después de la entrega también estamos.",
  },
];

export default function WhyUs() {
  return (
    <section id="por-que-elegirnos" className="bg-bg py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p
              className="text-accent text-xs tracking-[0.2em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-barlow), system-ui, sans-serif",
              }}
            >
              Diferencial
            </p>
          </ScrollReveal>
          <TextSplit
            text="¿Por qué elegirnos?"
            as="h2"
            className="text-text-primary"
          />
        </div>

        <StaggerReveal
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          stagger={0.1}
          y={45}
        >
          {reasons.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="bg-surface border-l-2 border-accent pl-6 py-6 pr-6 flex gap-4 items-start transition-all duration-300 hover:bg-surface-2 hover:shadow-[0_8px_40px_rgba(201,169,110,0.06)]"
            >
              <Icon
                size={20}
                className="text-accent flex-shrink-0 mt-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <h5 className="text-text-primary mb-2">{title}</h5>
                <p
                  className="text-text-muted text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-barlow), system-ui, sans-serif",
                  }}
                >
                  {description}
                </p>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
