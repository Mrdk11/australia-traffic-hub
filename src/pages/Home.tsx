import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeHighlights from "@/components/HomeHighlights";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageTransition>
        <main>
          <HeroSection />
          <HomeHighlights />
          <TestimonialsSection />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Home;