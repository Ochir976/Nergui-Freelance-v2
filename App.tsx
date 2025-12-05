import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import FeatureBanner from './components/FeatureBanner';
import MoneyBackSection from './components/MoneyBackSection';
import TestimonialSection from './components/TestimonialSection';
import LogoMaker from './components/LogoMaker';
import MadeOnSection from './components/MadeOnSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

const App: React.FC = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const openAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const closeAuth = () => {
    setIsAuthOpen(false);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar onOpenAuth={openAuth} />
      
      <main className="flex flex-col gap-16 md:gap-32">
        <Hero />
        <ServiceGrid />
        <FeatureBanner />
        <MoneyBackSection />
        <TestimonialSection />
        <LogoMaker />
        <MadeOnSection />
      </main>
      
      <Footer />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={closeAuth} 
        initialMode={authMode} 
      />
    </div>
  );
};

export default App;