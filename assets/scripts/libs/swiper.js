document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

<<<<<<< HEAD
=======

>>>>>>> 37c4625dbac33952f791327b9116b97a65be9adf
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
});
