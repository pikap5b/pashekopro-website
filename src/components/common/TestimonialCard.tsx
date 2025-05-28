import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TestimonialType } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialType;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <Quote size={32} className="text-primary-200 mb-4" />
      <p className="text-neutral-700 mb-6 italic">{testimonial.content}</p>
      <div className="flex items-center">
        {testimonial.imageUrl && (
          <img 
            src={testimonial.imageUrl} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
        )}
        <div>
          <h4 className="font-bold text-neutral-800">{testimonial.name}</h4>
          <p className="text-sm text-neutral-500">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;