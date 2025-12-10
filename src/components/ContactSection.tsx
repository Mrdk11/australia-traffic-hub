import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+61 4 1234 5678",
    href: "tel:+61412345678",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@avdtraffic.com.au",
    href: "mailto:info@avdtraffic.com.au",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Adelaide, South Australia",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 7AM-6PM • 24/7 Emergency",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Banner at Top */}
        <div className="relative rounded-3xl overflow-hidden mb-12 sm:mb-16 bg-primary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan/20 rounded-full blur-[60px]" />
          </div>
          <div className="p-8 sm:p-12 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-accent animate-glow-pulse" />
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
              Contact Us <span className="text-accent">Today</span>
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-sm sm:text-base">
              Ready to discuss your traffic management needs? Reach out for a free consultation and quote.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team is ready to help with your traffic management requirements. 
              Contact us for prompt, professional service across Adelaide and SA.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className="group p-5 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:shadow-neon transition-all duration-300">
                    <info.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <p className="font-semibold text-foreground mb-1">{info.title}</p>
                  {info.href ? (
                    <a href={info.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Emergency callout */}
            <div className="mt-6 p-5 rounded-2xl bg-primary text-primary-foreground border border-accent/20 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-[40px]" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center animate-pulse-glow">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">24/7 Emergency Response</p>
                  <p className="text-primary-foreground/80 text-sm">Available for urgent traffic control needs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 relative overflow-hidden hover:border-accent/30 transition-all duration-500">
              {/* Form glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-[60px]" />
              
              <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Send className="w-5 h-5 text-accent" />
                  Request a Quote
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground"
                        placeholder="0400 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none placeholder:text-muted-foreground"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full shadow-neon group">
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;