import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Traffic Management Services | AVD Traffic Solutions Adelaide</title>
        <meta
          name="description"
          content="Comprehensive traffic control services including road closures, event management, construction site traffic control, and traffic management plans in Adelaide SA."
        />
        <link rel="canonical" href="https://avdtraffic.com.au/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Traffic Control",
                "description": "Professional traffic controllers ensuring safe and efficient traffic flow at work sites, events, and roadworks.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "AVD Traffic Solutions"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "South Australia"
                },
                "serviceType": "Traffic Control"
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Road Closure Management",
                "description": "Complete road closure services with proper signage, barriers, and detour planning for construction projects.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "AVD Traffic Solutions"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "South Australia"
                },
                "serviceType": "Road Closure Management"
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Work Zone Safety",
                "description": "Comprehensive safety solutions including risk assessments, safety plans, and ongoing site monitoring.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "AVD Traffic Solutions"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "South Australia"
                },
                "serviceType": "Work Zone Safety"
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "Traffic Management Plans",
                "description": "Custom TMP development compliant with Australian standards and local council requirements.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "AVD Traffic Solutions"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "South Australia"
                },
                "serviceType": "Traffic Management Plans"
              },
              {
                "@type": "Service",
                "position": 5,
                "name": "Event Traffic Management",
                "description": "Specialized traffic solutions for festivals, sports events, concerts, and public gatherings.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "AVD Traffic Solutions"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "South Australia"
                },
                "serviceType": "Event Traffic Management"
              },
              {
                "@type": "Service",
                "position": 6,
                "name": "Equipment Hire",
                "description": "Full range of traffic control equipment including signs, cones, barriers, and VMS boards.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "AVD Traffic Solutions"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "South Australia"
                },
                "serviceType": "Equipment Hire"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <PageTransition>
        <main className="pt-28 sm:pt-32">
          <ServicesSection />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Services;