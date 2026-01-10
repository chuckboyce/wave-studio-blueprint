import logo from "@/assets/logo.webp";
import maxwellLogo from "@/assets/logos/maxwell-football-club.png";
const Footer = () => {
  return <footer className="bg-[hsl(215,100%,8%)] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Wave Divider */}
        <div className="mb-12">
          <svg className="w-full h-12 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
            <path fill="hsl(193, 100%, 42%)" d="M0,32L48,37.3C96,43,192,53,288,56C384,59,480,53,576,48C672,43,768,37,864,37.3C960,37,1056,43,1152,45.3C1248,48,1344,48,1392,48L1440,48L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          </svg>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="FoundryWave" className="h-10 w-auto brightness-0 invert mb-4" />
            <p className="text-white/70 mb-4 max-w-md">
              Building the future, one small business at a time. AI-first websites, CRMs, and automation systems that make small businesses run like big ones.
            </p>
            <p className="text-sm text-white/50">
              Powered by <a href="https://smallbiz.com" className="text-primary hover:text-primary/80">SmallBiz.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#cta-refresh" className="hover:text-primary transition-colors">Website Refresh</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">CRM Setup</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">AI Audit</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Custom Solutions</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner Section */}
        <div className="border-t border-white/10 pt-8 mb-8 flex flex-col items-center gap-4">
          <p className="text-white/70 text-center text-xl">The Official Website Partner of the Robert W. Maxwell Football Club</p>
          <a href="https://maxwellfootballclub.org" target="_blank" rel="noopener noreferrer">
            <img src={maxwellLogo} alt="Maxwell Football Club" className="h-40 w-auto hover:opacity-80 transition-opacity" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} FoundryWave. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;