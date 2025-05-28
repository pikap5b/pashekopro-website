import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { galleryItems } from '../data/gallery';
import GalleryItem from '../components/common/GalleryItem';
import SectionTitle from '../components/common/SectionTitle';

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.serviceId === activeFilter));
    }
  }, [activeFilter]);

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
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 font-heading mb-6">Our Gallery</h1>
            <p className="text-xl text-neutral-600">
              Browse through our portfolio of completed projects to see the quality of our workmanship
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            {services.map(service => (
              <button
                key={service.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === service.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                }`}
                onClick={() => setActiveFilter(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <GalleryItem key={item.id} item={item} index={index} />
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-neutral-500">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;