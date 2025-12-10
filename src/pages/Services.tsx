import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 sm:pt-32">
        <ServicesSection />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Services;
