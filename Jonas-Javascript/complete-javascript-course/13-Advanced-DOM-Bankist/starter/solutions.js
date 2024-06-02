/** Element selectors */
const btnScrollsTo = document.querySelector('.btn--scroll-to')
const section1Ell = document.getElementById('section--1')



/*
!!! Creating elements !!!
    const message = document.createElement('div')
    message.innerHTML = "<strong>Please wait...</strong>"
    message.style.backgroundColor = 'red'
    document.body.prepend(message)

 !!! A scroll effect !!!
btnScrollTo.addEventListener('click', function () {

     (Old ways for older browsers)!!!
     const section1 = section1El.getBoundingClientRect()

    window.scrollTo(section1.left + window.scrollX, section1.top + window.scrollY)

    window.scrollTo(
     { 
    left: section1.left + window.scrollX,
    top: section1.top + window.scrollY,
    behavior: 'smooth'
    })

    (Modern ways)!!!!
    section1El.scrollIntoView({ behavior: 'smooth' })

}) 

 !!! Events Propagation(Bubbling and capturing)!!!
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)


    const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

    document.querySelector('.nav__link').addEventListener('click', function () {
    this.style.backgroundColor = randomColor()
    })

    document.querySelector('.nav__links').addEventListener('click', function () {
    this.style.backgroundColor = randomColor()
    })
    document.querySelector('.nav').addEventListener('click', function () {
    this.style.backgroundColor = randomColor()
    })

    !!! Page navigation scroll behavior !!!
    document.querySelectorAll('.nav__link').forEach((nav) => {
    nav.addEventListener('click', function (e) {
    e.preventDefault()
    const id = this.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    })
    })
    
    !!! Page navigation with (delegation) !!! 
    document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })

    }
    })

!!! DOM traversing !!!

const h1 = document.querySelector('h1')
!!! returns the element with the (highlight class name) !!!
console.log(h1.querySelectorAll('.highlight'))

!!! returns the child nodes !!! 
console.log(h1.childNodes)

!!! returns the h1 direct children !!!
console.log(h1.children)

!!! returns the element direct parent !!!
console.log(h1.parentNode)
console.log(h1.parentElement)

!!! traversing between the element child !!!
console.log(h1.firstElementChild)
console.log(h1.lastElementChild)

!!! traversing between element siblings !!!
console.log(h1.previousElementSibling) // undefined
console.log(h1.nextElementSibling)

!!! getting the closest parent element !!!
console.log(h1.closest('.header'))

!!! page scroll functionality !!!
!!! window (scroll event --> bad idea)
const section = section1El.getBoundingClientRect()
window.addEventListener('scroll', function (e) {
    if (window.scrollY >= section.top) {
        nav.classList.add('sticky')
    }
    else {

        nav.classList.remove('sticky')
    }
})

!!! Intersection Observer API (better idea)!!!
const obsCallBack = function (entries, observer) {
    entries.forEach((entry) => console.log(entry))
}

const obsOptions = {
    root: null,
    threshold: 0.1
}

const observer = new IntersectionObserver(obsCallBack, obsOptions)

observer.observe(section1El)

*/





