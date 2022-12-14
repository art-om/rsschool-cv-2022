const swiper = new Swiper('.swiper', {
    loop: true,
      pagination: {
      el: '.swiper-pagination',
      type: "progressbar",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  
  on: {
    init: function() {
			checkArrow();
    },
    resize: function () {
			checkArrow();
    }
  }
});

function checkArrow() {
  var swiperPrev = document.querySelector('.swiper-button-prev');
  var swiperNext = document.querySelector('.swiper-button-next');
  if ( window.innerWidth < 1024  ) {
    console.log('Success', window.innerWidth);
    swiperPrev.style.display = 'none';
    swiperNext.style.display = 'none';
  } else {
    swiperPrev.style.display = 'block';
    swiperNext.style.display = 'block';
  }
}

const menuIcon = document.querySelector('.menu-icon'),
      header = document.querySelector('nav');
      body = document.querySelector('body');

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('menu-icon--active');
    header.classList.toggle('nav--active');
})