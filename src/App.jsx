import React from "react";
import HeroSlider from "./components/HeroSlider";
import "../src/App.css";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import LocationAdvantages from "./components/LocationAdvantages";
import AboutIraRealty from "./components/AboutIraReality";
import ContactUs from "./components/Contactus";
import AmenitiesSection from "./components/AmenitiesSection";
import FloorPlans from "./components/FloorPlans";
import VillaSpecifications from "./components/VillaSpecifications";
import UrbanSection from "./components/UrbanSection";
import GallerySection from "./components/GallerySection";
import MasterPlan from "./components/MasterPlan";
import SmartLiving from "./components/SmartLiving";

export default function App() {
  return (
    <div className="font-sans overflow-x-hidden w-full mx-auto">
      <style>

        {`
          html, body {
            overflow-x: hidden; 
            width: 100%; 
            margin: 0; 
            padding: 0; 
          }
          {
            box-sizing: border-box;
          }
        `}


      </style>
      <HeroSlider />
      <VillaSpecifications />
      <UrbanSection />
      <AmenitiesSection />
      {/* <br/> */}
      <GallerySection />
      <SmartLiving />
      <MasterPlan />
      <FloorPlans />
      <LocationAdvantages />
      <Testimonials />
      <ContactUs />
      <AboutIraRealty />
      <br />
      <br />
      <Footer />
    </div>
  );
}
