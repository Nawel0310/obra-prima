import Image from "next/image";
import { ParallaxEl } from "@/components/animations/ParallaxEl";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextSplit } from "@/components/animations/TextSplit";

const WA_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5491100000000"}?text=Hola%2C%20quiero%20consultar%20por%20un%20presupuesto%20con%20OBRA-PRIMA`;

export default function CTABanner() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <ParallaxEl className="absolute inset-0 scale-[1.2]" speed={0.5}>
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construcción de alto estándar — OBRA-PRIMA"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/72" />
      </ParallaxEl>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 lg:px-8">
        <TextSplit
          text="Tu próxima obra empieza con una conversación."
          as="h2"
          className="text-text-primary mb-6"
          delay={0.05}
        />

        <ScrollReveal delay={0.2}>
          <p
            className="text-text-muted text-lg leading-relaxed mb-12"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            En OBRA-PRIMA te acompañamos desde el primer boceto hasta la llave
            en mano.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent text-black font-semibold text-sm tracking-[0.18em] uppercase px-12 py-5 hover:bg-accent-hover hover:scale-[1.03] transition-all duration-200 cursor-none"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            Pedí tu presupuesto gratis
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
