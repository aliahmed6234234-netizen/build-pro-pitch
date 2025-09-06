import { Calendar, Users, MapPin, MessageCircle } from 'lucide-react';
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                
                <br />
                <span className="text-primary">Premium Real Estate Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Welcome to <strong>Premium Builders</strong> - Your Partner for Optimized Property Solutions. 
                We are a leading construction and development company offering premium residential and commercial 
                properties at every stage of your investment journey, from planning to possession. We adapt to your 
                evolving needs, allowing you to focus on your investment goals.
              </p>
            </div>
            
            {/* Service Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="flex items-center space-x-3 p-4 bg-card/50 rounded-lg border backdrop-blur-sm transition-shadow duration-200 hover:shadow-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Schedule Site Visit</div>
                  <div className="text-xs text-muted-foreground">Select best time for you</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-card/50 rounded-lg border backdrop-blur-sm transition-shadow duration-200 hover:shadow-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Expert Consultation</div>
                  <div className="text-xs text-muted-foreground">Get professional advice</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-card/50 rounded-lg border backdrop-blur-sm transition-shadow duration-200 hover:shadow-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Visit Properties</div>
                  <div className="text-xs text-muted-foreground">Explore our locations</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-card/50 rounded-lg border backdrop-blur-sm transition-shadow duration-200 hover:shadow-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Ask Questions</div>
                  <div className="text-xs text-muted-foreground">Get instant support</div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="px-8">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative max-h-[60vh] h-[60vh] animate-scale-in hover:shadow-lg transition-transform duration-300">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-2xl"
              style={{ backgroundImage: `url(${heroImage})`, borderRadius: '25px', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-background/20 to-transparent" style={{ borderRadius: '25px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;