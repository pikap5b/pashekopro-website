import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const About: React.FC = () => {
  const advantages = [
    'Over 10 years of professional experience',
    'Certified and skilled painters and craftsmen',
    'Premium quality materials and paints',
    'Attention to detail and excellent finish',
    'Clean and tidy work process',
    'On-time project completion',
    'Competitive pricing with no hidden costs',
    'Full warranty on all completed work'
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Professional painter"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold font-heading">10+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </motion.div>
          
          {/* Content */}
          <div>
            <SectionTitle 
              title="Why Choose PashekoPro"
              subtitle="We deliver exceptional quality and reliable service for all your painting needs"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {advantages.map((advantage, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="bg-primary-500 text-white p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <Check size={16} />
                  </span>
                  <p className="text-neutral-700">{advantage}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;