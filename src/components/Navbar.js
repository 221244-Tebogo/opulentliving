import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Add your logo image here */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#bedroom">Bedroom</a>
        <a href="#livingroom">Living Room</a>
        <a href="#changeroom">Change Room</a>
        <a href="#office">Office</a>
        <a href="#contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
