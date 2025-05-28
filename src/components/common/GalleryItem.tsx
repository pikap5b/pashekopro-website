import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GalleryItem as GalleryItemType } from '../../types';
import { X } from 'lucide-react';

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
        onClick={openModal}
      >
        <div className="h-64 overflow-hidden">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-lg font-medium">{item.title}</h3>
          </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full" 
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-neutral-800">{item.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryItem;