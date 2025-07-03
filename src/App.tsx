import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BridalShowers from './pages/services/BridalShowers';
import BabyShowers from './pages/services/BabyShowers';
import Corporate from './pages/services/Corporate';
import Birthdays from './pages/services/Birthdays';
import Holidays from './pages/services/Holidays';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/bridal-showers" element={<BridalShowers />} />
            <Route path="/services/baby-showers" element={<BabyShowers />} />
            <Route path="/services/corporate" element={<Corporate />} />
            <Route path="/services/birthdays" element={<Birthdays />} />
            <Route path="/services/holidays" element={<Holidays />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;