/* ============================================================
   RENDERIZAÇÃO DOS DESTINOS
   ============================================================ */

const listEl = document.getElementById('destinationsList');

DESTINATIONS.forEach((destination, destinationIndex) => {
  const isReverse = destinationIndex % 2 === 1;

  const carouselImages = destination.gallery?.length
    ? destination.gallery
    : [destination.cover];

  const item = document.createElement('div');

  item.className =
    'dest-item' +
    (isReverse ? ' is-reverse' : '');

  item.innerHTML = `
    <div
      class="thread-dot"
      data-dot="${destinationIndex}"
    ></div>

    <div class="dest-photo">
      <div
        class="dest-media"
        data-open="${destinationIndex}"
        data-carousel
      >
        <div class="dest-slides">
          ${carouselImages.map((imagePath, imageIndex) => `
            <img
              src="${imagePath}"
              alt="${
                imageIndex === 0
                  ? `${destination.name} — foto principal`
                  : `${destination.name} — foto ${imageIndex + 1}`
              }"
              class="dest-slide${
                imageIndex === 0 ? ' is-active' : ''
              }"
              loading="lazy"
            >
          `).join('')}
        </div>

        <button
          class="dest-carousel-arrow is-prev"
          type="button"
          aria-label="Foto anterior de ${destination.name}"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 5L8 12L15 19"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button
          class="dest-carousel-arrow is-next"
          type="button"
          aria-label="Próxima foto de ${destination.name}"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div
          class="dest-carousel-dots"
          aria-hidden="true"
        >
          ${carouselImages.map((_, imageIndex) => `
            <span
              class="dest-carousel-dot${
                imageIndex === 0 ? ' is-active' : ''
              }"
            ></span>
          `).join('')}
        </div>

        <div class="frame"></div>

        <span class="view-tag">
          <span class="dot"></span>
          Ver galeria
        </span>
      </div>

      <div class="dest-badge" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4C11 4 4 11 4 20c9 0 16-7 16-16Z" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M6 18C10 14 14 10 19 5" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      </div>
    </div>

    <div class="dest-text">
      <span class="dest-index script">
        ${String(destinationIndex + 1).padStart(2, '0')}
      </span>

      <h3>${destination.name}</h3>

      <span class="dest-loc">
        ${destination.location}
      </span>

      <p class="dest-desc">
        ${destination.text}
      </p>
    </div>
  `;

  listEl.appendChild(item);
});


/* ============================================================
   CARROSSEL AUTOMÁTICO DOS DESTINOS
   ============================================================ */

const CAROUSEL_DELAY = 3000;

document
  .querySelectorAll('[data-carousel]')
  .forEach((carousel) => {
    const slidesTrack = carousel.querySelector(
      '.dest-slides'
    );

    const slides = [
      ...carousel.querySelectorAll('.dest-slide')
    ];

    const dots = [
      ...carousel.querySelectorAll('.dest-carousel-dot')
    ];

    const prevButton = carousel.querySelector(
      '.dest-carousel-arrow.is-prev'
    );

    const nextButton = carousel.querySelector(
      '.dest-carousel-arrow.is-next'
    );

    let activeIndex = 0;
    let autoplayTimer = null;

    function showCarouselSlide(nextIndex) {
      if (!slides.length) return;

      activeIndex =
        (nextIndex + slides.length) % slides.length;

      slidesTrack.style.transform =
        `translate3d(-${activeIndex * 100}%, 0, 0)`;

      slides.forEach((slide, index) => {
        slide.classList.toggle(
          'is-active',
          index === activeIndex
        );
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle(
          'is-active',
          index === activeIndex
        );
      });
    }

    function stopAutoplay() {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }

    function startAutoplay() {
      stopAutoplay();

      if (slides.length > 1) {
        autoplayTimer = window.setInterval(() => {
          showCarouselSlide(activeIndex + 1);
        }, CAROUSEL_DELAY);
      }
    }

    function changeManually(direction, event) {
      event.preventDefault();
      event.stopPropagation();

      showCarouselSlide(activeIndex + direction);

      // Reinicia a contagem dos três segundos
      startAutoplay();
    }

    prevButton.addEventListener('click', (event) => {
      changeManually(-1, event);
    });

    nextButton.addEventListener('click', (event) => {
      changeManually(1, event);
    });

    if (slides.length < 2) {
      prevButton.hidden = true;
      nextButton.hidden = true;

      const dotsContainer = carousel.querySelector(
        '.dest-carousel-dots'
      );

      if (dotsContainer) {
        dotsContainer.hidden = true;
      }
    }

    showCarouselSlide(0);
    startAutoplay();
  });


