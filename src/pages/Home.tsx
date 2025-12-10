import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeHighlights from "@/components/HomeHighlights";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageTransition>
        <main>
          <HeroSection />
          <HomeHighlights />
        </main>
      </PageTransition>
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Home;