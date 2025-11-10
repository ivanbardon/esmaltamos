import React from 'react';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Trabajos from '../components/Trabajos';
import CallToAction from '../components/CallToAction';

export default function Inicio() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <CallToAction />
      <Trabajos />
    </>
  );
}