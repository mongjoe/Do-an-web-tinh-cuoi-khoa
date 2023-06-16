// carousel
var splide = new Splide("#main-carousel", {
  pagination: false,
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide.go(index);
  });
}

splide.on("mounted move", function () {
  var thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();

//số lượng
function plusQuantity() {
  var quantityInput = document.getElementById("quantity");
  var currentValue = parseInt(quantityInput.value);
  var newValue = currentValue + 1;
  quantityInput.value = newValue;
}

function minusQuantity() {
  var quantityInput = document.getElementById("quantity");
  var currentValue = parseInt(quantityInput.value);
  var newValue = currentValue - 1;
  if (newValue < 1) {
    newValue = 1;
  }
  quantityInput.value = newValue;
}




