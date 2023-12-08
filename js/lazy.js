document.addEventListener("DOMContentLoaded", function() {
    const lazyBackgrounds = document.querySelectorAll('.lazy-background');
  
    const lazyLoad = function(target) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Adjust as needed
      };
  
      const io = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const imageUrl = entry.target.getAttribute('data-src');
            entry.target.style.backgroundImage = `url('${imageUrl}')`;
            entry.target.classList.add('lazy-loaded');
            observer.unobserve(entry.target);
          }
        });
      }, options);
  
      target.forEach(function(element) {
        io.observe(element);
      });
    };
  
    lazyLoad(lazyBackgrounds);
  });
  