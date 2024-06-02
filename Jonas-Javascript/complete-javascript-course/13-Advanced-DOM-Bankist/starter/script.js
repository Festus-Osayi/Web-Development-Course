'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

/** Element selectors */
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1El = document.getElementById('section--1')
const header = document.querySelector('.header')
const allSection = document.querySelectorAll('section')

/** Tabs selector */
const tabs = document.querySelector('.operations__tab-container')
const operationsContents = document.querySelectorAll('.operations__content')
const tabOperations = document.querySelectorAll('.operations__tab')
const nav = document.querySelector('.nav')

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((value) => (
  value.addEventListener('click', openModal)

))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/** A scroll effect */

btnScrollTo.addEventListener('click', function () {
  section1El.scrollIntoView({ behavior: 'smooth' })

})


/** Page navigation with (delegation) */
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })

  }
})

/** The page tabs functionality */
tabs.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab')


  if (!clicked) return;
  /** active class on the buttons */
  tabOperations.forEach((t) => t.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active')

  operationsContents.forEach((c) => c.classList.remove('operations__content--active'))

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

})



/** Implementing fade animation */
const handleFade = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const sibling = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')
    logo.style.opacity = this

    sibling.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this
      }
    })
  }

}

/** Passing an argument to handler functions */
nav.addEventListener('mouseover', handleFade.bind(0.5))

nav.addEventListener('mouseout', handleFade.bind(1))

/** page scroll functionality */
const navigation = document.querySelector('.nav').getBoundingClientRect().height


const scrollNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')

}



const headerIntersect = new IntersectionObserver(scrollNav, { root: null, threshold: 0, rootMargin: `-${navigation}px` })
headerIntersect.observe(header)

/** reveal section on scroll functionality */
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)


}

const sectionsScroll = new IntersectionObserver(revealSection, { root: null, threshold: 0.15 })

allSection.forEach((section) => {
  sectionsScroll.observe(section)
  section.classList.add('section--hidden')
})

/** image lazy loading */

const loadImage = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img')

  })
  observer.unobserve(entry.target)


}

/** intersecting api (scroll behavior) */
const imageTarget = document.querySelectorAll('img[data-src]')

const imgObserver = new IntersectionObserver(loadImage, { root: null, threshold: 0, rootMargin: `200px` })

imageTarget.forEach((img) => imgObserver.observe(img))


/** slider functionality */
const sliders = function () {
  const slider = document.querySelector('.slider')
  const slides = document.querySelectorAll('.slide')
  const nextSlide = document.querySelector('.slider__btn--right')
  const previousSlide = document.querySelector('.slider__btn--left')
  const dotContainer = document.querySelector('.dots')
  /** Global variables */
  let currSlide = 0;
  const maxSlider = slides.length

  /** create the dots */
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot dots__dot--active" data-slide=${i}></button>`)
    })
  }

  /** activate the active element */
  function activateActive(slide) {
    document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')

  }


  /** go to the slides
   * create dots
   * activate the active dots
   */
  init()


  function goToSlides(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%`)
  }

  function next() {
    if (currSlide === maxSlider - 1) {
      currSlide = 0
    }
    else {
      currSlide++
    }

    goToSlides(currSlide)
    activateActive(currSlide)
  }

  function previous() {
    if (currSlide === 0) {
      currSlide = maxSlider - 1
    } else {
      currSlide--
    }
    goToSlides(currSlide)
    activateActive(currSlide)
  }

  function init() {
    createDots()
    activateActive(0)
    goToSlides(0)

  }

  /** Handles event */
  nextSlide.addEventListener('click', next)
  previousSlide.addEventListener('click', previous)

  /** on key press */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') previous();
  })

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset
      goToSlides(slide)
      activateActive(slide)

    }
  })
}

sliders()

/**************************************************/

