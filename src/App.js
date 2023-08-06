import React from 'react';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage'
//import StingrayChair from './components/StingrayChair';
//import ProductCard from './components/ProductCard';
//import NightstandsSection from './components/NightstandsSection';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroImage />
      <StingrayChair />
      <div className="product-cards-container">
        <ProductCard
          imageSrc="path_to_image_1.jpg"
          description="Product Description 1"
        />
        <ProductCard
          imageSrc="path_to_image_2.jpg"
          description="Product Description 2"
        />
        <ProductCard
          imageSrc="path_to_image_3.jpg"
          description="Product Description 3"
        />
      </div>
      <NightstandsSection />
    </div>
  );
};

export default App;
