import { Award, Target, Users, Building2, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Building2, value: "25+", label: "Projects Completed" },
    { icon: Users, value: "500+", label: "Happy Families" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Target, value: "100%", label: "On-Time Delivery" },
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "We use premium materials and follow international construction standards in every project."
    },
    {
      title: "Timely Delivery",
      description: "Our projects are delivered on schedule with no compromise on quality or specifications."
    },
    {
      title: "Customer Trust",
      description: "Building lasting relationships through transparency, reliability, and exceptional service."
    },
    {
      title: "Innovation",
      description: "Incorporating modern design trends and smart home technologies in our developments."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About BuilderPro</h2>
          <p className="section-subtitle">
            With over 15 years of excellence in real estate development, we have established 
            ourselves as a trusted name in creating premium residential and commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 font-serif">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2008, BuilderPro began with a simple vision: to create exceptional 
              living and working spaces that combine quality, comfort, and style. What started 
              as a small family business has grown into a renowned construction company known 
              for its commitment to excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We believe that every project is an opportunity to build not just structures, 
              but dreams, communities, and lasting relationships. Our team of experienced 
              professionals ensures that every detail is crafted to perfection.
            </p>
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-success" />
              <span className="text-lg font-medium">Licensed & Certified Builders</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg shadow-lg">
                <achievement.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2 font-serif">
                  {achievement.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 font-serif">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-semibold mb-4 text-primary font-serif">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-16 text-center bg-muted/30 rounded-xl p-8">
          <h3 className="text-3xl font-bold mb-6 font-serif">Leadership</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              "At BuilderPro, we don't just construct buildings; we craft experiences. 
              Every project reflects our commitment to quality, innovation, and customer satisfaction."
            </p>
            <div className="text-xl font-semibold text-primary">- Rajesh Kumar, Founder & CEO</div>
            <div className="text-muted-foreground">Civil Engineer, 20+ Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;