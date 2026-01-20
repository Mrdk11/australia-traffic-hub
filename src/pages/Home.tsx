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
        <title>AVD Traffic Solutions | SA's #1 Traffic Management Company Adelaide</title>
        <meta
          name="description"
          content="AVD Traffic Solutions - South Australia's leading traffic management company founded by Urmil Patel & Meet Patel. Expert traffic control services Adelaide, work zone traffic control, night traffic, emergency response, stop slow bat operations. Call 1300 283 823."
        />
        <meta name="keywords" content="Adelaide traffic solutions, SA number 1 traffic management company, traffic management Adelaide, traffic control services Adelaide, Urmil Patel, Meet Patel, AVD Traffic, work zone traffic control Adelaide, night traffic control services SA, event traffic control Adelaide, stop slow bat traffic control, emergency traffic control South Australia, traffic control for roadworks Adelaide, road closure services SA, traffic controllers Adelaide, construction traffic management, festival traffic management Adelaide, highway traffic control SA" />
        <link rel="canonical" href="https://www.avdtraffic.com.au/" />
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