import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-primary-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white font-heading mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Space?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today for a free consultation and quote. Let our professional team bring your vision to life.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button to="/quote" variant="outline" size="lg" className="bg-white text-primary-500 border-white hover:bg-white/90">
              Request a Quote
            </Button>
            <Button to="/contact" size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;