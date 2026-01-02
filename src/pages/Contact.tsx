import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | AVD Traffic Solutions Adelaide</title>
        <meta
          name="description"
          content="Get in touch with AVD Traffic Solutions for all your traffic management needs. Call 1300 283 832 or email inquiry.avdtraffic@gmail.com. Serving Adelaide and SA."
        />
        <link rel="canonical" href="https://avdtraffic.com.au/contact" />
      </Helmet>
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