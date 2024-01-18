// headerメニュー
const hamburger = document.getElementById("header-hamburger");
const hamburger_close = document.getElementById("header-hamburger-close");
const overlay = document.getElementById("header-overlay");
const menu = document.getElementById("header-nav");

function toggleMenu() {
  hamburger.classList.toggle("--open");
  menu.classList.toggle("--open");
  overlay.classList.toggle("--active");
}

function closeMenu() {
  hamburger.classList.remove("--open");
  menu.classList.remove("--open");
  overlay.classList.remove("--active");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);
hamburger_close.addEventListener("click", closeMenu);

// ページ内遷移
function handlePageScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

handlePageScroll();

// ページ内遷移 トップページ用
function handleAnchorClicks() {
  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const hash = this.getAttribute("href").split("#")[1];
      const target = document.querySelector(`#${hash}`);
      if (target) {
        e.preventDefault();
        const top = window.pageYOffset + target.getBoundingClientRect().top;
        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
        closeMenu();
      }
    });
  });
}

handleAnchorClicks();

// swiper トップページ
function top_swiper() {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 3000,
    allowTouchMove: true,
    slidesPerView: "auto",
    // slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
}

top_swiper();

// swiper single-castページ
function single_cast_swiper() {
  const swiper = new Swiper("#single-cast", {
    loop: true,
    speed: 3000,
    allowTouchMove: true,
    slidesPerView: "auto",
    // slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

single_cast_swiper();
