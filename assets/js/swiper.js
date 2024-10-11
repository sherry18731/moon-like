const swiper1 = new Swiper(".indexSwiperItem", {
    slidesPerView: 1.2,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        996: {
          slidesPerView: 4,/*(一次呈現幾張)*/
          spaceBetween: 24 ,
        },
      },
  });