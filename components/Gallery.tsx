import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextSplit } from "@/components/animations/TextSplit";
import { RevealImage } from "@/components/animations/RevealImage";

interface GalleryImage {
  src: string;
  alt: string;
  wide?: boolean;
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    alt: "Residencia moderna de alto estándar — obra OBRA-PRIMA",
    wide: true,
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    alt: "Vivienda contemporánea exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80",
    alt: "Construcción residencial premium",
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    alt: "Proyecto arquitectónico de alta gama",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Detalle constructivo premium",
  },
  {
    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
    alt: "Interior de vivienda terminada",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    alt: "Exterior de residencia de lujo",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Vivienda con jardín y pileta",
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    alt: "Ampliación residencial terminada",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-background py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p
              className="text-accent text-xl tracking-[0.2em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-barlow), system-ui, sans-serif",
              }}
            >
              Portfolio
            </p>
          </ScrollReveal>
          <TextSplit
            text="Nuestras obras"
            as="h2"
            className="text-foreground"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {images.map(({ src, alt, wide }, i) => (
            <RevealImage
              key={src}
              direction="up"
              duration={1.1}
              delay={Math.min(i * 0.07, 0.35)}
              className={`relative overflow-hidden group ${
                wide
                  ? "md:col-span-2 lg:col-span-2 aspect-video"
                  : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                sizes={
                  wide
                    ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn
                  size={40}
                  className="text-white"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
            </RevealImage>
          ))}
        </div>
      </div>
    </section>
  );
}
