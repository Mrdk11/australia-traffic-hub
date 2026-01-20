import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeHighlights from "@/components/HomeHighlights";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AVD Traffic Solutions | Professional Traffic Management Adelaide</title>
        <meta
          name="description"
          content="Expert traffic control and management services across Adelaide and South Australia. Work zone traffic control, night traffic services, emergency traffic control, stop slow bat operations, and event traffic management. Call 1300 283 823."
        />
        <meta name="keywords" content="traffic management, traffic control services Adelaide, traffic management Adelaide, work zone traffic control, night traffic control services, event traffic control, stop slow bat traffic control, emergency traffic control, traffic control for roadworks" />
        <link rel="canonical" href="https://avdtraffic.com.au/" />
      </Helmet>
      <Header />
      <PageTransition>
        <main>
          <HeroSection />
          <HomeHighlights />
          <TestimonialsSection />
          <FAQSection />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Home;