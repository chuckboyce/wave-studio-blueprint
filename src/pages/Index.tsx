import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import FeaturedOffer from "@/components/FeaturedOffer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { initSmoothScrolling } from "@/lib/smoothScroll";

const Index = () => {
  useEffect(() => {
    initSmoothScrolling();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Testimonials />
        <FeaturedOffer />
        <Services />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
