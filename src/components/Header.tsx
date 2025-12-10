import { Phone, Mail, MapPin, Menu, X, TrafficCone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="tel:+61412345678" className="flex items-center gap-1 sm:gap-2 hover:text-accent transition-colors">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline sm:inline">+61 4 1234 5678</span>
            </a>
            <a href="mailto:info@avdtraffic.com.au" className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@avdtraffic.com.au</span>
            </a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Adelaide, SA</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-2 sm:gap-3">
            {/* Logo with animated traffic cone */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-lg flex items-center justify-center animate-pulse-glow">
              <TrafficCone className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground animate-cone-bounce" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground text-sm sm:text-lg leading-tight">AVD Traffic</p>
              <p className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-wider">Solutions</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-foreground hover:text-accent transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="accent" size="lg" className="shadow-neon">
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-medium text-foreground hover:text-accent transition-colors py-2 flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {item.label}
                </a>
              ))}
              <Button variant="accent" className="mt-2 shadow-neon">
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;