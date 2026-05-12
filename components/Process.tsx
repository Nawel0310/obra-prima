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
    <section
      id="proceso"
      className="py-24 lg:py-36"
      style={{
        background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <ScrollReveal>
            <p
              className="text-accent text-xl tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
            >
              Cómo trabajamos
            </p>
          </ScrollReveal>
          <TextSplit
            text="Nuestro proceso"
            as="h2"
            className="text-background"
          />
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-[82px] left-[12.5%] right-[12.5%] h-px z-0"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          />
          <LineReveal className="hidden lg:block absolute top-[82px] left-[12.5%] right-[12.5%] h-px z-0 bg-accent/55" />

          <StaggerReveal
            className="grid grid-cols-1 lg:grid-cols-4 gap-14 lg:gap-8"
            stagger={0.14}
            y={40}
            delay={0.2}
          >
            {steps.map(({ number, icon: Icon, title, description }) => (
              <div
                key={number}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div
                  className="leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.18)",
                  }}
                  aria-hidden="true"
                >
                  {number}
                </div>

                <div
                  className="mt-2 mb-6 w-[52px] h-[52px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>

                <h5 className="text-background mb-3">{title}</h5>
                <p
                  className="text-xl leading-relaxed max-w-[220px]"
                  style={{
                    fontFamily: "var(--font-barlow), system-ui, sans-serif",
                    color: "rgba(255,255,255,0.72)",
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
