import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${active ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src="/assets/images/Bimal_logo.png" width="75" height="24" alt="Bimal home" />
        </a>

        <Navbar />

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Header;
