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

const TestimonialCard = ({
  quote,
  name,
  detail,
  initials,
  extraClass = "",
}: Testimonial & { extraClass?: string }) => (
  <article
    className={`flex flex-col transition-all duration-300 p-8 lg:p-10 ${extraClass}`}
    style={{
      backgroundColor: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(255,255,255,0.12)",
    }}
  >
    <div
      className="leading-none mb-4 select-none"
      style={{
        fontFamily: "var(--font-barlow-condensed), sans-serif",
        fontSize: "5rem",
        lineHeight: 0.8,
        color: "var(--color-accent)",
      }}
      aria-hidden="true"
    >
      &ldquo;
    </div>
    <blockquote
      className="leading-relaxed flex-1 mb-8"
      style={{
        fontFamily: "var(--font-barlow), system-ui, sans-serif",
        color: "rgba(255,255,255,0.80)",
      }}
    >
      {quote}
    </blockquote>
    <div className="flex items-center gap-4">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "var(--color-accent)" }}
        aria-hidden="true"
      >
        <span
          className="text-xl font-semibold"
          style={{
            fontFamily: "var(--font-barlow), system-ui, sans-serif",
            color: "var(--color-primary)",
          }}
        >
          {initials}
        </span>
      </div>
      <div>
        <h5 className="text-background">{name}</h5>
        <p
          className="text-xl mt-0.5"
          style={{
            fontFamily: "var(--font-barlow), system-ui, sans-serif",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {detail}
        </p>
      </div>
    </div>
  </article>
);

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-24 lg:py-36"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p
              className="text-accent text-xl tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
            >
              Lo que dicen
            </p>
          </ScrollReveal>
          <TextSplit text="Testimonios" as="h2" className="text-background" />
        </div>

        {/* Desktop */}
        <StaggerReveal
          className="hidden lg:grid lg:grid-cols-3 gap-6"
          stagger={0.14}
          y={50}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </StaggerReveal>

        {/* Mobile carousel */}
        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-6 -mx-6 px-6 pb-4">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              {...t}
              extraClass="flex-shrink-0 w-[82vw] sm:w-[65vw] snap-start"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
