// document.addEventListener('DOMContentLoaded', () => {
// // Wait for DOM
// const body=document.querySelector('body');
// const nav=document.querySelector('nav');
// const modeToggle=document.querySelector('.dark-light');
// const searchToggle=document.querySelector('.searchBox');
// modeToggle.addEventListener('click',()=>{
//   modeToggle.classList.toggle('active');
// });
// });
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  const modeToggle = document.querySelector('.dark-light');

  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      modeToggle.classList.toggle('active');
      body.classList.toggle('dark-mode');

    });
  }
  const burger = document.getElementById("burgerToggle");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });

  const burgerToggle = document.getElementById("burgerToggle");
  const burgerOverlay = document.getElementById("burgerOverlay");

  burgerToggle.addEventListener("click", () => {
    burgerOverlay.classList.toggle("active");
  });

  // Optional: close when clicking outside or pressing ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") burgerOverlay.classList.remove("active");
  });
  const demosMenu = document.querySelector(".demos-menu");
  const featuresMenu = document.querySelector(".features-menu");


  const searchBox = document.querySelector(".searchBox");
  const searchContainer = document.querySelector(".cs-col-search");
  const closeBtn = document.querySelector(".cs-search-close");

  searchBox.addEventListener("click", () => {
    searchContainer.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    searchContainer.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target) && !searchBox.contains(e.target)) {
      searchContainer.classList.remove("active");
    }
  });
  const swiper = new Swiper('.thumb-slider', {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 12,
  watchSlidesProgress: true,
});

/* Sync Swiper with Carousel */
let carousel = document.getElementById("mainCarousel");
carousel.addEventListener("slid.bs.carousel", function (e) {
  swiper.slideTo(e.to);
});

swiper.on("click", function () {
  bootstrap.Carousel.getInstance(carousel).to(swiper.clickedIndex);
});


});

