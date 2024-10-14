const swiper1 = new Swiper(".indexSwiperItem", {
    slidesPerView: 1.2,
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row"
        }
      },
        996: {
          slidesPerView: 4,/*(一次呈現幾張)*/
          spaceBetween: 24 ,
        },
      },
  });

  // comment
  const swiper = new Swiper(".commentSwiper", {
    slidesPerView: 1,
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      996: {
        slidesPerView: 3,
      },
      },
  });