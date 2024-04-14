'use strict'
const showModal = document.querySelectorAll('.show-modal')
const closeModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

function toggleModel(){

    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
}
showModal.forEach((val, i) => (val.addEventListener('click', toggleModel)))


closeModal.addEventListener('click', toggleModel)

overlay.addEventListener('click', toggleModel)

document.addEventListener('keypress', function(e){
    if(e.key === 'p'){
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})
