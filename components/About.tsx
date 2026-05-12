import Image from "next/image";
import { RevealImage } from "@/components/animations/RevealImage";
import { CountUp } from "@/components/animations/CountUp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextSplit } from "@/components/animations/TextSplit";

const stats = [
  { target: 25, suffix: "+", label: "Años de experiencia" },
  { target: 180, suffix: "+", label: "Obras terminadas" },
  { target: 100, suffix: "%", label: "Clientes satisfechos" },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-bg py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image with clip-path reveal */}
          <div className="relative order-2 lg:order-1">
            <RevealImage className="relative aspect-[4/5] lg:aspect-auto lg:h-[620px]">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80"
                alt="Equipo de OBRA-PRIMA en una obra de construcción de alto estándar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </RevealImage>
            <div
              className="absolute -bottom-5 -right-5 border border-accent/25 pointer-events-none hidden lg:block"
              style={{ width: "60%", height: "55%" }}
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Stats with CountUp */}
            <ScrollReveal className="grid grid-cols-3 gap-4 mb-12 pb-12 border-b border-border">
              {stats.map(({ target, suffix, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div
                    className="text-accent"
                    style={{
                      fontFamily: "var(--font-barlow-condensed), sans-serif",
                      fontSize: "clamp(1.75rem, 3vw, 2.827rem)",
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    <CountUp target={target} suffix={suffix} />
                  </div>
                  <div
                    className="text-text-muted text-sm mt-1 leading-snug"
                    style={{
                      fontFamily: "var(--font-barlow), system-ui, sans-serif",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p
                className="text-accent text-xs tracking-[0.2em] uppercase mb-4"
                style={{
                  fontFamily: "var(--font-barlow), system-ui, sans-serif",
                }}
              >
                Quiénes somos
              </p>
            </ScrollReveal>

            <div className="mb-8">
              <TextSplit
                text="Más de 25 años construyendo lo que importa."
                as="h2"
                className="text-text-primary"
                delay={0.15}
              />
            </div>

            <ScrollReveal
              delay={0.2}
              className="space-y-5 text-text-muted leading-relaxed"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
            >
              <p>
                OBRA-PRIMA nació hace más de 25 años con una convicción simple:
                que construir bien no debería ser difícil de conseguir. Desde
                entonces, cada obra lleva nuestra firma.
              </p>
              <p>
                Transformamos la visión de nuestros clientes en espacios reales,
                sin sorpresas ni atajos. Sabemos que construir es una de las
                decisiones más importantes de tu vida, y la tomamos con la misma
                seriedad que vos.
              </p>
              <p>
                Ser la constructora de referencia en Buenos Aires para quienes
                buscan calidad real, plazos cumplidos y una relación de confianza
                que dure más allá de la entrega.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="mt-10">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center border border-accent text-accent font-semibold text-sm tracking-[0.12em] uppercase px-8 py-4 hover:bg-accent/10 transition-colors duration-200 cursor-none"
                style={{
                  fontFamily: "var(--font-barlow), system-ui, sans-serif",
                }}
              >
                Hablemos de tu proyecto
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
