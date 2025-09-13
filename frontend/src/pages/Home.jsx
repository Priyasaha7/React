import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AcademicDashboard from "../components/AcademicDashboard";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AcademicDashboard />
      <CTASection />
      <Footer />
    </div>
  );
}
