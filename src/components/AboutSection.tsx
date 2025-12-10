import { CheckCircle2, Award, Clock, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import trafficAerial from "@/assets/traffic-aerial.jpg";

const features = [
  { text: "Fully licensed and insured operations", icon: Shield },
  { text: "24/7 emergency response available", icon: Clock },
  { text: "Certified traffic controllers", icon: Award },
  { text: "Compliance with SA regulations", icon: CheckCircle2 },
  { text: "State-of-the-art equipment", icon: Zap },
  { text: "Competitive pricing", icon: Users },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Done" },
  { value: "50+", label: "Team Members" },
  { value: "100%", label: "Safety Record" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-accent animate-glow-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About AVD Traffic Solutions
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner in 
              <span className="text-accent"> Traffic Management</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              AVDhut Group of Company brings years of expertise to Adelaide's traffic management industry. 
              As AVD Traffic Solutions, we're committed to delivering safe, efficient, and compliant traffic 
              control services across South Australia.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of certified professionals understands the unique challenges of Australian roadwork 
              and construction environments. We work closely with councils, contractors, and event organizers 
              to ensure seamless traffic flow and maximum safety.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.text} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border hover:border-accent/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <feature.icon className="w-4 h-4 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg" className="shadow-neon">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Image & Stats */}
          <div className="relative mt-8 lg:mt-0 animate-slide-in-right">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden mb-6 group">
              <img 
                src={trafficAerial} 
                alt="Aerial view of traffic management" 
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>

            {/* Stats Card */}
            <div className="bg-primary rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/30 rounded-full blur-[60px]" />
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="bg-primary-foreground/10 rounded-xl p-4 sm:p-5 text-center border border-primary-foreground/10 hover:border-accent/50 transition-all duration-300 hover:shadow-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-accent animate-glow-pulse" style={{ animationDelay: `${index * 0.2}s` }}>
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80 uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-2xl -z-10 animate-pulse-glow" />
            <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-cyan rounded-xl -z-10 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;