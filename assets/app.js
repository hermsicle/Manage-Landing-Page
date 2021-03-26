const navBtn = document.getElementById('nav-btn')
const navContainer = document.querySelector('.nav-container')
const emailBtn = document.getElementById('email-btn')
const userInput = document.getElementById('email-input')
const errorMessage = document.querySelector('.error-message')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active')
    navContainer.classList.toggle('nav-active')
})

emailBtn.addEventListener('click', () => {
    console.log(userInput.value)
    if(userInput.value === '') {
        console.log('enter a valid email')
        userInput.classList.toggle('email-active')
        errorMessage.classList.toggle('error-active')
    }
})


let slideIndex = 1

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

//Create a function that only displays one slide
function showSlides(n) {
    let i
    const slides = document.getElementsByClassName('slider-card')
    const dots = document.getElementsByClassName('dot')
    // if(n > slides.length && window.innerWidth < '1140') {
    //     console.log('it works')
    //     slideIndex = 1
    // } 
    // if(n < 1 && window.innerWidth < '1140') {
    //     slideIndex = slides.length
    // }
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex-1].style.display = 'block'
    dots[slideIndex-1].className += ' active'
}

showSlides(slideIndex)
