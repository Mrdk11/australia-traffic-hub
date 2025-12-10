import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 sm:pt-32">
        <ContactSection />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Contact;
