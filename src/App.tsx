import { useEffect } from 'react';
// import NavbarDemo from './components/NavbarDemo';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Experience from './components/Experience';

function App() {
  useEffect(() => {
    // Scroll reveal logic
    const revealElements = document.querySelectorAll("[data-reveal]");
    const revealDelayElements = document.querySelectorAll("[data-reveal-delay]") as NodeListOf<HTMLElement>;

    const reveal = function () {
      for (let i = 0, len = revealElements.length; i < len; i++) {
        const element = revealElements[i] as HTMLElement;
        if (element.getBoundingClientRect().top < window.innerHeight / 1.2) {
          element.classList.add("revealed");
        }
      }
    }

    for (let i = 0, len = revealDelayElements.length; i < len; i++) {
       const delay = revealDelayElements[i].dataset.revealDelay;
       if(delay) {
           revealDelayElements[i].style.transitionDelay = delay;
       }
    }

    window.addEventListener("scroll", reveal);
    window.addEventListener("load", reveal); // Trigger on load too

    return () => {
        window.removeEventListener("scroll", reveal);
        window.removeEventListener("load", reveal);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      {/* <NavbarDemo /> */}
      <main>
        <article>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default App;
