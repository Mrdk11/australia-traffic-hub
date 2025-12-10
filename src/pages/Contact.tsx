import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageTransition>
        <main className="pt-28 sm:pt-32">
          <ContactSection />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Contact;