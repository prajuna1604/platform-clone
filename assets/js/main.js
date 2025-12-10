document.addEventListener('DOMContentLoaded', () => {

  const body = document.querySelector('body');

  // ---------- DARK MODE ----------
  const modeToggle = document.querySelector('.dark-light');

  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      modeToggle.classList.toggle('active');
      body.classList.toggle('dark-mode');
    });
  }

  // ---------- BURGER MENU ----------
  const burger = document.getElementById("burgerToggle");
  const burgerOverlay = document.getElementById("burgerOverlay");

  if (burger && burgerOverlay) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      burgerOverlay.classList.toggle("active");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") burgerOverlay.classList.remove("active");
    });
  }

  // ---------- SEARCH ----------
  const searchBox = document.querySelector(".searchBox");
  const searchContainer = document.querySelector(".cs-col-search");
  const closeBtn = document.querySelector(".cs-search-close");

  if (searchBox && searchContainer && closeBtn) {

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
  }

  // ---------- SWIPER ----------
 if (document.querySelector('.thumb-slider')) {
  const swiper = new Swiper('.thumb-slider', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 12,
    watchSlidesProgress: true,
  });

  const carousel = document.getElementById("mainCarousel");

  if (carousel) {
    carousel.addEventListener("slid.bs.carousel", function (e) {
      swiper.slideTo(e.to);
    });

    swiper.on("click", function () {
      bootstrap.Carousel.getInstance(carousel).to(swiper.clickedIndex);
    });
  }
}


  // ---------- LOAD MORE ----------
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const posts = document.querySelectorAll(".post-list a");

  let visible = 12; // first show 12

  // Hide posts initially
  posts.forEach((post, index) => {
    if (index >= visible) {
      post.style.display = "none";
    }
  });

  if (loadMoreBtn && posts.length > visible) {

    loadMoreBtn.addEventListener("click", () => {

      let shown = 0;

      for (let i = visible; i < posts.length && shown < 3; i++) {
        posts[i].style.display = "block";
        shown++;
      }

      visible += 3;

      if (visible >= posts.length) {
        loadMoreBtn.style.display = "none";
      }
    });

  } else {
    if (loadMoreBtn) loadMoreBtn.style.display = "none";
  }

});
