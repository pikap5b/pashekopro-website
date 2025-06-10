import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { services } from '../data/services';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { Paintbrush, Palette, LampFloor as FloorPlan, Grid2X2, Square } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesPage: React.FC = () => {
  const location = useLocation();
  const serviceRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const { t } = useTranslation();

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
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 font-heading mb-6">{t('services.title')}</h1>
            <p className="text-xl text-neutral-600">
              {t('services.subtitle')}
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
                <div className="rounded-lg shadow-lg w-full aspect-[16/9] overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={t(`services.${service.id}.title`)} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-neutral-800 font-heading mb-4">{t(`services.${service.id}.title`)}</h2>
                <p className="text-lg text-neutral-600 mb-6">{t(`services.${service.id}.description`)}</p>
                <Button to="/quote" size="lg">
                  {t('services.getQuote')}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">{t('services.ctaTitle')}</h2>
            <p className="text-xl text-white/90 mb-8">
              {t('services.ctaSubtitle')}
            </p>
            <Button to="/quote" variant="outline" size="lg" className="bg-white text-primary-500 border-white hover:bg-white/90">
              {t('services.requestQuote')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
