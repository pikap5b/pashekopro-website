import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import { LanguageSwitcher } from './components/LanguageSwitcher';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Removed floating language switcher */}
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;