import { MessageSquare, FileText, HardHat, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { LineReveal } from "@/components/animations/LineReveal";
import { TextSplit } from "@/components/animations/TextSplit";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulta",
    description:
      "Escuchamos tu proyecto, entendemos tu visión y respondemos todas tus dudas sin compromiso.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Presupuesto",
    description:
      "Elaboramos un presupuesto detallado, transparente y ajustado a tu realidad.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Obra",
    description:
      "Ejecutamos cada etapa con materiales de calidad, cronograma respetado y comunicación constante.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Entrega",
    description:
      "Entregamos el espacio terminado, revisado y listo para usar. Con garantía incluida.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-surface py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <ScrollReveal>
            <p
              className="text-accent text-xs tracking-[0.2em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
              }}
            >
              Cómo trabajamos
            </p>
          </ScrollReveal>
          <TextSplit
            text="Nuestro proceso"
            as="h2"
            className="text-text-primary"
          />
        </div>

        <div className="relative">
          {/* Background line (static, low opacity) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-accent/12" />
          {/* Animated line */}
          <LineReveal className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-accent/45" />

          <StaggerReveal
            className="grid grid-cols-1 lg:grid-cols-4 gap-14 lg:gap-8"
            stagger={0.14}
            y={40}
            delay={0.2}
          >
            {steps.map(({ number, icon: Icon, title, description }) => (
              <div
                key={number}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6 flex flex-col items-center">
                  <div
                    className="text-accent/15 absolute -top-9 left-1/2 -translate-x-1/2 leading-none select-none pointer-events-none"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "5.5rem",
                      fontWeight: 700,
                    }}
                    aria-hidden="true"
                  >
                    {number}
                  </div>
                  <div className="relative z-10 w-[52px] h-[52px] rounded-full bg-bg border border-accent/50 flex items-center justify-center">
                    <Icon
                      size={22}
                      className="text-accent"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h5 className="text-text-primary mb-3">{title}</h5>
                <p
                  className="text-text-muted text-sm leading-relaxed max-w-[220px]"
                  style={{
                    fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
