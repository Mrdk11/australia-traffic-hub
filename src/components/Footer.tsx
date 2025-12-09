import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-accent-foreground text-lg sm:text-xl">AVD</span>
              </div>
              <div>
                <p className="font-display font-bold text-base sm:text-lg leading-tight">AVD Traffic</p>
                <p className="text-primary-foreground/70 text-xs">Solutions</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              AVDhut Group of Company delivers professional traffic management solutions across Adelaide and South Australia.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Contact", "Get a Quote"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Traffic Control",
                "Road Closures",
                "Event Management",
                "Traffic Plans",
                "Equipment Hire",
                "Safety Consulting",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">+61 4 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">info@avdtraffic.com.au</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Adelaide, South Australia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {currentYear} AVD Traffic Solutions. All rights reserved.</p>
            <p>A division of AVDhut Group of Company</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
