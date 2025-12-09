import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Fully licensed and insured operations",
  "24/7 emergency response available",
  "Certified traffic controllers",
  "Compliance with SA regulations",
  "State-of-the-art equipment",
  "Competitive pricing",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3 sm:mb-4">
              About AVD Traffic Solutions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Your Trusted Partner in Traffic Management
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              AVDhut Group of Company brings years of expertise to Adelaide's traffic management industry. 
              As AVD Traffic Solutions, we're committed to delivering safe, efficient, and compliant traffic 
              control services across South Australia.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of certified professionals understands the unique challenges of Australian roadwork 
              and construction environments. We work closely with councils, contractors, and event organizers 
              to ensure seamless traffic flow and maximum safety for workers and the public.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg">
              Learn More About Us
            </Button>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-primary rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="text-center text-primary-foreground">
                <p className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-2">15+</p>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8">Years of Experience</p>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  <div className="bg-primary-foreground/10 rounded-xl p-4 sm:p-6">
                    <p className="font-display text-2xl sm:text-3xl font-bold text-accent">500+</p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">Projects Completed</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-4 sm:p-6">
                    <p className="font-display text-2xl sm:text-3xl font-bold text-accent">50+</p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">Team Members</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-4 sm:p-6">
                    <p className="font-display text-2xl sm:text-3xl font-bold text-accent">100%</p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">Safety Record</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-4 sm:p-6">
                    <p className="font-display text-2xl sm:text-3xl font-bold text-accent">24/7</p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-accent rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
