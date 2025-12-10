import { 
  TrafficCone, 
  Construction, 
  Shield, 
  Users, 
  FileCheck, 
  Truck,
  AlertTriangle,
  Signpost
} from "lucide-react";
import trafficEquipment from "@/assets/traffic-equipment.jpg";

const services = [
  {
    icon: TrafficCone,
    title: "Traffic Control",
    description: "Professional traffic controllers ensuring safe and efficient traffic flow at work sites, events, and roadworks.",
  },
  {
    icon: Construction,
    title: "Road Closure Management",
    description: "Complete road closure services with proper signage, barriers, and detour planning for construction projects.",
  },
  {
    icon: Shield,
    title: "Work Zone Safety",
    description: "Comprehensive safety solutions including risk assessments, safety plans, and ongoing site monitoring.",
  },
  {
    icon: FileCheck,
    title: "Traffic Management Plans",
    description: "Custom TMP development compliant with Australian standards and local council requirements.",
  },
  {
    icon: Users,
    title: "Event Traffic Management",
    description: "Specialized traffic solutions for festivals, sports events, concerts, and public gatherings.",
  },
  {
    icon: Truck,
    title: "Equipment Hire",
    description: "Full range of traffic control equipment including signs, cones, barriers, and VMS boards.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full animate-pulse-glow opacity-30" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-cyan/20 rounded-full animate-pulse-glow opacity-30" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Image at Top */}
        <div className="relative rounded-3xl overflow-hidden group mb-12 sm:mb-16">
          <img 
            src={trafficEquipment} 
            alt="Modern traffic control equipment" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-accent animate-traffic-lights" />
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">State-of-the-Art Equipment</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              Modern Traffic Solutions
            </h3>
            <p className="text-primary-foreground/80 max-w-xl text-sm sm:text-base">
              We utilize the latest LED signage, electronic barriers, and smart traffic management systems.
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Signpost className="w-4 h-4 text-accent animate-cone-bounce" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Traffic 
            <span className="text-accent"> Solutions</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-2">
            From small roadworks to major infrastructure projects, we provide end-to-end traffic management services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:shadow-neon transition-all duration-500">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;