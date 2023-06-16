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
