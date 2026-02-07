

const Contact = () => {
  return (
    <section id="contact" className="section contact" aria-label="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content" data-reveal="left">
            <div className="card-icon">
              <img
                src="/assets/images/icon-5.svg"
                width="44"
                height="44"
                loading="lazy"
                alt="envelop icon"
              />
            </div>

            <h2 className="h2 section-title">If you like what you see, let's work together.</h2>

            <p className="section-text">
              I bring rapid solutions to make the life of my clients easier. Have any questions?
              Reach out to me from this contact form and I will get back to you shortly.
            </p>
          </div>

          <form action="" className="contact-form" data-reveal="right">
            <div className="input-wrapper">
              <input type="text" name="name" placeholder="Name *" required className="input-field" />

              <input
                type="email"
                name="email_address"
                placeholder="Email *"
                required
                className="input-field"
              />
            </div>

            <textarea name="message" placeholder="Message *" required className="input-field"></textarea>

            <button type="submit" className="btn btn-secondary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
