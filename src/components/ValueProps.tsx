import { Sparkles, Heart, Handshake } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const ValueProps = () => {
  const values = [
    {
      icon: Sparkles,
      title: "AI-First Design",
      description: "Future-ready websites built to be read by humans and AI. LLM-optimized for the next generation of search.",
    },
    {
      icon: Heart,
      title: "Small Business Focus",
      description: "Simple, affordable, and effective solutions designed specifically for solopreneurs and independent professionals.",
    },
    {
      icon: Handshake,
      title: "Partnership Over Projects",
      description: "We're your long-term tech ally, committed to growing alongside your business for years to come.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const { ref, isVisible } = useScrollFadeIn();
            const { ref: animRef, isInView } = useInViewAnimation();
            return (
              <div
                key={index}
                ref={ref}
                className={`scroll-fade-in ${isVisible ? 'is-visible' : ''} group bg-card rounded-2xl p-8 shadow-card hover-lift`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  ref={animRef}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                >
                  <value.icon 
                    className={`w-7 h-7 text-primary ${
                      index === 0 ? `animate-breathe ${!isInView ? 'animation-paused' : ''}` : ''
                    }`}
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3 text-card-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
