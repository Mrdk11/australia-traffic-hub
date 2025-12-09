import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-traffic.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Traffic management professionals at work" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground text-sm font-medium">Trusted Traffic Management in SA</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Professional Traffic 
            <span className="block text-accent">Control Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            AVD Traffic Solutions delivers comprehensive traffic management services across Adelaide and South Australia. 
            Safety-first approach with certified professionals ensuring smooth traffic flow for every project.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center md:text-left">
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">500+</p>
              <p className="text-primary-foreground/70 text-sm">Projects Completed</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">15+</p>
              <p className="text-primary-foreground/70 text-sm">Years Experience</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">100%</p>
              <p className="text-primary-foreground/70 text-sm">Safety Record</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
