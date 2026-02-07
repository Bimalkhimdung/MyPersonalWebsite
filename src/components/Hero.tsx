

const Hero = () => {
  return (
    <section className="section hero" aria-label="home">
      <div className="container">
        <figure className="hero-banner">
          <img
            src="/assets/images/Bimal Main.jpg"
            width="560"
            height="540"
            alt="Bimal"
            className="w-100"
            data-reveal="top"
          />
        </figure>

        <div className="hero-content">
          <h1 className="h1 hero-title" data-reveal="top" data-reveal-delay="0.5s">
            I'm Devops Engineer.
          </h1>

          <p className="section-text" data-reveal="top" data-reveal-delay="0.75s">
            As a DevOps engineer, My role is to involves developing and implementing strategies to
            enhance software delivery processes, such as continuous integration & delivery, and
            implementing monitoring & logging systems to ensure application performance &
            availability.
          </p>

          <div className="btn-wrapper" data-reveal="top" data-reveal-delay="1s">
            <a href="#project" className="btn btn-primary">
              See My Works
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
