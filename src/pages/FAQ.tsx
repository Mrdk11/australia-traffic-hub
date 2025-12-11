import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
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