$(document).ready(function(){
    $('[type="tel"]').mask('+38(000)-000-0000');
    $('#password').hideShowPassword({
        innerToggle: true,
    });
})

NiceSelect.bind(document.getElementById("choice-give-currency"))
NiceSelect.bind(document.getElementById("choice-get-currency"))

/*const btnHistoryBack= document.querySelector('#history-back');
const backHistory =()=> window.history.back();
btnHistoryBack.addEventListener('click', backHistory);*/

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > header.offsetTop) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

const swiper = new swiper('.swiper', {
    // Optional parameters
    loop: true,
    // slidesPerView: 2,

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


const time = 23
  let greeting;

  if (time < 3) {
    greeting = "Good night!";
  } else if (time < 11) {
    greeting = "Good morning!"
  } else if (time < 15) {
    greeting = "Good day!"
  } else if (time < 23) {
    greeting = "Good evening";
  } 
console.log(greeting);



