var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {});
  var carouselWidth = document.querySelector(".slider-inside").scrollWidth;
  var cardWidth = document.querySelector(".slider-group").offsetWidth;
  var scrollPosition = 0;

  function nextSlide() {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      document.querySelector(
        "#carouselExampleControls .slider-inside"
      ).scrollLeft = scrollPosition;
    } else {
      // Nếu đến ảnh cuối cùng, trở về ảnh đầu tiên
      scrollPosition = 0;
      document.querySelector(
        "#carouselExampleControls .slider-inside"
      ).scrollLeft = scrollPosition;
    }
  }

  document
    .querySelector("#carouselExampleControls .carousel-control-next")
    .addEventListener("click", nextSlide);

  document
    .querySelector("#carouselExampleControls .carousel-control-prev")
    .addEventListener("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        document.querySelector(
          "#carouselExampleControls .slider-inside"
        ).scrollLeft = scrollPosition;
      } else {
        // Nếu ở ảnh đầu tiên, trở về ảnh cuối cùng
        scrollPosition = carouselWidth - cardWidth * 4;
        document.querySelector(
          "#carouselExampleControls .slider-inside"
        ).scrollLeft = scrollPosition;
      }
    });

  // setInterval(nextSlide, 6000); // Slide tự động chạy sau mỗi 3 giây
} else {
  multipleCardCarousel.classList.add("slide");
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Cuộn mượt đến đầu trang
  });
}

window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.documentElement.scrollTop > 2000) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

//modal//
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

document.querySelector(".user").addEventListener("click", function () {
  var modal = document.querySelector("#registerModal");
  modal.classList.add("animate__animated", "animate__zoomIn");
});

//modal singin
const myModal1 = document.getElementById("myModal");
const myInput1 = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

document.querySelector(".user").addEventListener("click", function () {
  var modal = document.querySelector("#registerModal");
  modal.classList.add("animate__animated", "animate__zoomIn");
});

//
