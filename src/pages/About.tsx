import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us | AVD Traffic Solutions - Adelaide Traffic Experts</title>
        <meta
          name="description"
          content="Learn about AVD Traffic Solutions - your trusted traffic management partner in Adelaide. Professional, certified team delivering safe traffic control solutions across South Australia."
        />
        <link rel="canonical" href="https://avdtraffic.com.au/about" />
      </Helmet>
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