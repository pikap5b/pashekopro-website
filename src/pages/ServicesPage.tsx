import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { services } from '../data/services';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { Paintbrush, Palette, LampFloor as FloorPlan, Grid2X2, Square } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const location = useLocation();
  const serviceRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // If there's a hash in the URL, scroll to that section
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = serviceRefs.current[id];
      
      if (element) {
        const yOffset = -100; // Header height offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  const getIcon = (iconName: string, size = 48) => {
    switch (iconName) {
      case 'Paintbrush':
        return <Paintbrush size={size} className="text-primary-500" />;
      case 'Palette':
        return <Palette size={size} className="text-primary-500" />;
      case 'FloorPlan':
        return <FloorPlan size={size} className="text-primary-500" />;
      case 'Grid2X2':
        return <Grid2X2 size={size} className="text-primary-500" />;
      case 'Square':
        return <Square size={size} className="text-primary-500" />;
      default:
        return <Paintbrush size={size} className="text-primary-500" />;
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 font-heading mb-6">Our Services</h1>
            <p className="text-xl text-neutral-600">
              Discover our comprehensive range of professional painting and renovation services for your home or business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              ref={el => serviceRefs.current[service.id] = el}
              id={service.id}
              className={`mb-24 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex items-center gap-16`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="rounded-lg shadow-lg w-full h-auto object-cover" 
                />
              </div>
              <div className="lg:w-1/2">
                <div className="mb-6">
                  {getIcon(service.icon)}
                </div>
                <h2 className="text-3xl font-bold text-neutral-800 font-heading mb-4">{service.title}</h2>
                <p className="text-lg text-neutral-600 mb-6">{service.description}</p>
                <Button to="/quote" size="lg">
                  Get a Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free consultation and detailed quote. Our team is ready to bring your vision to life.
            </p>
            <Button to="/quote" variant="outline" size="lg" className="bg-white text-primary-500 border-white hover:bg-white/90">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;