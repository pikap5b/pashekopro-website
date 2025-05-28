import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedServices from '../components/home/FeaturedServices';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import FeaturedGallery from '../components/home/FeaturedGallery';
import CallToAction from '../components/home/CallToAction';
import LatestBlog from '../components/home/LatestBlog';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <FeaturedServices />
      <About />
      <FeaturedGallery />
      <Testimonials />
      <LatestBlog />
      <CallToAction />
    </main>
  );
};

export default HomePage;