import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={logo} 
              alt="FoundryWave - AI-ready web design studio" 
              className="h-10 w-auto brightness-0 invert"
            />
          </a>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button variant="outline" size="sm" className="sm:size-default" asChild>
              <a href="#contact">Book a Consult</a>
            </Button>
            <Button size="sm" className="sm:size-default shadow-wave" asChild>
              <a href="#contact">Start Your Refresh</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
