/* ============================================================
   RENDER DESTINATIONS
   ============================================================ */

const listEl = document.getElementById('destinationsList');

DESTINATIONS.forEach((d, i) => {

  const isReverse = i % 2 === 1;

  const item = document.createElement('div');

  item.className =
    'dest-item' +
    (isReverse ? ' is-reverse' : '');

  item.innerHTML = `
    <div class="thread-dot" data-dot="${i}"></div>

    <div class="dest-media" data-open="${i}">
      <img
        src="${d.cover}"
        alt="${d.name} — imagem ilustrativa"
        loading="lazy"
      >

      <div class="frame"></div>

      <span class="view-tag">
        <span class="dot"></span>
        Ver galeria
      </span>
    </div>

    <div class="dest-text">
      <span class="dest-index script">
        ${String(i + 1).padStart(2, '0')}
      </span>

      <h3>${d.name}</h3>

      <span class="dest-loc">
        ${d.location}
      </span>

      <p class="dest-desc">
        ${d.text}
      </p>
    </div>
  `;

  listEl.appendChild(item);

});


/* ============================================================
   CURRENT YEAR
   ============================================================ */

document.getElementById('year').textContent =
  new Date().getFullYear();


/* ============================================================
   WHATSAPP CTA
   ============================================================ */

/*
   Troque pelo número real da Taciana.
*/
const WHATSAPP_NUMBER = "5599999999999";

const WHATSAPP_MESSAGE =
  "Olá, Taciana! Vi o site e quero saber mais sobre roteiros de viagem.";

document.getElementById('whatsappCta').href =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;


/* ============================================================
   HEADER SCROLL STATE + MOBILE NAV
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

  header.classList.toggle(
    'is-scrolled',
    window.scrollY > 60
  );

});


/*
   Abre/fecha o menu mobile.

   IMPORTANTE:
   Se o menu estiver sendo aberto enquanto a lightbox estiver
   aberta, a lightbox é fechada primeiro. Isso evita que os dois
   componentes disputem a mesma camada visual.
*/
navToggle.addEventListener('click', () => {

  const isOpening =
    !navToggle.classList.contains('is-open');


  if (isOpening) {

    /*
       Fecha a galeria antes de abrir o menu.
    */
    lightbox.classList.remove('is-open');


    /*
       O menu mobile passa a ocupar a camada superior.
    */
    header.classList.add('menu-open');

    /*
       Como o menu passa a controlar o scroll da página,
       garantimos que o estado do body permaneça correto.
    */
    document.body.style.overflow = 'hidden';

  } else {

    /*
       Fechando o menu.
    */
    header.classList.remove('menu-open');

    document.body.style.overflow = '';

  }


  navToggle.classList.toggle('is-open');

  navLinks.classList.toggle('is-open');

});


/*
   Fecha o menu ao clicar em qualquer link.
*/
document.querySelectorAll('.nav-link').forEach(link => {

  link.addEventListener('click', () => {

    navToggle.classList.remove('is-open');

    navLinks.classList.remove('is-open');

    header.classList.remove('menu-open');

    document.body.style.overflow = '';

  });

});


/* ============================================================
   GSAP / SCROLLTRIGGER
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);


/* ------------------------------------------------------------
   Hero parallax
   ------------------------------------------------------------ */

gsap.to('.hero-media img', {

  yPercent:12,

  ease:'none',

  scrollTrigger:{
    trigger:'.hero',
    start:'top top',
    end:'bottom top',
    scrub:true
  }

});


/* ------------------------------------------------------------
   Generic reveal
   ------------------------------------------------------------ */

gsap.utils.toArray('[data-reveal]').forEach(el => {

  gsap.fromTo(
    el,

    {
      opacity:0,
      y:34
    },

    {
      opacity:1,
      y:0,
      duration:1,
      ease:'power3.out',

      scrollTrigger:{
        trigger:el,
        start:'top 85%'
      }
    }
  );

});


/* ------------------------------------------------------------
   Destination items
   Alternância esquerda / direita
   ------------------------------------------------------------ */

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


    gsap.fromTo(

      media,

      {
        opacity:0,
        x:fromX,
        scale:.96
      },

      {
        opacity:1,
        x:0,
        scale:1,
        duration:1.1,
        ease:'power3.out',

        scrollTrigger:{
          trigger:item,
          start:'top 78%'
        }
      }

    );


    gsap.fromTo(

      text,

      {
        opacity:0,
        x:-fromX * .5
      },

      {
        opacity:1,
        x:0,
        duration:1,
        ease:'power3.out',
        delay:.15,

        scrollTrigger:{
          trigger:item,
          start:'top 75%'
        }
      }

    );


    ScrollTrigger.create({

      trigger:item,

      start:'top 60%',

      onEnter:() => {

        dot.classList.add('is-lit');

      },

      onLeaveBack:() => {

        dot.classList.remove('is-lit');

      }

    });

  });


