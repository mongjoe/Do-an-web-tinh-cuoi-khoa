var multipleCardCarousel = $("#carouselExampleControls");
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel[0], {});
  var carouselWidth = $(".slider-inside")[0].scrollWidth;
  var cardWidth = $(".slider-group").width();
  var scrollPosition = 0;

  function nextSlide() {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .slider-inside").animate(
        { scrollLeft: scrollPosition },
        600
      );
    } else {
      // Nếu đến ảnh cuối cùng, trở về ảnh đầu tiên
      scrollPosition = 0;
      $("#carouselExampleControls .slider-inside").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  }
  $("#carouselExampleControls .carousel-control-next").on("click", nextSlide);

  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .slider-inside").animate(
        { scrollLeft: scrollPosition },
        600
      );
    } else {
      // Nếu ở ảnh đầu tiên, trở về ảnh cuối cùng
      scrollPosition = carouselWidth - cardWidth * 4;
      $("#carouselExampleControls .slider-inside").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
// setInterval(nextSlide, 6000); // Slide tự động chạy sau mỗi 3 giây
} else {
  multipleCardCarousel.addClass("slide");
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Cuộn mượt đến đầu trang
  });
}

window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
<<<<<<< HEAD
  if (document.documentElement.scrollTop > 2000) {
=======
  if (document.documentElement.scrollTop > 3000) {
>>>>>>> 2bd0d8f07593ee0fcc72b83e1f1c94bc7e7fb0b5
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
<<<<<<< HEAD





//
=======
>>>>>>> 2bd0d8f07593ee0fcc72b83e1f1c94bc7e7fb0b5
