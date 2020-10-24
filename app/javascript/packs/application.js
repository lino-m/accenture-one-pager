// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("channels");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context("../images", true);
// const imagePath = (name) => images(name, true)
import "bootstrap";


const articles = document.querySelectorAll('article');

articles.forEach(article => {

  // to compute the center of the card retrieve its coordinates and dimensions
  const {
    x, y, width, height,
  } = article.getBoundingClientRect();
  const cx = x + width / 2;
  const cy = y + height / 2;

  // following the mousemove event compute the distance betwen the cursor and the center of the card
  function handleMove(e) {
    const { pageX, pageY } = e;

    // ! consider the relative distance in the [-1, 1] range
    const dx = (cx - pageX) / (width / 2);
    const dy = (cy - pageY) / (height / 2);

    // rotate the card around the x axis, according to the vertical distance, and around the y acis, according to the horizontal gap
    this.style.transform = `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`;
  }

  // following the mouseout event reset the transform property
  function handleOut() {
    this.style.transform = 'initial';
  }

  article.addEventListener('mousemove', handleMove);
  article.addEventListener('mouseout', handleOut);
})


const initFaderOnScroll = () => {
  console.clear();
  const faders = document.querySelectorAll('.fade-in');
  // Change appear options here -> reduce threshold -> element appears sooner
  const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
  };
  // Create new observer
  const appearOnScroll = new IntersectionObserver(entries, appearOptions) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
        cnsole.log(entry);
      }
    });
  };

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
};

initFaderOnScroll;

