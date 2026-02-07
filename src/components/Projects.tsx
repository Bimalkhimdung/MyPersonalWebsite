
// @ts-nocheck

const Projects = () => {
  return (
    <section id="project" className="section project" aria-labelledby="project-label">
      <div className="container">
        <div className="title-wrapper" data-reveal="top">
          <div>
            <h2 className="h2 section-title" id="project-label">
              Latest Projects
            </h2>

            <p className="section-text">
              Check out some of my latest projects with creative ideas.
            </p>
          </div>

          <a href="#project" className="btn btn-secondary">
            See All Projects
          </a>
        </div>

        <ul className="grid-list">
          <li>
            <div className="project-card project-card-1" style={{ backgroundColor: '#dcf0fc' }}>
              <div className="card-content" data-reveal="left">
                <p className="card-tag" style={{ color: '#436ab4' }}>
                  Website
                </p>

                <h3 className="h3 card-title">RealHrSoft</h3>

                <p className="card-text">
                  RealHRSoft is a Human Resource Management Solution built through extensive global
                  and local research. The solution is built up by HR practitioners and HR technology
                  enthusiasts with only one promise - Build and sustain a highly productive Human
                  Resource.
                </p>

                <a href="https:realhrsoft.com/" className="btn-text" style={{ color: '#584c64' }}>
                  <span className="span">See Project</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>

              <figure className="card-banner" data-reveal="right">
                <img
                  src="/assets/images/mobile_app.png"
                  width="650"
                  height="370"
                  loading="lazy"
                  alt="Routine generator"
                  className="w-100"
                />
              </figure>
            </div>
          </li>
          <li>
            <div className="project-card project-card-1" style={{ backgroundColor: '#f5fbfb' }}>
              <div className="card-content" data-reveal="left">
                <p className="card-tag" style={{ color: '#a07cc5' }}>
                  Major Project
                </p>

                <h3 className="h3 card-title">Automatic Routine Generator</h3>

                <p className="card-text">
                  The aim of the project was to tackle the complex problem of creating timetables for
                  University that deal with theory classes, laboratory classes and breaks.The project
                  is designed to generate routine for only Computer Department of National College
                  of Engineering.
                </p>

                <a
                  href="https://github.com/Bimalkhimdung/Major_Project"
                  className="btn-text"
                  style={{ color: '#a07cc5' }}
                >
                  <span className="span">See Project</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>

              <figure className="card-banner" data-reveal="right">
                <img
                  src="/assets/images/Major_project.png"
                  width="650"
                  height="370"
                  loading="lazy"
                  alt="Routine generator"
                  className="w-100"
                />
              </figure>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
