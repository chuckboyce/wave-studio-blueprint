import { Button } from "@/components/ui/button";
import { Globe, Database, Brain, Sparkles, ArrowRight } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollFadeIn();
  const services = [
    {
      icon: Globe,
      title: "Website Refresh",
      description: "Pay What You Want redesign with LLM-ready optimization, mobile-first design, and modern performance.",
      cta: "Start Your Refresh",
      href: "#cta-refresh",
      highlight: true,
    },
    {
      icon: Database,
      title: "SmallBiz CRM Setup",
      description: "Branded GoHighLevel platform setup with automations, funnels, and customer management systems.",
      cta: "Launch My CRM",
      href: "#contact",
    },
    {
      icon: Brain,
      title: "AI Business Audit",
      description: "Identify AI and automation opportunities for growth. Discover how technology can transform your operations.",
      cta: "Get Your Audit",
      href: "#contact",
    },
    {
      icon: Sparkles,
      title: "Custom Solutions",
      description: "Integrations, middleware, and process automation tailored to your unique business needs.",
      cta: "Book a Consult",
      href: "#contact",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className={`scroll-fade-in ${headerVisible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16`}>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Services That <span className="bg-gradient-wave bg-clip-text text-transparent">Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From websites to full-stack automation, we build the technology infrastructure your business needs to compete and grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const { ref, isVisible } = useScrollFadeIn();
            const { ref: animRef, isInView } = useInViewAnimation();
            // Animate first 3 service icons
            const shouldAnimate = index < 3;
            const animationClass = index === 0 ? 'animate-breathe' : index === 1 ? 'animate-breathe-slow' : index === 2 ? 'animate-breathe' : '';
            
            return (
              <div
                key={index}
                ref={ref}
                className={`scroll-fade-in ${isVisible ? 'is-visible' : ''} group bg-card rounded-2xl p-8 shadow-card hover-lift hover-scale ${
                  service.highlight ? "border-2 border-primary/30" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.highlight && (
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                    Featured Offer
                  </div>
                )}
                
                <div 
                  ref={animRef}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                >
                  <service.icon 
                    className={`w-6 h-6 text-primary ${
                      shouldAnimate ? `${animationClass} ${!isInView ? 'animation-paused' : ''}` : ''
                    }`}
                  />
                </div>

              <h3 className="font-heading text-2xl font-bold mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <Button
                variant={service.highlight ? "default" : "outline"}
                className={service.highlight ? "shadow-wave group/btn" : "group/btn"}
                asChild
              >
                <a href={service.href} aria-label={service.cta}>
                  {service.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
