import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { AnimationsInit } from "@/components/animations/AnimationsInit";

const cormorant = Cormorant_Garamond({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OBRA-PRIMA | Constructora de Alto Estándar en Buenos Aires",
  description:
    "Viviendas, reformas, ampliaciones y proyectos comerciales de alto estándar. Más de 25 años construyendo en Buenos Aires. Pedí tu presupuesto gratis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        <CustomCursor />
        <AnimationsInit />
        {children}
      </body>
    </html>
  );
}
