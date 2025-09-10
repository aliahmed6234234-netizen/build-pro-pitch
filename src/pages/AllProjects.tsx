import React from 'react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Users } from 'lucide-react';
import projectVilla from '@/assets/project-villa.jpg';
import projectApartment from '@/assets/project-apartment.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';

const allProjects = [
  {
    id: 101,
    name: "Sunset Heights",
    location: "West End",
    type: "Residential Apartments",
    image: projectApartment,
    features: ["2-3 BHK", "Park View", "Clubhouse", "Children's Play Area"],
    completion: "2022",
    status: "completed",
    units: "98% Sold"
  },
  {
    id: 102,
    name: "Green Valley Villas",
    location: "Suburban Zone",
    type: "Luxury Villas",
    image: projectVilla,
    features: ["Private Garden", "Swimming Pool", "4 BHK", "Gated Community"],
    completion: "2021",
    status: "completed",
    units: "100% Sold"
  },
  {
    id: 103,
    name: "Metro One Tower",
    location: "City Center",
    type: "Commercial Offices",
    image: projectCommercial,
    features: ["Smart Offices", "Parking", "Cafeteria", "24/7 Security"],
    completion: "2020",
    status: "completed",
    units: "95% Sold"
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
          {project.features.map((feature: string, index: number) => (
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

const AllProjects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>All Projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">All Projects</h2>
            <p className="section-subtitle">
              Explore all our completed and ongoing projects in detail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllProjects;
