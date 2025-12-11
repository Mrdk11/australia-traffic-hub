import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import trafficConsultation from "@/assets/traffic-consultation.jpg";

const faqs = [
  {
    question: "What traffic management services do you offer?",
    answer: "We provide comprehensive traffic management services including traffic control for roadworks, road closures, event traffic management, traffic management plans, equipment hire, and 24/7 emergency response services across Adelaide and South Australia.",
  },
  {
    question: "Are your traffic controllers certified?",
    answer: "Yes, all our traffic controllers hold current DPTI (Department for Infrastructure and Transport) accreditation and undergo regular training to maintain the highest safety standards. We also carry full public liability insurance.",
  },
  {
    question: "How quickly can you respond to emergency callouts?",
    answer: "We offer 24/7 emergency response services and can typically have a team on-site within 1-2 hours for urgent traffic control needs in the Adelaide metropolitan area, depending on location and availability.",
  },
  {
    question: "Do you provide traffic management plans?",
    answer: "Yes, we create detailed Traffic Management Plans (TMPs) and Traffic Guidance Schemes (TGS) tailored to your specific project requirements. Our plans comply with all relevant Australian standards and local council requirements.",
  },
  {
    question: "What areas do you service?",
    answer: "We service the entire Adelaide metropolitan area and regional South Australia. Our team is equipped to handle projects of any size, from small suburban roadworks to major highway infrastructure projects.",
  },
  {
    question: "How do I get a quote for my project?",
    answer: "Getting a quote is easy! Simply contact us via phone, email, or fill out the quote request form on our Contact page. Provide details about your project location, duration, and requirements, and we'll respond with a competitive quote within 24 hours.",
  },
  {
    question: "What equipment do you provide?",
    answer: "We supply a full range of traffic management equipment including traffic cones, barriers, variable message signs (VMS), portable traffic lights, arrow boards, stop/slow bats, and all necessary signage compliant with Australian standards.",
  },
  {
    question: "Can you handle event traffic management?",
    answer: "Absolutely! We specialise in event traffic management for concerts, sporting events, festivals, and community gatherings. We work with event organisers to ensure smooth traffic flow and pedestrian safety before, during, and after events.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Image at Top */}
        <div className="relative rounded-3xl overflow-hidden mb-12 sm:mb-16 group">
          <img 
            src={trafficConsultation} 
            alt="Customer consultation about traffic management services" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-3">
              <HelpCircle className="w-6 h-6 text-accent animate-glow-pulse" />
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">FAQ</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-sm sm:text-base">
              Find answers to common questions about our traffic management services.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-accent/50 transition-all duration-300 hover:border-accent/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5 [&[data-state=open]]:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
          >
            Contact Us
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
