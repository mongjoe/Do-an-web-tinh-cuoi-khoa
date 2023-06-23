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
