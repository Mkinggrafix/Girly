// Form Display
const openButton = document.querySelector('.btn-secondary');
const form = document.querySelector('.form');
const closeBtn = document.querySelector('.form-close-btn');

openButton.addEventListener('click', e =>{
    e.preventDefault();
    form.style.display = 'block';
});

closeBtn.addEventListener('click', e =>{
    form.style.display = 'none'
});

// Input Condition
const myForm = document.forms['myForm'];
const formMessage = document.querySelector('.form-message');
const userName = document.forms["myForm"][0];
const passWord = document.forms["myForm"][1];
const formBtn = document.forms["myForm"][2];
                                                                
myForm.addEventListener('submit', e =>{
    e.preventDefault();
    if (userName.value === '' || passWord.value === '') {
        formMessage.classList.add('error');
        formMessage.textContent = 'Please enter all fields';
    
        setTimeout(() => formMessage.remove(), 2500)
    }else if(userName.value.length < 8 || passWord.value.length < 8){
        formMessage.classList.add('error');
        formMessage.textContent = "Entries must be at least 8 characters" ;
        
        setTimeout(() => formMessage.remove(), 2500)
    }
})


// Display Image Gallery
// Image One
const displayScreenOne = document.querySelector('.display-screen-one');
const imageOne = document.querySelector('.image-one');

imageOne.addEventListener('click', e => {
    displayScreenOne.style.display = 'block';
})

const closeBtnOne = document.querySelector('.close-btn-one');

closeBtnOne.addEventListener('click', e =>{
    displayScreenOne.style.display = 'none';
});

// Image Two
const closeBtnTwo = document.querySelector('.close-btn-two');

closeBtnTwo.addEventListener('click', e =>{
    displayScreenTwo.style.display = 'none';
})

const displayScreenTwo = document.querySelector('.display-screen-two');
const imageTwo = document.querySelector('.image-two');

imageTwo.addEventListener('click', e => {
    displayScreenTwo.style.display = 'block';
});

// Image Three
const closeBtnThree = document.querySelector('.close-btn-three');

closeBtnThree.addEventListener('click', e =>{
    displayScreenThree.style.display = 'none';
})

const displayScreenThree = document.querySelector('.display-screen-three');
const imageThree = document.querySelector('.image-three');

imageThree.addEventListener('click', e => {
    displayScreenThree.style.display = 'block';
});

// Image Four
const closeBtnFour = document.querySelector('.close-btn-four');

closeBtnFour.addEventListener('click', e =>{
    displayScreenFour.style.display = 'none';
})

const displayScreenFour = document.querySelector('.display-screen-four');
const imageFour = document.querySelector('.image-four');

imageFour.addEventListener('click', e => {
    displayScreenFour.style.display = 'block';
})

// Image Five
const closeBtnFive = document.querySelector('.close-btn-five');

closeBtnFive.addEventListener('click', e =>{
    displayScreenFive.style.display = 'none';
})

const displayScreenFive = document.querySelector('.display-screen-five');
const imageFive = document.querySelector('.image-five');

imageFive.addEventListener('click', e => {
    displayScreenFive.style.display = 'block';
})

// Image Six
const closeBtnSix = document.querySelector('.close-btn-six');

closeBtnSix.addEventListener('click', e =>{
    displayScreenSix.style.display = 'none';
})

const displayScreenSix = document.querySelector('.display-screen-six');
const imageSix = document.querySelector('.image-six');

imageSix.addEventListener('click', e => {
    displayScreenSix.style.display = 'block';
})