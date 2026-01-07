import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-wave.jpg";
import { useParallax } from "@/hooks/useParallax";
import NewsletterModal from "@/components/NewsletterModal";

// Media logos
import logoAbc from "@/assets/logos/abc.png";
import logoNbc from "@/assets/logos/nbc.png";
import logoCbs from "@/assets/logos/cbs.png";
import logoCnn from "@/assets/logos/cnn.png";
import logoFox from "@/assets/logos/fox.png";
import logoEntrepreneur from "@/assets/logos/entrepreneur.png";
import logoFastCompany from "@/assets/logos/fast-company.png";
import logoInfluencive from "@/assets/logos/influencive.png";
import logoInc from "@/assets/logos/inc.png";
const mediaLogos = [{
  src: logoAbc,
  alt: "ABC"
}, {
  src: logoNbc,
  alt: "NBC"
}, {
  src: logoCbs,
  alt: "CBS"
}, {
  src: logoCnn,
  alt: "CNN"
}, {
  src: logoFox,
  alt: "FOX"
}, {
  src: logoEntrepreneur,
  alt: "Entrepreneur"
}, {
  src: logoFastCompany,
  alt: "Fast Company"
}, {
  src: logoInfluencive,
  alt: "Influencive"
}, {
  src: logoInc,
  alt: "Inc."
}];
const Hero = () => {
  const parallaxOffset = useParallax(0.3);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  return (
    <>
    <NewsletterModal open={newsletterOpen} onOpenChange={setNewsletterOpen} />
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="FoundryWave digital transformation - AI-powered web design and business automation for small businesses" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,100%,8%)]/95 via-[hsl(215,80%,12%)]/90 to-[hsl(193,100%,42%)]/30" />
      </div>

      {/* Animated Wave Pattern with Parallax */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
      transform: `translateY(${parallaxOffset * 0.5}px)`
    }}>
        <svg className="absolute bottom-0 w-full h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="hsl(193, 100%, 42%)" fillOpacity="0.3" d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,154.7C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            <animate attributeName="d" dur="15s" repeatCount="indefinite" values="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,154.7C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,154.7C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your Unique Voice, Amplified at Scale</span>
            
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Modern Websites.
            <br />
            <span className="bg-gradient-wave bg-clip-text text-transparent">
              Smart Systems.
            </span>
            <br />
            Real Results.
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">We help businesses look better, run faster, and grow smarter</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-wave hover:shadow-xl transition-all group" asChild>
              <a href="#cta-refresh" aria-label="Start your website refresh">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => setNewsletterOpen(true)}
              aria-label="Join our newsletter"
            >
              Join Newsletter
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="mt-12 flex items-center justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Future Focused Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Small Business Focus</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Partnership Over Projects</span>
            </div>
          </div>

          {/* As Seen In */}
          <div className="mt-16 w-full">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-6">As Seen In</p>
            <div className="relative overflow-hidden">
              {/* Gradient masks for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[hsl(215,100%,8%)] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[hsl(215,100%,8%)] to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling container */}
              <div className="flex animate-marquee">
                {/* First set of logos */}
                <div className="flex items-center gap-12 px-6 shrink-0">
                  {mediaLogos.map(logo => <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-6 sm:h-8 w-auto opacity-70" />)}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-12 px-6 shrink-0">
                  {mediaLogos.map(logo => <img key={`${logo.alt}-dup`} src={logo.src} alt={logo.alt} className="h-6 sm:h-8 w-auto opacity-70" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
    </>
  );
};
export default Hero;