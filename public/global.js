// nút cuộn
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







