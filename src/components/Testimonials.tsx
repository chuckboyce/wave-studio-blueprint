import { Quote } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const Testimonials = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollFadeIn();
  const testimonials = [
    {
      quote: "FoundryWave transformed our outdated website into a modern, AI-optimized platform. Our lead generation has tripled in just two months.",
      author: "Sarah Mitchell",
      role: "Real Estate Agent",
      company: "Mitchell Properties",
    },
    {
      quote: "The SmallBiz CRM setup was a game-changer. We went from spreadsheets to a fully automated sales pipeline in weeks, not months.",
      author: "David Chen",
      role: "Insurance Broker",
      company: "Chen & Associates",
    },
    {
      quote: "Their AI audit revealed automation opportunities we never knew existed. We're now saving 15 hours a week on repetitive tasks.",
      author: "Maria Rodriguez",
      role: "Marketing Consultant",
      company: "Rodriguez Consulting",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className={`scroll-fade-in ${headerVisible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16`}>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Real Results from <span className="bg-gradient-wave bg-clip-text text-transparent">Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how we've helped small businesses transform their technology and grow their operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const { ref, isVisible } = useScrollFadeIn();
            return (
              <div
                key={index}
                ref={ref}
                className={`scroll-fade-in ${isVisible ? 'is-visible' : ''} bg-card rounded-2xl p-8 shadow-card hover-lift hover-scale`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              
              <p className="text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border pt-6">
                <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-primary font-medium mt-1">{testimonial.company}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
