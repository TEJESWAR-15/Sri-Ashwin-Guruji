import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import WeeklyGuidancePage from './pages/WeeklyGuidancePage';
import VideosPage from './pages/VideosPage';
import StorePage from './pages/StorePage';
import PhilosophyPage from './pages/PhilosophyPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-amber-50 flex flex-col font-body">
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/weekly-guidance" element={<WeeklyGuidancePage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/philosophy" element={<PhilosophyPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;