import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { AnimationsInit } from "@/components/animations/AnimationsInit";

const barlowCondensed = Barlow_Condensed({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = Barlow({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
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
    <html lang="es" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body>
        <CustomCursor />
        <AnimationsInit />
        {children}
      </body>
    </html>
  );
}
