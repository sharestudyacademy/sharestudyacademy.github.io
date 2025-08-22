(function() {
  "use strict";

  /**
   * Waits for the document to be fully loaded before running scripts.
   */
  document.addEventListener('DOMContentLoaded', function() {

    // -----------------------------------------
    // 1. Header scroll effect
    // -----------------------------------------
    const header = document.querySelector('.start-style');
    if (header) {
      window.addEventListener('scroll', function() {
        if (window.scrollY >= 10) {
          header.classList.add('scroll-on');
          header.classList.remove('start-style');
        } else {
          header.classList.add('start-style');
          header.classList.remove('scroll-on');
        }
      });
    }

    // -----------------------------------------
    // 2. Animation class removal
    // -----------------------------------------
    const body = document.body;
    if (body.classList.contains('hero-anime')) {
      body.classList.remove('hero-anime');
    }

    // -----------------------------------------
    // 3. Menu on hover for desktop view
    // -----------------------------------------
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
        if (window.innerWidth > 750) {
          this.classList.add('show');
        }
      });
      item.addEventListener('mouseleave', function() {
        if (window.innerWidth > 750) {
          this.classList.remove('show');
        }
      });
    });

  });

  // -----------------------------------------
  // 4. Make all external links open in a new tab
  // -----------------------------------------
  const allLinks = document.links;
  for (let i = 0; i < allLinks.length; i++) {
    if (allLinks[i].hostname !== window.location.hostname) {
      allLinks[i].target = '_blank';
    }
  }

})();
