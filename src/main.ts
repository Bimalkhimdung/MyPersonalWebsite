import './style.css';

/**
 * add event listener on multiple elements
 */
const addEventOnElements = function (
  elements: NodeListOf<Element> | Element[],
  eventType: string,
  callback: EventListenerOrEventListenerObject
): void {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * NAVBAR TOGGLE FOR MOBILE
 */
const navbar = document.querySelector("[data-navbar]") as HTMLElement | null;
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]") as HTMLElement | null;

const toggleNavbar = function (): void {
  navbar?.classList.toggle("active");
  overlay?.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER
 * active header when window scroll down to 100px
 */
const header = document.querySelector("[data-header]") as HTMLElement | null;

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header?.classList.add("active");
  } else {
    header?.classList.remove("active");
  }
});

/**
 * SCROLL REVEAL
 */
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]") as NodeListOf<HTMLElement>;

const reveal = function (): void {
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
window.addEventListener("load", reveal);