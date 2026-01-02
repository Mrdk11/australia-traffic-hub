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