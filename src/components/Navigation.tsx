import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  const navItems = [
    { name: 'Home', href: '#home' , onRenderPage:()=>{navigate('/');}},
    { name: 'About', href: '#about', onRenderPage:()=>{navigate('/#about'); },},
    { name: 'Projects', href: '#projects',  onRenderPage:()=>{navigate('/#projects'); }, },
    // { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact', onRenderPage:()=>{navigate('/#contact'); }, },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary font-serif cursor-pointer" onClick={() => navigate('/')}>
              Builder<span className="text-secondary">Pro</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                  onClick={e => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      if (window.location.pathname !== '/') {
                        navigate('/', { state: { scrollTo: item.href.replace('#', '') } });
                      } else {
                        const el = document.getElementById(item.href.replace('#', ''));
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@builderpro.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 nav-link"
                onClick={e => {
                  setIsOpen(false);
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    if (window.location.pathname !== '/') {
                      navigate('/', { state: { scrollTo: item.href.replace('#', '') } });
                    } else {
                      const el = document.getElementById(item.href.replace('#', ''));
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-border mt-4">
              <div className="flex flex-col space-y-2 px-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@builderpro.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;