import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Process />
        <WhyUs />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
