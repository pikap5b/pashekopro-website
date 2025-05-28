import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  light = false,
}) => {
  const alignment = centered ? 'text-center' : 'text-left';
  const textColor = light ? 'text-white' : 'text-neutral-800';
  const subtitleColor = light ? 'text-neutral-300' : 'text-neutral-600';

  return (
    <div className={`mb-12 ${alignment}`}>
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold font-heading ${textColor} mb-3`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`text-lg ${subtitleColor} max-w-3xl ${centered ? 'mx-auto' : ''}`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={`h-1 w-24 bg-primary-500 mt-4 ${centered ? 'mx-auto' : ''}`}
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  );
};

export default SectionTitle;