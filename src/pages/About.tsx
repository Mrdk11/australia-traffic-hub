import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 sm:pt-32">
        <AboutSection />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default About;
