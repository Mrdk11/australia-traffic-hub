import { 
  TrafficCone, 
  Construction, 
  Shield, 
  Users, 
  FileCheck, 
  Truck 
} from "lucide-react";

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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Traffic Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From small roadworks to major infrastructure projects, we provide end-to-end traffic management services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
