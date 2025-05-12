document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    // تكرار السلايدر (Loop)
    loop: true,

    // أزرار التنقل
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    // نقاط التقسيم
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // التمرير التلقائي (اختياري)
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    // عدد الشرائح المعروضة (اختياري)
    slidesPerView: 1,
    spaceBetween: 20,

    // تكيف مع الشاشات الصغيرة (Responsive)
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
