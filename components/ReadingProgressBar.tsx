import React, { useEffect } from 'react';
import './ReadingProgressBar.css'; // Import CSS styles

const ReadingProgressBar: React.FC = () => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.documentElement.style.setProperty('--scroll', `${scrollPercentage}%`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="reading-progress-bar"></div>;
};

export default ReadingProgressBar;
