import { Link } from "react-router-dom";
import { 
  TrafficCone, 
  Construction, 
  Shield, 
  Award, 
  Clock, 
  Phone,
  ArrowRight,
  Signpost,
  MessageSquare,
  Users
} from "lucide-react";
import trafficEquipment from "@/assets/traffic-equipment.jpg";
import trafficAerial from "@/assets/traffic-aerial.jpg";

const services = [
  { icon: TrafficCone, title: "Traffic Control" },
  { icon: Construction, title: "Road Closure Management" },
  { icon: Shield, title: "Work Zone Safety" },
];

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Done" },
  { value: "100%", label: "Safety Record" },
];

const HomeHighlights = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full animate-pulse-glow opacity-30" />
        <div className="absolute bottom-40 right-10 w-48 h-48 border border-cyan/20 rounded-full animate-pulse-glow opacity-30" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 space-y-16 sm:space-y-24">
        {/* Services Highlight */}
        <Link 
          to="/services" 
          className="group block relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-0">
            <div className="p-6 sm:p-10 relative z-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
                <Signpost className="w-4 h-4 text-accent animate-cone-bounce" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Our Services
                </span>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                Comprehensive Traffic Solutions
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From small roadworks to major infrastructure projects, we provide end-to-end traffic management services.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {services.map((service, index) => (
                  <div 
                    key={service.title}
                    className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border group-hover:border-accent/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{service.title}</span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img 
                src={trafficEquipment} 
                alt="Traffic control services" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-card lg:block hidden" />
            </div>
          </div>
        </Link>

        {/* About Highlight */}
        <Link 
          to="/about" 
          className="group block relative rounded-3xl overflow-hidden bg-secondary border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-0">
            <div className="relative h-64 lg:h-auto overflow-hidden order-2 lg:order-1">
              <img 
                src={trafficAerial} 
                alt="About AVD Traffic Solutions" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-secondary lg:block hidden" />
            </div>

            <div className="p-6 sm:p-10 relative z-10 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
                <Award className="w-4 h-4 text-accent animate-glow-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                Your Trusted Partner in Traffic Management
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                AVDhut Group of Company brings years of expertise to Adelaide's traffic management industry with certified professionals and state-of-the-art equipment.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="text-center p-2 sm:p-3 rounded-xl bg-background/50 border border-border group-hover:border-accent/30 transition-all duration-300"
                  >
                    <p className="font-display text-lg sm:text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </Link>

        {/* Contact Highlight */}
        <Link 
          to="/contact" 
          className="group block relative rounded-3xl overflow-hidden bg-primary border border-accent/20 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl cursor-pointer"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan/20 rounded-full blur-[60px]" />
          </div>
          
          <div className="p-6 sm:p-10 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 mb-4">
                  <MessageSquare className="w-4 h-4 text-accent animate-glow-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Contact Us
                  </span>
                </div>
                
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  Ready to Get Started?
                </h2>
                
                <p className="text-primary-foreground/80 mb-4 leading-relaxed max-w-xl">
                  Contact us for a free consultation and quote. Our team is ready to help with your traffic management requirements.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>+61 4 1234 5678</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>24/7 Emergency Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span>Free Consultation</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-accent rounded-2xl px-6 py-4 shadow-neon group-hover:scale-105 transition-transform duration-300">
                <span className="text-accent-foreground font-bold text-lg">Get a Quote</span>
                <ArrowRight className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HomeHighlights;
