import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import heroImage from "@/assets/hero-wave.jpg";

const FeaturedOffer = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollFadeIn();
  const { ref: sliderRef, isVisible: sliderVisible } = useScrollFadeIn();
  const { ref: cardRef, isVisible: cardVisible } = useScrollFadeIn();

  const features = [
    "Complete website redesign",
    "Mobile-first optimization",
    "Schema markup & SEO setup",
    "LLM-ready content structure",
    "Performance optimization",
    "Basic analytics integration",
  ];

  return (
    <section id="cta-refresh" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className={`scroll-fade-in ${headerVisible ? 'is-visible' : ''} text-center mb-12`}>
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Limited Time Offer
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Pay What You Want
              <br />
              <span className="bg-gradient-wave bg-clip-text text-transparent">
                Website Refresh
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a professional, AI-optimized website redesign. You decide what it's worth.
            </p>
          </div>

          {/* Before/After Example */}
          <div ref={sliderRef} className={`scroll-fade-in ${sliderVisible ? 'is-visible' : ''} mb-12`}>
            <BeforeAfterSlider
              beforeImage={heroImage}
              afterImage={heroImage}
              beforeAlt="Before website redesign - outdated design"
              afterAlt="After website redesign - modern AI-optimized design"
            />
          </div>

          {/* Offer Card */}
          <div ref={cardRef} className={`scroll-fade-in ${cardVisible ? 'is-visible' : ''} bg-gradient-to-br from-card to-secondary/30 rounded-3xl p-8 sm:p-12 shadow-wave border border-border/50`}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: What's Included */}
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-card-foreground">What's Included</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: CTA */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-wave rounded-2xl p-8 text-white">
                  <div className="mb-6">
                    <p className="text-sm opacity-90 mb-2">Starting from</p>
                    <div className="text-5xl font-bold mb-2">$0</div>
                    <p className="text-sm opacity-90">You decide the value</p>
                  </div>
                  
                  <Button
                    size="lg"
                    className="w-full bg-white text-primary hover:bg-white/90 font-semibold shadow-lg group"
                    asChild
                  >
                    <a href="#contact" aria-label="Claim your website refresh offer">
                      Claim Your Refresh
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>

                  <p className="text-xs text-center mt-4 opacity-75">
                    No credit card required · 100% satisfaction guarantee
                  </p>
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Bonus:</strong> All refresh clients get priority access to our managed hosting platform at just $37/month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffer;
