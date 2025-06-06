import React from 'react';
import { motion } from 'framer-motion';
import { galleryItems } from '../../data/gallery';
import GalleryItem from '../common/GalleryItem';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useTranslation } from 'react-i18next';

const FeaturedGallery: React.FC = () => {
  const { t } = useTranslation();
  // Display only first 6 gallery items
  const featuredItems = galleryItems.slice(0, 6);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={t('home.workTitle')}
          subtitle={t('home.workSubtitle')}
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button to="/gallery" size="lg">
            {t('home.viewAllProjects')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedGallery;