import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blog-posts';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';
import { useTranslation } from 'react-i18next';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState(blogPosts.find(post => post.id === id));
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }

  // Convert markdown to HTML (simple implementation)
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    let formattedContent = '';
    
    lines.forEach(line => {
      // Headers
      if (line.startsWith('# ')) {
        formattedContent += `<h1 class="text-3xl font-bold my-4">${line.substring(2)}</h1>`;
      } else if (line.startsWith('## ')) {
        formattedContent += `<h2 class="text-2xl font-bold my-3">${line.substring(3)}</h2>`;
      } else if (line.startsWith('### ')) {
        formattedContent += `<h3 class="text-xl font-bold my-2">${line.substring(4)}</h3>`;
      } 
      // Lists
      else if (line.startsWith('- ')) {
        formattedContent += `<li class="ml-6 list-disc my-1">${line.substring(2)}</li>`;
      } else if (line.match(/^\d+\. /)) {
        const textContent = line.substring(line.indexOf('. ') + 2);
        formattedContent += `<li class="ml-6 list-decimal my-1">${textContent}</li>`;
      }
      // Paragraphs
      else if (line.trim() !== '') {
        formattedContent += `<p class="my-3">${line}</p>`;
      } else {
        formattedContent += '<br>';
      }
    });
    
    return formattedContent;
  };

  return (
    <main>
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${post.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">{post.title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
              <span className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User size={18} className="mr-2" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Tag size={18} className="mr-2" />
                {post.category}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="flex items-center text-primary-500 hover:text-primary-600 mb-8 inline-block">
              <ArrowLeft size={18} className="mr-2" />
              {t('blog.back')}
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-800 font-heading mb-4">{t('blog.ctaTitle')}</h2>
            <p className="text-lg text-neutral-600 mb-6">
              {t('blog.ctaSubtitle')}
            </p>
            <Button to="/quote" size="lg">
              {t('blog.requestQuote')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage;