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
            overflow-x: hidden; /* Prevents horizontal scrolling */
            width: 100%; /* Ensures the body takes full width */
            margin: 0; /* Resets default margin */
            padding: 0; /* Resets default padding */
          }
          /* Apply a global box-sizing for all elements */
          * {
            box-sizing: border-box;
          }
        `}
      </style>
      <HeroSlider />
      <VillaSpecifications />
      <UrbanSection />
      <AmenitiesSection />
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
