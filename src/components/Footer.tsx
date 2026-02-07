
// @ts-nocheck

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">© 2023 Bimalrai. All rights reserved.</p>

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
            <a
              href="https://www.facebook.com/Bimalkhimdungrai/"
              className="social-link"
              target="_blank"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/channel/UCnqWsRkdT7jZjBAqXVwnGsA"
              className="social-link"
              target="_blank"
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
