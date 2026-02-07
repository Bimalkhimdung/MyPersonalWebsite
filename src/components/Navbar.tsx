// @ts-nocheck

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNavbar = () => setNavActive((prev) => !prev);
  const closeNavbar = () => setNavActive(false);

  useEffect(() => {
    if (navActive) {
      document.body.classList.add('nav-active');
      document.querySelector('.overlay')?.classList.add('active');
    } else {
      document.body.classList.remove('nav-active');
      document.querySelector('.overlay')?.classList.remove('active');
    }
  }, [navActive]);

  return (
    <>
      <nav className={`navbar ${navActive ? 'active' : ''}`} data-navbar>
        <div className="navbar-top">
          <a href="#" className="logo">
            <img
              src="/assets/images/bimal-logo-black-background.png"
              width="64"
              height="24"
              alt="Bimal home"
            />
          </a>

          <button
            className="nav-close-btn"
            aria-label="close menu"
            data-nav-toggler
            onClick={closeNavbar}
          >
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <ul className="navbar-list">
          <li>
            <a href="#" className="navbar-link" onClick={closeNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-link" onClick={closeNavbar}>
              About
            </a>
          </li>
          <li>
            <a href="#project" className="navbar-link" onClick={closeNavbar}>
              Projects
            </a>
          </li>
          <li>
            <a href="https://bimalrai.hashnode.dev/newsletter" className="navbar-link" onClick={closeNavbar}>
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link" onClick={closeNavbar}>
              Contact
            </a>
          </li>
        </ul>

        <div className="wrapper">
          <a href="mailto:bimalkhimdung@gmail.com" className="contact-link">
            bimalkhimdung@gmail.com
          </a>
          <a href="tel:+977 9814956578" className="contact-link">
            +977 9814956578
          </a>
        </div>

        <div className="social-wrapper">
          <span className="social-trigger">Social</span>
          <ul className="social-list">
            <li>
              <a href="https://github.com/Bimalkhimdung" className="social-link" target="_blank">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bimal_khimdung" className="social-link" target="_blank">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bimalkhimdung/" className="social-link" target="_blank">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Bimalkhimdungrai/" className="social-link" target="_blank">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCnqWsRkdT7jZjBAqXVwnGsA" className="social-link" target="_blank">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <button
        className="nav-open-btn"
        aria-label="open menu"
        data-nav-toggler
        onClick={toggleNavbar}
      >
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>

      {/* Overlay logic is partly handled in Header or here. In App.tsx it was separate. 
          To keep it clean, the overlay is usually outside the nav but controlled by it.
          I'll keep it in Header for DOM structure but control it via shared state or context if needed.
          For simplicity, I left the overlay div in Header and will control it via DOM manipulation in useEffect here, 
          OR I should lift state up to Header.
      */}
    </>
  );
};

export default Navbar;
