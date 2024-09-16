new Swiper(".project-wrapper", {
     // Optional parameters
     loop: true,
     spaceBetween: 30,

     // Pagination bullets
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullet: true,
     },

     // Navigation arrows
     navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
     },

     //  Responsive breakpoints
     breakpoints: {
          0: {
               slidesPerView: 1,
          },
          768: {
               slidesPerView: 2,
          },
          1024: {
               slidesPerView: 3,
          },
     },
});
