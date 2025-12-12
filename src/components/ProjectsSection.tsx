import { useState } from "react";
import { MapPin, Calendar, Users, ArrowRight, X, ChevronLeft, ChevronRight, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import trafficHighway from "@/assets/traffic-highway.jpg";
import trafficUrban from "@/assets/traffic-urban.jpg";
import trafficNight from "@/assets/traffic-night.jpg";
import trafficSetup from "@/assets/traffic-setup.jpg";
import trafficAerial from "@/assets/traffic-aerial.jpg";
import trafficEquipment from "@/assets/traffic-equipment.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  duration: string;
  description: string;
  challenges: string;
  solution: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "South Road Upgrade Project",
    category: "Road Construction",
    location: "Adelaide CBD, SA",
    date: "March 2024",
    duration: "6 months",
    description: "Major arterial road upgrade requiring comprehensive traffic management for one of Adelaide's busiest corridors. Our team managed traffic flow for over 50,000 vehicles daily.",
    challenges: "High traffic volume, multiple intersections, and maintaining access to local businesses during peak construction periods.",
    solution: "Implemented staged lane closures with smart signage systems and dedicated traffic controllers at key intersections. Developed alternative route guidance for commuters.",
    image: trafficHighway,
  },
  {
    id: 2,
    title: "Adelaide Fringe Festival",
    category: "Event Management",
    location: "Rundle Street, Adelaide",
    date: "February 2024",
    duration: "3 weeks",
    description: "Comprehensive traffic and pedestrian management for one of the world's largest arts festivals, ensuring safe access for thousands of visitors nightly.",
    challenges: "Managing high pedestrian volumes, coordinating with multiple venues, and maintaining emergency vehicle access throughout the event precinct.",
    solution: "Deployed a team of 25+ traffic controllers with real-time communication systems. Created flexible traffic plans adaptable to crowd sizes and weather conditions.",
    image: trafficUrban,
  },
  {
    id: 3,
    title: "Port Adelaide Night Works",
    category: "Night Operations",
    location: "Port Adelaide, SA",
    date: "January 2024",
    duration: "4 weeks",
    description: "Critical infrastructure maintenance requiring overnight lane closures and traffic diversions to minimize impact on daytime traffic and local businesses.",
    challenges: "Reduced visibility, maintaining worker safety, and coordinating with emergency services during overnight operations.",
    solution: "Utilized high-visibility LED signage, advanced warning systems, and maintained constant communication with emergency services dispatch.",
    image: trafficNight,
  },
  {
    id: 4,
    title: "Commercial Development Site",
    category: "Construction Support",
    location: "Glenelg, SA",
    date: "December 2023",
    duration: "8 months",
    description: "Long-term traffic management for a major commercial development, including coordination of heavy vehicle movements and pedestrian safety.",
    challenges: "Proximity to schools, high pedestrian area, and coordinating multiple contractor vehicle movements throughout the day.",
    solution: "Established dedicated heavy vehicle routes, implemented school zone protocols, and provided continuous traffic controller presence during peak hours.",
    image: trafficSetup,
  },
  {
    id: 5,
    title: "Highway Intersection Upgrade",
    category: "Road Construction",
    location: "Murray Bridge, SA",
    date: "November 2023",
    duration: "3 months",
    description: "Complex intersection upgrade on a major regional highway, requiring careful coordination to maintain traffic flow while construction progressed.",
    challenges: "High-speed traffic environment, limited detour options, and need to maintain agricultural vehicle access.",
    solution: "Implemented pilot vehicle operations during critical phases, installed temporary traffic signals, and coordinated with local farming community for harvest season access.",
    image: trafficAerial,
  },
  {
    id: 6,
    title: "Emergency Road Repair",
    category: "Emergency Response",
    location: "Adelaide Hills, SA",
    date: "October 2023",
    duration: "2 weeks",
    description: "Rapid response traffic management for emergency road repairs following storm damage, ensuring community access while repairs were completed safely.",
    challenges: "Unpredictable weather, narrow mountain roads, and need to maintain single-lane access for residents.",
    solution: "Deployed 24/7 traffic control teams with stop/slow operations, established temporary traffic lights, and coordinated convoy movements for heavy repair vehicles.",
    image: trafficEquipment,
  },
];

const categories = ["All", "Road Construction", "Event Management", "Night Operations", "Construction Support", "Emergency Response"];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handlePrevProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject?.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  const handleNextProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject?.id);
    const nextIndex = currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FolderOpen className="w-6 h-6 text-accent animate-glow-pulse" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Portfolio</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Completed <span className="text-accent">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Explore our successful traffic management projects across Adelaide and South Australia. 
            Each project showcases our commitment to safety, efficiency, and professionalism.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground shadow-neon"
                  : "bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-xl animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-5 max-w-md mx-auto">
              Contact us today for a free consultation and quote for your traffic management needs.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg" className="shadow-neon">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto border-accent/20 bg-card p-0">
          {selectedProject && (
            <>
              {/* Image Header */}
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Navigation Arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrevProject(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNextProject(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-6">
                  <span className="px-4 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h2>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{selectedProject.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-accent" />
                    <span>Duration: {selectedProject.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenges</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.challenges}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="flex-1">
                    <Button variant="accent" size="lg" className="w-full shadow-neon">
                      Start Your Project
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
