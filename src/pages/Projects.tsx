import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectsSection from "@/components/ProjectsSection";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Our Projects | AVD Traffic Solutions</title>
        <meta
          name="description"
          content="View our completed traffic management projects across Adelaide and South Australia. See examples of road closures, event management, and construction site traffic control."
        />
        <link rel="canonical" href="https://avdtraffic.com.au/projects" />
      </Helmet>
      <Header />
      <main className="pt-28 sm:pt-32">
        <ProjectsSection />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Projects;
