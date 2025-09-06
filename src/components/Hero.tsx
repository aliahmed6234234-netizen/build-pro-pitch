import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-building.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                Building
                <br />
                <span className="text-primary">Dreams</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Premium residential and commercial properties crafted with excellence and delivered with trust.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Explore Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[80vh] h-[60vh] animate-scale-in">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-background/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border animate-slide-in-right">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Families</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;