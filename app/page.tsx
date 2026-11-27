import { About } from "@/components/about";
import { Categories } from "@/components/categories";
import { Contact } from "@/components/contact";
import { Finder } from "@/components/finder";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Navbar } from "@/components/navbar";
import { Products } from "@/components/products";
import { SiteProvider } from "@/components/site-state";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Why } from "@/components/why";

export default function HomePage() {
  return (
    <SiteProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <Products />
        <Why />
        <Finder />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </SiteProvider>
  );
}
