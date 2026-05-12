import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { TextSplit } from "@/components/animations/TextSplit";

interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Contratamos a OBRA-PRIMA para ampliar nuestra casa y el resultado superó lo que imaginábamos. Cumplieron el plazo y el presupuesto al pie de la letra.",
    name: "Marcelo R.",
    detail: "Ampliación residencial · Belgrano",
    initials: "MR",
  },
  {
    quote:
      "Lo que más valoro es la comunicación. En todo momento sabíamos qué se estaba haciendo y por qué. Nada quedó librado al azar.",
    name: "Carolina V.",
    detail: "Reforma integral · San Isidro",
    initials: "CV",
  },
  {
    quote:
      "Construir desde cero da miedo. Con OBRA-PRIMA el proceso fue claro, ordenado y sin sorpresas desagradables. Lo recomendaría sin dudarlo.",
    name: "Fabián T.",
    detail: "Vivienda nueva · Tigre",
    initials: "FT",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-surface py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p
              className="text-accent text-xl tracking-[0.2em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-barlow), system-ui, sans-serif",
              }}
            >
              Lo que dicen
            </p>
          </ScrollReveal>
          <TextSplit text="Testimonios" as="h2" className="text-foreground" />
        </div>

        {/* Desktop stagger grid */}
        <StaggerReveal
          className="hidden lg:grid lg:grid-cols-3 gap-6"
          stagger={0.14}
          y={50}
        >
          {testimonials.map(({ quote, name, detail, initials }) => (
            <article
              key={name}
              className="bg-muted border border-border p-8 lg:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(201,169,110,0.06)]"
            >
              <div
                className="text-accent leading-none mb-4 select-none"
                style={{
                  fontFamily: "var(--font-barlow-condensed), sans-serif",
                  fontSize: "5rem",
                  lineHeight: 0.8,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote
                className="text-foreground-muted leading-relaxed flex-1 mb-8"
                style={{
                  fontFamily: "var(--font-barlow), system-ui, sans-serif",
                }}
              >
                {quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span
                    className="text-black text-xl font-semibold"
                    style={{
                      fontFamily: "var(--font-barlow), system-ui, sans-serif",
                    }}
                  >
                    {initials}
                  </span>
                </div>
                <div>
                  <h5 className="text-foreground">{name}</h5>
                  <p
                    className="text-foreground-muted text-xl mt-0.5"
                    style={{
                      fontFamily: "var(--font-barlow), system-ui, sans-serif",
                    }}
                  >
                    {detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </StaggerReveal>

        {/* Mobile scroll-snap carousel */}
        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-6 -mx-6 px-6 pb-4">
          {testimonials.map(({ quote, name, detail, initials }) => (
            <article
              key={name}
              className="flex-shrink-0 w-[82vw] sm:w-[65vw] snap-start bg-muted border border-border p-8 flex flex-col"
            >
              <div
                className="text-accent leading-none mb-4 select-none"
                style={{
                  fontFamily: "var(--font-barlow-condensed), sans-serif",
                  fontSize: "5rem",
                  lineHeight: 0.8,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote
                className="text-foreground-muted leading-relaxed flex-1 mb-8"
                style={{
                  fontFamily: "var(--font-barlow), system-ui, sans-serif",
                }}
              >
                {quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-black text-xl font-semibold"
                    style={{
                      fontFamily: "var(--font-barlow), system-ui, sans-serif",
                    }}
                  >
                    {initials}
                  </span>
                </div>
                <div>
                  <h5 className="text-foreground">{name}</h5>
                  <p
                    className="text-foreground-muted text-xl mt-0.5"
                    style={{
                      fontFamily: "var(--font-barlow), system-ui, sans-serif",
                    }}
                  >
                    {detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
