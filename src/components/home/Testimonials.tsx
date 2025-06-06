import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../common/TestimonialCard';
import SectionTitle from '../common/SectionTitle';
import { useTranslation } from 'react-i18next';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={t('home.testimonialsTitle')}
          subtitle={t('home.testimonialsSubtitle')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;