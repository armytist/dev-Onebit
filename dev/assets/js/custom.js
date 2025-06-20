$(document).ready(function(){
    $('[type="tel"]').mask('+38(000)-000-0000');
    $('#password').hideShowPassword({
        innerToggle: true,
    });
})

<<<<<<< HEAD

// const btnHistoryBack = document.querySelector('#history-back');
// const backHistory =()=>  window.history.back();
// btnHistoryBack.addEventListener('click', backHistory)

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > header.offsetTop) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const numbers = document.querySelectorAll('table .percent');

numbers.forEach(number => {
    if (number.textContent.startsWith('+')) {
        number.classList.add('plus');
    } else if (number.textContent.startsWith('-')) {
        number.classList.add('minus');
    }
});


=======
const btnHistoryBack= document.querySelector('#history-back');
const backHistory =()=> window.history.back();
btnHistoryBack.addEventListener('click', backHistory)
>>>>>>> fdd0b32a17bd0ea2c58bae961da8429a572e9ea4


