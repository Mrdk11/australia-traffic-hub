import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us | AVD Traffic Solutions - SA's Leading Traffic Management Team</title>
        <meta
          name="description"
          content="Meet the team behind AVD Traffic Solutions - South Australia's #1 traffic management company. Founded by Urmil Patel & Meet Patel, delivering expert traffic control services across Adelaide and SA."
        />
        <meta name="keywords" content="Urmil Patel, Meet Patel, AVD Traffic team, Adelaide traffic management company, traffic control company Adelaide, professional traffic controllers SA, certified traffic management Adelaide, work zone safety experts, SA traffic management leaders, AVDhut Group" />
        <link rel="canonical" href="https://www.avdtraffic.com.au/about" />
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