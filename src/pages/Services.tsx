import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
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