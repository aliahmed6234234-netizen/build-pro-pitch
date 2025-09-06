import { ArrowRight, Award, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-building.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title mb-6">
            Building Dreams,
            <br />
            Creating Homes
          </h1>
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
            Premium residential and commercial properties crafted with excellence, 
            delivered with trust. Your vision, our expertise.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="trust-badge">
              <Award className="w-4 h-4" />
              <span>15+ Years Experience</span>
            </div>
            <div className="trust-badge">
              <MapPin className="w-4 h-4" />
              <span>25+ Projects Delivered</span>
            </div>
            <div className="trust-badge">
              <Calendar className="w-4 h-4" />
              <span>500+ Happy Families</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero group">
              Explore Our Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;