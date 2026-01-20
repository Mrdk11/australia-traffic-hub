import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectsSection from "@/components/ProjectsSection";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Traffic Management Projects Adelaide | AVD Traffic Solutions</title>
        <meta
          name="description"
          content="View successful traffic management projects across Adelaide and South Australia. Road closures, event traffic control, construction site management, and highway traffic control by SA's leading traffic company."
        />
        <meta name="keywords" content="traffic management projects Adelaide, traffic control examples SA, road closure projects Adelaide, event traffic management portfolio, construction traffic control Adelaide, highway traffic control projects SA, roadworks traffic management Adelaide" />
        <link rel="canonical" href="https://www.avdtraffic.com.au/projects" />
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
