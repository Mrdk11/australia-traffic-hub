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