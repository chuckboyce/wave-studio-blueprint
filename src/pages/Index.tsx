import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import FeaturedOffer from "@/components/FeaturedOffer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
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

      {/* Schema.org JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "FoundryWave",
          "url": "https://foundrywave.studio",
          "logo": "https://foundrywave.studio/logo.png",
          "description": "AI-first websites, CRMs, and automation systems for small businesses. Building the future, one small business at a time.",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "DE, PA, NJ"
          },
          "sameAs": [
            "https://chuckboyce.com",
            "https://smallbiz.com"
          ],
          "areaServed": ["Delaware", "Pennsylvania", "New Jersey"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Technology Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Website Refresh",
                  "description": "Pay What You Want website redesign with LLM-ready optimization"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SmallBiz CRM Setup",
                  "description": "Branded GoHighLevel platform setup with automations"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Business Audit",
                  "description": "Identify AI and automation opportunities for growth"
                }
              }
            ]
          }
        })}
      </script>
    </div>
  );
};

export default Index;
