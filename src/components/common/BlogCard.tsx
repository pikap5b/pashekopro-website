import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <Link to={`/blog/${post.id}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-sm text-neutral-500 mb-3">
          <span className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <User size={16} className="mr-1" />
            {post.author}
          </span>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold mb-2 font-heading text-neutral-800 hover:text-primary-500 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-neutral-600 mb-4">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.id}`} 
          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          Read More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;