/* ------------------------------------------------------------
   Linha central de progresso
   ------------------------------------------------------------ */

const threadProgress =
  document.getElementById('threadProgress');

const journeySection =
  document.querySelector('.journey');


ScrollTrigger.create({

  trigger:journeySection,

  start:'top 60%',

  end:'bottom 60%',

  scrub:true,

  onUpdate:self => {

    const offset =
      100 - (self.progress * 100);

    threadProgress.style.strokeDashoffset =
      offset;

  }

});


/* ------------------------------------------------------------
   Why cards
   ------------------------------------------------------------ */

gsap.utils.toArray('.why-card').forEach(
  (card, i) => {

    gsap.fromTo(

      card,

      {
        opacity:0,
        y:26
      },

      {
        opacity:1,
        y:0,
        duration:.8,
        delay:i * .08,
        ease:'power2.out',

        scrollTrigger:{
          trigger:card,
          start:'top 88%'
        }
      }

    );

  }
);


/* ============================================================
   LIGHTBOX GALLERY
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


let currentDest = null;

let currentIndex = 0;


/* ------------------------------------------------------------
   Cria as imagens da galeria
   ------------------------------------------------------------ */

function buildFrame(dest){

  lightboxFrame.innerHTML =
    dest.gallery
      .map((src, i) =>

        `<img
          src="${src}"
          alt="${dest.name} — foto ${i + 1}"
          class="${i === 0 ? 'is-active' : ''}"
          data-i="${i}"
        >`

      )
      .join('');

}


/* ------------------------------------------------------------
   Mostra uma foto
   ------------------------------------------------------------ */

function showSlide(i){

  const imgs =
    lightboxFrame.querySelectorAll('img');


  imgs.forEach(img => {

    img.classList.remove('is-active');

  });


  currentIndex =
    (i + imgs.length) % imgs.length;


  imgs[currentIndex]
    .classList.add('is-active');


  lightboxCount.textContent =
    `${currentIndex + 1} / ${imgs.length}`;

}


/* ------------------------------------------------------------
   Abre o lightbox
   ------------------------------------------------------------ */

function openLightbox(dest){

  /*
     Garante que o menu mobile esteja fechado antes de
     abrir a galeria.
  */
  navToggle.classList.remove('is-open');

  navLinks.classList.remove('is-open');

  header.classList.remove('menu-open');


  currentDest = dest;

  buildFrame(dest);

  lightboxTitle.textContent =
    dest.name;

  lightboxLoc.textContent =
    dest.location;

  showSlide(0);

  lightbox.classList.add('is-open');

  document.body.style.overflow = 'hidden';

}


/* ------------------------------------------------------------
   Fecha o lightbox
   ------------------------------------------------------------ */

function closeLightbox(){

  lightbox.classList.remove('is-open');

  document.body.style.overflow = '';

}


/* ------------------------------------------------------------
   Clique nos destinos
   ------------------------------------------------------------ */

document.addEventListener(
  'click',
  (e) => {

    const trigger =
      e.target.closest('[data-open]');


    if (!trigger) return;


    const idx =
      parseInt(
        trigger.getAttribute('data-open'),
        10
      );


    openLightbox(
      DESTINATIONS[idx]
    );

  }
);


/* ------------------------------------------------------------
   Controles
   ------------------------------------------------------------ */

lightboxClose.addEventListener(
  'click',
  closeLightbox
);


lightbox.addEventListener(
  'click',
  (e) => {

    if (e.target === lightbox){

      closeLightbox();

    }

  }
);


lightboxPrev.addEventListener(
  'click',
  () => {

    showSlide(
      currentIndex - 1
    );

  }
);


lightboxNext.addEventListener(
  'click',
  () => {

    showSlide(
      currentIndex + 1
    );

  }
);


/* ------------------------------------------------------------
   Teclado
   ------------------------------------------------------------ */

document.addEventListener(
  'keydown',
  (e) => {

    if (
      !lightbox.classList.contains(
        'is-open'
      )
    ){
      return;
    }


    if (e.key === 'Escape'){

      closeLightbox();

    }


    if (e.key === 'ArrowLeft'){

      showSlide(
        currentIndex - 1
      );

    }


    if (e.key === 'ArrowRight'){

      showSlide(
        currentIndex + 1
      );

    }

  }
);


/* ============================================================
   FINAL
   ============================================================ */

ScrollTrigger.refresh();