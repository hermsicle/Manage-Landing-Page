const navBtn = document.getElementById('nav-btn')
const navContainer = document.querySelector('.nav-container')
const emailBtn = document.getElementById('email-btn')
const userInput = document.getElementById('email-input')
const errorMessage = document.querySelector('.error-message')
const form = document.querySelector('.form')


navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active')
    navContainer.classList.toggle('nav-active')
})

function validateEMail(email) {
    let re = /\S+@\S+\.\S+/;
    // console.log(re.test(email)) 
    if(!re.test(email)) {
        userInput.classList.add('email-active')
        errorMessage.classList.add('error-active')
    } else {
        userInput.classList.remove('email-active')
        errorMessage.classList.remove('error-active')
    }
}

emailBtn.addEventListener('click', () => {
    validateEMail(userInput.value)
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
