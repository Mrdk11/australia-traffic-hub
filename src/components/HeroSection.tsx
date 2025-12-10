import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrafficCone, Zap } from "lucide-react";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-20 overflow-hidden">
      {/* Background slider with futuristic overlay */}
      <div className="absolute inset-0 z-0">
        <HeroSlider />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/98 via-primary/85 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
        
        {/* Animated scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 h-px bg-accent/50 animate-scan-line" />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan/20 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Futuristic badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/40 rounded-full px-4 py-2 mb-6 animate-fade-up backdrop-blur-sm">
            <Shield className="w-4 h-4 text-accent animate-glow-pulse" />
            <span className="text-primary-foreground text-sm font-medium">Trusted Traffic Management in SA</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-4 sm:mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Professional Traffic 
            <span className="block text-accent animate-glow-pulse" style={{ animationDelay: "0.3s" }}>Control Solutions</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-6 sm:mb-8 max-w-2xl animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            AVD Traffic Solutions delivers comprehensive traffic management services across Adelaide and South Australia. 
            Safety-first approach with certified professionals ensuring smooth traffic flow for every project.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto group shadow-neon">
              Request a Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
              Our Services
            </Button>
          </div>

          {/* Futuristic Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Projects Completed", icon: Zap },
              { value: "15+", label: "Years Experience", icon: TrafficCone },
              { value: "100%", label: "Safety Record", icon: Shield },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="relative group text-center md:text-left p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
              >
                <stat.icon className="w-4 h-4 text-accent mb-2 mx-auto md:mx-0 animate-glow-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
                <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-primary-foreground/70 text-[10px] sm:text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave with glow */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-accent/10 to-transparent" />
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full relative z-10">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;