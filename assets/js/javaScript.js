var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 40,
    loop: true,
    centerSlide:'true',
    fade:'true',
    gragCursor:'true',
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      991:{
        slidesPerView: 3,
      },
      520:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      0:{
        slidesPerView: 1,
        slidesPerGroup: 1,
      }
    }
  });



var swiper = new Swiper(".swiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 10,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  pagination: {
    el: ".swiper-pagination",
  },
});
