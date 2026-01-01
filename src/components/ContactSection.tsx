import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Zap, Loader2, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import trafficController from "@/assets/traffic-controller.jpg";

// ⚠️ REPLACE THIS WITH YOUR WEB3FORMS ACCESS KEY
// Get your free access key at: https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "6554c1a3-8732-4b35-b113-e95a1b072017";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^(\+?61|0)?[2-9]\d{8}$|^(\+?61|0)?4\d{8}$|^$/, "Please enter a valid Australian phone number (e.g., 0400 000 000)").optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "1300 283 832",
    href: "tel:1300283832",
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
    content: "647 Grand Junction Rd, Gepps Cross, SA, 5094",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 9AM to 5PM",
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
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactSchema.safeParse({
      ...formData,
      phone: formData.phone.replace(/\s/g, ""), // Remove spaces for validation
    });
    
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof FormErrors;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Inquiry from ${formData.name}`,
          from_name: "AVD Traffic Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmittedName(formData.name);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setShowSuccessModal(true);
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again or contact us directly by phone.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  return (
    <>
      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md border-accent/20 bg-card">
          <DialogHeader className="text-center sm:text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center animate-scale-in">
              <CheckCircle2 className="w-8 h-8 text-accent" />
            </div>
            <DialogTitle className="text-2xl font-display text-foreground">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2">
              Thank you, {submittedName}! We've received your inquiry and will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-3">
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
              <p className="text-sm text-muted-foreground text-center">
                For urgent matters, call us directly at{" "}
                <a href="tel:1300283832" className="text-accent font-semibold hover:underline">
                  1300 283 832
                </a>
              </p>
            </div>
            <Button
              variant="accent"
              className="w-full shadow-neon"
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <section id="contact" className="py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Image at Top */}
        <div className="relative rounded-3xl overflow-hidden mb-12 sm:mb-16 group">
          <img 
            src={trafficController} 
            alt="Traffic controller ready to assist" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-6 h-6 text-accent animate-glow-pulse" />
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
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
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-destructive' : 'border-input'} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-destructive' : 'border-input'} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground`}
                        placeholder="you@email.com"
                      />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
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
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-destructive' : 'border-input'} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground`}
                        placeholder="0400 000 000"
                      />
                      {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-destructive' : 'border-input'} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none placeholder:text-muted-foreground`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full shadow-neon group" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ContactSection;