import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 100vh)
      const scrolled = window.scrollY > window.innerHeight;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Button
        size="lg"
        className="shadow-2xl transition-transform hover:scale-105 group"
        asChild
      >
        <a href="#cta-refresh" aria-label="Start your website refresh">
          Start Your Refresh
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
