import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog-posts';
import BlogCard from '../common/BlogCard';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useTranslation } from 'react-i18next';

const LatestBlog: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={t('home.latestArticlesTitle')}
          subtitle={t('home.latestArticlesSubtitle')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button to="/blog" size="lg">
            {t('home.viewAllArticles')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBlog;