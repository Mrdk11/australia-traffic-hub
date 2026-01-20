import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact AVD Traffic Solutions | Adelaide Traffic Management</title>
        <meta
          name="description"
          content="Contact SA's #1 traffic management company. Get a free quote for traffic control services Adelaide. Call 1300 283 823 or email inquiry.avdtraffic@gmail.com. 24/7 emergency response available."
        />
        <meta name="keywords" content="contact traffic management Adelaide, traffic control quote Adelaide, hire traffic controllers SA, traffic management services enquiry Adelaide, emergency traffic control contact, roadworks traffic control Adelaide quote, event traffic management quote SA" />
        <link rel="canonical" href="https://www.avdtraffic.com.au/contact" />
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