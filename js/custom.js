// Testimonail slider
$('.testSlider').owlCarousel({
  loop: true,
  margin: 30,
  items: 3,
  dots: true,
  nav: false,
  dotsEach: true,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

// Scroll bottom to top

document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.querySelector('.scrollBtn');

  // Show/Hide on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add('active');
    } else {
      scrollBtn.classList.remove('active');
    }
  });

  // Smooth scroll to top
  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
