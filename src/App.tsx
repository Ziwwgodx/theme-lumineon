import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CustomizerSection from './components/CustomizerSection';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import OrderTracking from './components/OrderTracking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PremiumPopups from './components/PremiumPopups';
import ParticleSystem from './components/ParticleSystem';
import LightBeams from './components/LightBeams';
import InteractiveElements from './components/InteractiveElements';
import LiveChat from './components/LiveChat';
import DevisPopup from './components/DevisPopup';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import UrgencyBanner from './components/UrgencyBanner';
import SocialProofBanner from './components/SocialProofBanner';
import ShippingBanner from './components/ShippingBanner';
import GuaranteeBanner from './components/GuaranteeBanner';
import ScarcityBanner from './components/ScarcityBanner';
import ExpertiseBanner from './components/ExpertiseBanner';
import NotificationBanner from './components/NotificationBanner';
import PaymentSecurityBanner from './components/PaymentSecurityBanner';
import { useState } from 'react';

function App() {
  const [isDevisPopupOpen, setIsDevisPopupOpen] = useState(false);

  // Listen for custom events to open devis popup
  React.useEffect(() => {
    const handleOpenDevis = () => setIsDevisPopupOpen(true);
    window.addEventListener('openDevisPopup', handleOpenDevis);
    return () => window.removeEventListener('openDevisPopup', handleOpenDevis);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Aller au contenu principal
      </a>
      
      <PerformanceOptimizer />
      <SEOOptimizer />
      <ParticleSystem />
      <LightBeams />
      <InteractiveElements />
      <Header onOpenDevis={() => setIsDevisPopupOpen(true)} />
      <UrgencyBanner />
      
      <main id="main-content" role="main">
        <Hero onOpenDevis={() => setIsDevisPopupOpen(true)} />
      </main>
      
      <SocialProofBanner />
      <CustomizerSection />
      <ShippingBanner />
      <About />
      <ExpertiseBanner />
      <Gallery />
      <NotificationBanner />
      <Services onOpenDevis={() => setIsDevisPopupOpen(true)} />
      <GuaranteeBanner />
      <Testimonials onOpenDevis={() => setIsDevisPopupOpen(true)} />
      <ScarcityBanner />
      <OrderTracking />
      <PaymentSecurityBanner />
      <FAQ />
      <Footer />
      <PremiumPopups />
      <LiveChat />
      <DevisPopup 
        isOpen={isDevisPopupOpen} 
        onClose={() => setIsDevisPopupOpen(false)} 
      />
    </div>
  );
}

export default App;