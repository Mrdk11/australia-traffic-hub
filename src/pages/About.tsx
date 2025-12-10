import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageTransition>
        <main className="pt-28 sm:pt-32">
          <AboutSection />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default About;