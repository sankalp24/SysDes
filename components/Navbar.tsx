import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolling ? 'blur' : ''}`} 
      animate={controls}
    >
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="hamburger">
        {/* Hamburger icon */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
