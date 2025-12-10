import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeHighlights from "@/components/HomeHighlights";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HomeHighlights />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Home;
