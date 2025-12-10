import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, TrafficCone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-cyan/10 rounded-full blur-[80px]" />
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center animate-pulse-glow">
                <TrafficCone className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">AVD Traffic</p>
                <p className="text-primary-foreground/70 text-xs uppercase tracking-wider">Solutions</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed text-sm">
              AVDhut Group of Company delivers professional traffic management solutions across Adelaide and South Australia.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-accent hover:shadow-neon transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Contact", "Get a Quote"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(" ", "-")}`} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-3" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Traffic Control",
                "Road Closures",
                "Event Management",
                "Traffic Plans",
                "Equipment Hire",
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-3" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+61412345678" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <Phone className="w-4 h-4 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <span className="text-primary-foreground/80 group-hover:text-accent transition-colors text-sm mt-1">+61 4 1234 5678</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@avdtraffic.com.au" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <Mail className="w-4 h-4 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <span className="text-primary-foreground/80 group-hover:text-accent transition-colors text-sm mt-1">info@avdtraffic.com.au</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="text-primary-foreground/80 text-sm mt-1">Adelaide, South Australia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} AVD Traffic Solutions. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              A division of AVDhut Group of Company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;