import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import projectVilla from '@/assets/project-villa.jpg';
import projectApartment from '@/assets/project-apartment.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';

const Projects = () => {
  const ongoingProjects = [
    {
      id: 1,
      name: "Royal Gardens Villa",
      location: "Downtown District",
      type: "Luxury Villas",
      image: projectVilla,
      features: ["Private Pool", "Garden", "3-4 BHK", "Premium Finishes"],
      completion: "Dec 2024",
      progress: 75,
      status: "ongoing"
    },
    {
      id: 2,
      name: "Skyline Residences",
      location: "Business District",
      type: "Premium Apartments",
      image: projectApartment,
      features: ["City Views", "Gym & Pool", "2-3 BHK", "Smart Home"],
      completion: "Mar 2025",
      progress: 45,
      status: "ongoing"
    }
  ];

  const completedProjects = [
    {
      id: 3,
      name: "Corporate Plaza",
      location: "Commercial Hub",
      type: "Office Complex",
      image: projectCommercial,
      features: ["Grade A Office", "Parking", "Modern Design", "Prime Location"],
      completion: "2023",
      status: "completed",
      units: "100% Sold"
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="project-card group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={project.status === 'ongoing' ? 'status-ongoing' : 'status-completed'}>
            {project.status === 'ongoing' ? 'Under Construction' : 'Completed'}
          </span>
        </div>
        {project.progress && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-secondary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-serif">{project.name}</h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{project.location}</span>
        </div>
        <div className="flex items-center text-muted-foreground mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{project.status === 'ongoing' ? `Expected: ${project.completion}` : `Completed: ${project.completion}`}</span>
        </div>
        
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">{project.type}</p>
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature, index) => (
              <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {project.units && (
          <div className="flex items-center text-success font-medium">
            <Users className="w-4 h-4 mr-2" />
            <span>{project.units}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            Discover our portfolio of exceptional residential and commercial developments, 
            each crafted with precision and delivered with excellence.
          </p>
        </div>

        {/* Ongoing Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 font-serif">Ongoing Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 font-serif">Completed Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="btn-hero group">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;