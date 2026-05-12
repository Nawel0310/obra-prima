import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ParallaxEl } from "@/components/animations/ParallaxEl";

const WA_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5491100000000"}?text=Hola%2C%20quiero%20consultar%20por%20un%20presupuesto%20con%20OBRA-PRIMA`;

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Inicio"
    >
      {/* Parallax background */}
      <ParallaxEl
        className="absolute inset-0 scale-[1.25]"
        speed={0.55}
      >
        <Image
          src="/images/hero_background.webp"
          alt="Obra de construcción de alto estándar en Buenos Aires"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)",
          }}
        />
      </ParallaxEl>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-8 pb-28 lg:px-20 lg:pb-36 max-w-6xl">
        <h1
          className="mb-5"
          style={{ animation: "fade-in-up 0.9s ease-out 0.1s both" }}
        >
          <span className="block text-accent">OBRA-PRIMA</span>
          <span className="block text-background">
            Construimos lo que imaginás.
          </span>
        </h1>

        <p
          className="text-background/80 text-xl leading-relaxed max-w-lg mb-10"
          style={{
            fontFamily: "var(--font-barlow), system-ui, sans-serif",
            animation: "fade-in-up 0.9s ease-out 0.35s both",
          }}
        >
          Viviendas, reformas y proyectos comerciales de alto estándar en
          Buenos Aires.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{ animation: "fade-in-up 0.9s ease-out 0.6s both" }}
        >
          <a
            href="#servicios"
            className="inline-flex items-center justify-center bg-accent text-black font-semibold text-xl tracking-[0.12em] uppercase px-8 py-4 hover:opacity-90 transition-opacity duration-200"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
          >
            Ver servicios
          </a>
          <a
            href="#galeria"
            className="inline-flex items-center justify-center border border-accent text-accent font-semibold text-xl tracking-[0.12em] uppercase px-8 py-4 hover:bg-accent/10 transition-colors duration-200"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
          >
            Ver galería
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown
          size={32}
          className="text-accent"
          style={{ animation: "pulse-chevron 2.2s ease-in-out infinite" }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
