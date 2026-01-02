import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Frequently Asked Questions | AVD Traffic Solutions</title>
        <meta
          name="description"
          content="Find answers to common questions about traffic management services, permits, pricing, and how AVD Traffic Solutions can help your project in Adelaide."
        />
        <link rel="canonical" href="https://avdtraffic.com.au/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What traffic management services do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide comprehensive traffic management services including traffic control for roadworks, road closures, event traffic management, traffic management plans, equipment hire, and 24/7 emergency response services across Adelaide and South Australia."
                }
              },
              {
                "@type": "Question",
                "name": "Are your traffic controllers certified?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our traffic controllers hold current DPTI (Department for Infrastructure and Transport) accreditation and undergo regular training to maintain the highest safety standards. We also carry full public liability insurance."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you respond to emergency callouts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer 24/7 emergency response services and can typically have a team on-site within 1-2 hours for urgent traffic control needs in the Adelaide metropolitan area, depending on location and availability."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide traffic management plans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we create detailed Traffic Management Plans (TMPs) and Traffic Guidance Schemes (TGS) tailored to your specific project requirements. Our plans comply with all relevant Australian standards and local council requirements."
                }
              },
              {
                "@type": "Question",
                "name": "What areas do you service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We service the entire Adelaide metropolitan area and regional South Australia. Our team is equipped to handle projects of any size, from small suburban roadworks to major highway infrastructure projects."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get a quote for my project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting a quote is easy! Simply contact us via phone, email, or fill out the quote request form on our Contact page. Provide details about your project location, duration, and requirements, and we'll respond with a competitive quote within 24 hours."
                }
              },
              {
                "@type": "Question",
                "name": "What equipment do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We supply a full range of traffic management equipment including traffic cones, barriers, variable message signs (VMS), portable traffic lights, arrow boards, stop/slow bats, and all necessary signage compliant with Australian standards."
                }
              },
              {
                "@type": "Question",
                "name": "Can you handle event traffic management?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We specialise in event traffic management for concerts, sporting events, festivals, and community gatherings. We work with event organisers to ensure smooth traffic flow and pedestrian safety before, during, and after events."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <PageTransition>
        <main className="pt-28 sm:pt-32">
          <FAQSection />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default FAQ;