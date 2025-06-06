import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import ServiceCard from '../common/ServiceCard';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useTranslation } from 'react-i18next';

const FeaturedServices: React.FC = () => {
  const { t } = useTranslation();
  // Display only first 3 services
  const featuredServices = services.slice(0, 3);

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={t('home.servicesTitle')}
          subtitle={t('home.servicesSubtitle')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button to="/services" size="lg">
            {t('home.viewAllServices')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;