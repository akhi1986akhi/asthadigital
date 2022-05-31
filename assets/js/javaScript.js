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
        slidesPerView:3,
      },
      520:{
        slidesPerView:2,
      },
      0:{
        slidesPerView:1,
      }
    }
  });