/* ============================================================
   ANO ATUAL
   ============================================================ */

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}


/* ============================================================
   BOTÃO DO WHATSAPP
   ============================================================ */

const WHATSAPP_NUMBER = '5519998719048';

const WHATSAPP_MESSAGE =
  'Olá, Taciana! Vi o site e quero saber mais sobre roteiros de viagem.';

const whatsappButton =
  document.getElementById('whatsappCta');

if (whatsappButton) {
  whatsappButton.href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE
    )}`;
}


/* ============================================================
   CABEÇALHO E MENU MOBILE
   ============================================================ */

const header =
  document.getElementById('siteHeader');

const navToggle =
  document.getElementById('navToggle');

const navLinks =
  document.getElementById('navLinks');

const lightbox =
  document.getElementById('lightbox');


window.addEventListener('scroll', () => {
  if (!header) return;

  header.classList.toggle(
    'is-scrolled',
    window.scrollY > 60
  );
});


if (navToggle && navLinks && header) {
  navToggle.addEventListener('click', () => {
    const isOpening =
      !navToggle.classList.contains('is-open');

    if (isOpening) {
      if (lightbox) {
        lightbox.classList.remove('is-open');
      }

      header.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      header.classList.remove('menu-open');
      document.body.style.overflow = '';
    }

    navToggle.classList.toggle('is-open');
    navLinks.classList.toggle('is-open');
  });
}


document
  .querySelectorAll('.nav-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      navToggle?.classList.remove('is-open');
      navLinks?.classList.remove('is-open');
      header?.classList.remove('menu-open');

      document.body.style.overflow = '';
    });
  });


/* ============================================================
   ANIMAÇÕES GSAP
   ============================================================ */

if (
  typeof gsap !== 'undefined' &&
  typeof ScrollTrigger !== 'undefined'
) {
  gsap.registerPlugin(ScrollTrigger);


  /* Hero com efeito parallax */

  const heroImage =
    document.querySelector('.hero-media img');

  if (heroImage) {
    gsap.to(heroImage, {
      yPercent: 12,
      ease: 'none',

      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }


  /* Animações genéricas de entrada */

  gsap
    .utils
    .toArray('[data-reveal]')
    .forEach((element) => {
      gsap.fromTo(
        element,

        {
          opacity: 0,
          y: 34
        },

        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: element,
            start: 'top 85%'
          }
        }
      );
    });


  /* Animações dos destinos */

  document
    .querySelectorAll('.dest-item')
    .forEach((item) => {
      const media =
        item.querySelector('.dest-media');

      const text =
        item.querySelector('.dest-text');

      const dot =
        item.querySelector('.thread-dot');

      const isReverse =
        item.classList.contains('is-reverse');

      const fromX =
        isReverse ? 60 : -60;

      if (media) {
        gsap.fromTo(
          media,

          {
            opacity: 0,
            x: fromX,
            scale: 0.96
          },

          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',

            scrollTrigger: {
              trigger: item,
              start: 'top 78%'
            }
          }
        );
      }

      if (text) {
        gsap.fromTo(
          text,

          {
            opacity: 0,
            x: -fromX * 0.5
          },

          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.15,

            scrollTrigger: {
              trigger: item,
              start: 'top 75%'
            }
          }
        );
      }

      if (dot) {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 60%',

          onEnter: () => {
            dot.classList.add('is-lit');
          },

          onLeaveBack: () => {
            dot.classList.remove('is-lit');
          }
        });
      }
    });


  /* Progresso da linha central */

  const threadProgress =
    document.getElementById('threadProgress');

  const journeySection =
    document.querySelector('.journey');

  if (threadProgress && journeySection) {
    ScrollTrigger.create({
      trigger: journeySection,
      start: 'top 60%',
      end: 'bottom 60%',
      scrub: true,

      onUpdate: (self) => {
        const offset =
          100 - self.progress * 100;

        threadProgress.style.strokeDashoffset =
          offset;
      }
    });
  }


  /* Cartões da seção "Por que viajar comigo" */

  gsap
    .utils
    .toArray('.why-card')
    .forEach((card, index) => {
      gsap.fromTo(
        card,

        {
          opacity: 0,
          y: 26
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.08,
          ease: 'power2.out',

          scrollTrigger: {
            trigger: card,
            start: 'top 88%'
          }
        }
      );
    });
}


/* ============================================================
   GALERIA AMPLIADA
   ============================================================ */

const lightboxFrame =
  document.getElementById('lightboxFrame');

const lightboxTitle =
  document.getElementById('lightboxTitle');

const lightboxLoc =
  document.getElementById('lightboxLoc');

const lightboxCount =
  document.getElementById('lightboxCount');

const lightboxClose =
  document.getElementById('lightboxClose');

const lightboxPrev =
  document.getElementById('lightboxPrev');

const lightboxNext =
  document.getElementById('lightboxNext');

let currentDestination = null;
let currentImageIndex = 0;


/* Cria as imagens dentro da galeria */

function buildLightbox(destination) {
  if (!lightboxFrame) return;

  const images = destination.gallery?.length
    ? destination.gallery
    : [destination.cover];

  lightboxFrame.innerHTML =
    images
      .map((imagePath, imageIndex) => `
        <img
          src="${imagePath}"
          alt="${destination.name} — foto ${imageIndex + 1}"
          class="${imageIndex === 0 ? 'is-active' : ''}"
          data-i="${imageIndex}"
        >
      `)
      .join('');
}


/* Exibe uma imagem da galeria */

function showLightboxSlide(nextIndex) {
  if (!lightboxFrame) return;

  const images =
    lightboxFrame.querySelectorAll('img');

  if (!images.length) return;

  images.forEach((image) => {
    image.classList.remove('is-active');
  });

  currentImageIndex =
    (nextIndex + images.length) % images.length;

  images[currentImageIndex]
    .classList
    .add('is-active');

  if (lightboxCount) {
    lightboxCount.textContent =
      `${currentImageIndex + 1} / ${images.length}`;
  }
}


/* Abre a galeria */

function openLightbox(destination) {
  if (!lightbox) return;

  navToggle?.classList.remove('is-open');
  navLinks?.classList.remove('is-open');
  header?.classList.remove('menu-open');

  currentDestination = destination;

  buildLightbox(destination);

  if (lightboxTitle) {
    lightboxTitle.textContent =
      destination.name;
  }

  if (lightboxLoc) {
    lightboxLoc.textContent =
      destination.location;
  }

  showLightboxSlide(0);

  lightbox.classList.add('is-open');

  document.body.style.overflow = 'hidden';
}


/* Fecha a galeria */

function closeLightbox() {
  if (!lightbox) return;

  lightbox.classList.remove('is-open');

  document.body.style.overflow = '';
}


/* Clique em uma foto de destino */

document.addEventListener('click', (event) => {
  const trigger =
    event.target.closest('[data-open]');

  if (!trigger) return;

  const destinationIndex =
    Number.parseInt(
      trigger.getAttribute('data-open'),
      10
    );

  if (
    Number.isNaN(destinationIndex) ||
    !DESTINATIONS[destinationIndex]
  ) {
    return;
  }

  openLightbox(
    DESTINATIONS[destinationIndex]
  );
});


/* Botão para fechar a galeria */

lightboxClose?.addEventListener(
  'click',
  closeLightbox
);


/* Fecha clicando no fundo escuro */

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});


/* Seta anterior da galeria */

lightboxPrev?.addEventListener('click', () => {
  showLightboxSlide(
    currentImageIndex - 1
  );
});


/* Próxima seta da galeria */

lightboxNext?.addEventListener('click', () => {
  showLightboxSlide(
    currentImageIndex + 1
  );
});


/* Controles pelo teclado */

document.addEventListener('keydown', (event) => {
  if (
    !lightbox ||
    !lightbox.classList.contains('is-open')
  ) {
    return;
  }

  if (event.key === 'Escape') {
    closeLightbox();
  }

  if (event.key === 'ArrowLeft') {
    showLightboxSlide(
      currentImageIndex - 1
    );
  }

  if (event.key === 'ArrowRight') {
    showLightboxSlide(
      currentImageIndex + 1
    );
  }
});


/* ============================================================
   FINALIZAÇÃO
   ============================================================ */

if (
  typeof ScrollTrigger !== 'undefined'
) {
  ScrollTrigger.refresh();
}