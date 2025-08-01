/**
* Template Name: Dewi
* Template URL: https://bootstrapmade.com/dewi-free-multi-purpose-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

/**
   * Capability card toggle
   */

function toggleCard(card) {
  // Collapse any expanded cards except the clicked one
  document.querySelectorAll('.card').forEach(c => {
      if (c !== card) c.classList.remove('expanded');
  });

  // Toggle clicked card
  card.classList.toggle('expanded');
}

//Capabilites Section
function toggleCard(card) {
  // Collapse any expanded cards except the clicked one
  document.querySelectorAll('.card').forEach(c => {
      if (c !== card) c.classList.remove('expanded');
  });

  // Toggle clicked card
  card.classList.toggle('expanded');
}

//client js
const logos = [
  "assets/img/clients/MM-Logo-Black-1.png",
  "assets/img/clients/Jacobs_Engineering_logo.png",
  "assets/img/clients/Petrofac-Logo-7.png",
  "assets/img/clients/TECHNIP_ENERGIES_LOGO-3.png",
  "assets/img/clients/yokogawa-logo.svg",
  "assets/img/clients/Emerson-Electric-Logo.png",
  "assets/img/clients/Reliance-logo.png",
  "assets/img/clients/tata-consultancy-services-logo.png",
  "assets/img/clients/LYB_BIG.png",
  "assets/img/clients/Fosterlogofw-logo.jpg",
  "assets/img/clients/worleyparsons-limited-logo.png",
  "assets/img/clients/kesar_petroproducts_limited_logo.jpg",
  "assets/img/clients/Bayer-logo.png",
  "assets/img/clients/SNC-Lavalin-logo-2.png",
  "assets/img/clients/BP-Emblem.png",
  "assets/img/clients/IndianOil_Logo_.jpg",
  "assets/img/clients/Hindustan_Petroleum-Logo.png",
  "assets/img/clients/Bharat-Petroleum-Logo.jpg",
  "assets/img/clients/Dangote_Group_Logo.png",
  "assets/img/clients/Saudi-Aramco-Logo.jpg",
  "assets/img/clients/Adnoc-logo.png",
  "assets/img/clients/SABIC_Logo.png"
];

let currentIndex = 0;
const grid = document.getElementById('logoGrid');

// Initial fill
function fillGrid() {
  grid.innerHTML = '';
  const isMobile = window.innerWidth < 768;
  totalBlocks = isMobile ? 10 : 12;

  const shuffledLogos = [...logos].sort(() => Math.random() - 0.5);

  for (let i = 0; i < totalBlocks; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');


    const img = document.createElement('img');
    
    if (i >= shuffledLogos.length) {
      img.src = shuffledLogos[i % shuffledLogos.length];
    } else {
      img.src = shuffledLogos[i];
    }

    div.appendChild(img);
    grid.appendChild(div);
  }
}

function getRandomLogo() {
  return logos[Math.floor(Math.random() * logos.length)];
}

// Change random block logo with fade animation
function changeRandomLogo() {
  const blocks = document.querySelectorAll('.grid-item');
  if (blocks.length === 0) return;

  const usedLogos = new Set();
  blocks.forEach(block => {
    const img = block.querySelector('img');
    if (img) usedLogos.add(img.src);
  });

  const availableLogos = logos.filter(
    logo => ![...usedLogos].some(used => used.includes(logo))
  );

  if (availableLogos.length === 0) return;

  const randomIndex = Math.floor(Math.random() * blocks.length);
  const randomBlock = blocks[randomIndex];
  const img = randomBlock.querySelector('img');

  const newLogo = availableLogos[Math.floor(Math.random() * availableLogos.length)];

  img.classList.add('fade-out');

  setTimeout(() => {
    img.src = newLogo;
    img.classList.remove('fade-out');
    img.classList.add('fade-in');

    setTimeout(() => {
      img.classList.remove('fade-in');
    }, 500);
  }, 500);
}

// Initial display
fillGrid();

// Update on screen resize
window.addEventListener('resize', fillGrid);

// Run change every 2 seconds
setInterval(changeRandomLogo, 5000);