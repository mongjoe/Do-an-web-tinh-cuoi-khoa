//offcanvas close-button

  document.addEventListener("DOMContentLoaded", function() {
    // Lấy tham chiếu đến nút "btn btn-close"
    var closeButton = document.querySelector(".btn.btn-close");

    // Lắng nghe sự kiện click trên nút "btn btn-close"
    closeButton.addEventListener("click", function() {
      // Đóng offcanvas
      var offcanvas = document.querySelector(".offcanvas");
      var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      offcanvasInstance.hide();
    });
  });

 //modal
 // Tắt hiệu ứng fade in của modal khi trang được tải
  document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('exampleModal');
    modal.classList.remove('fade');
  });


//carousel

var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 1024px)").matches) {
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
}

// Tắt hiệu ứng animation cho ảnh mới được load của carousel
multipleCardCarousel.addEventListener("slide.bs.carousel", function () {
  document.querySelectorAll(".carousel-item").forEach(function (item) {
    item.style.transition = "none";
  });
});

//Thêm hiệu ứng chuyển cảnh mượt cho slide
// document.querySelector(".slider-inside").style.scrollBehavior = "smooth";







// scroll to top
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


// //điều hướng liên hệ
// // Bắt sự kiện click vào đường liên kết
//   $(document).ready(function () {
//     $("a[data-target]").on("click", function (event) {
//       event.preventDefault();

//       var target = $(this).data("target");
//       var $targetElement = $(target);

//       $("html, body").animate(
//         {
//           scrollTop: $targetElement.offset().top,
//         },
//         500
//       );
//     });
//   });
