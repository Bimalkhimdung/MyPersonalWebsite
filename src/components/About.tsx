

const About = () => {
  return (
    <section id="about" className="section about" aria-label="about">
      <div className="container">
        <div className="wrapper">
          <div data-reveal="left">
            <h2 className="h2 section-title">What I Do?</h2>

            <p className="section-text">
              Deployment and Deliver Product with efficient,reliable and Secure to the end-users
              with highest level of quality and performance.
            </p>
          </div>

          <ul className="progress-list" data-reveal="right">
            <li className="progress-item">
              <div className="label-wrapper">
                <p>DevOps</p>

                <span className="span">100 %</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: '100%', backgroundColor: '#c7b1dd' }}
                ></div>
              </div>
            </li>

            <li className="progress-item">
              <div className="label-wrapper">
                <p>Cloud Services </p>

                <span className="span">95 %</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: '95%', backgroundColor: '#8caeec' }}
                ></div>
              </div>
            </li>

            <li className="progress-item">
              <div className="label-wrapper">
                <p>Automation</p>

                <span className="span">90 %</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: '90%', backgroundColor: '#b0d4c1' }}
                ></div>
              </div>
            </li>

            <li className="progress-item">
              <div className="label-wrapper">
                <p>SRE</p>

                <span className="span">80 %</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: '80%', backgroundColor: '#e3a6b6' }}
                ></div>
              </div>
            </li>
          </ul>
        </div>

        <ul className="grid-list">
          <li data-reveal="bottom">
            <div className="about-card">
              <div className="card-icon">
                <img
                  src="/assets/images/Devops.svg"
                  width="52"
                  height="52"
                  loading="lazy"
                  alt="web design icon"
                />
              </div>

              <h3 className="h4 card-title">DevOps</h3>

              <p className="card-text">
                Deployment and Deliver Product with efficient,reliable and Secure to the end-users
                with highest level of quality and performance.
              </p>
            </div>
          </li>

          <li data-reveal="bottom" data-reveal-delay="0.25s">
            <div className="about-card">
              <div className="card-icon">
                <img
                  src="/assets/images/Cloud.svg "
                  width="52"
                  height="52"
                  loading="lazy"
                  alt="mobile design icon"
                />
              </div>

              <h3 className="h4 card-title">Cloud Services</h3>

              <p className="card-text">
                Optimizing performance, security, and scalability to maximize efficiency.
              </p>
            </div>
          </li>

          <li data-reveal="bottom" data-reveal-delay="0.5s">
            <div className="about-card">
              <div className="card-icon">
                <img
                  src="/assets/images/Python.svg"
                  width="52"
                  height="52"
                  loading="lazy"
                  alt="web development icon"
                />
              </div>

              <h3 className="h4 card-title">Automation</h3>

              <p className="card-text">
                Streamline DevOps with Python: automation, configuration, orchestration, and more.
              </p>
            </div>
          </li>

          <li data-reveal="bottom" data-reveal-delay="0.75s">
            <div className="about-card">
              <div className="card-icon">
                <img
                  src="/assets/images/icon-4.svg"
                  width="52"
                  height="52"
                  loading="lazy"
                  alt="web seo icon"
                />
              </div>

              <h3 className="h4 card-title">SRE</h3>

              <p className="card-text">
                Focused on tailored solutions for clients' challenges, specializing in software dev
                and network security.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
