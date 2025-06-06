import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Paintbrush, Palette, LampFloor as FloorPlan, Grid2X2, Square } from 'lucide-react';
import { Service } from '../../types';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const { t } = useTranslation();
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Paintbrush':
        return <Paintbrush size={40} className="text-primary-500" />;
      case 'Palette':
        return <Palette size={40} className="text-primary-500" />;
      case 'FloorPlan':
        return <FloorPlan size={40} className="text-primary-500" />;
      case 'Grid2X2':
        return <Grid2X2 size={40} className="text-primary-500" />;
      case 'Square':
        return <Square size={40} className="text-primary-500" />;
      default:
        return <Paintbrush size={40} className="text-primary-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={t(`services.${service.id}.title`)} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <div className="mb-4">{getIcon(service.icon)}</div>
        <h3 className="text-xl font-bold mb-2 font-heading text-neutral-800">{t(`services.${service.id}.title`)}</h3>
        <p className="text-neutral-600 mb-4">{t(`services.${service.id}.description`)}</p>
        <Link 
          to={`/services#${service.id}`} 
          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          {t('services.learnMore')}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;