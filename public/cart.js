// Lấy tất cả các hàng trong bảng giỏ hàng
const cartRows = $("#cart tbody tr");

// Tạo sự kiện cho nút chỉnh sửa số lượng sản phẩm
const quantityInputs = $("#cart input[type='number']");
quantityInputs.on("input", updateSubtotal);

// Tạo sự kiện cho nút xóa sản phẩm
const deleteButtons = $("#cart .btn-danger");
deleteButtons.on("click", removeProduct);
deleteButtons.on(
  "click",
  totalElement.text("Tổng tiền " + total.toLocaleString() + " đ")
);

// Tính tổng tiền cho giỏ hàng
calculateTotal();

function updateSubtotal(event) {
  const input = $(event.target);
  const row = input.closest("tr");

  const priceElement = row.find("td[data-th='Đơn giá']");
  const subtotalElement = row.find("td[data-th='Tổng tiền']");

  const price = parseFloat(priceElement.text().replace(/\D/g, ""));
  const quantity = parseFloat(input.val());

  const subtotal = price * quantity;

  subtotalElement.text(subtotal.toLocaleString() + " đ");

  calculateTotal();
}

function removeProduct(event) {
  const button = $(event.target);
  const row = button.closest("tr");
  row.remove();

  calculateTotal();
}

function calculateTotal() {
  let total = 0;

  cartRows.each(function () {
    const subtotalElement = $(this).find("td[data-th='Tổng tiền']");
    const subtotal = parseFloat(subtotalElement.text().replace(/\D/g, ""));
    total += subtotal;
  });

  const totalElement = $("td.hidden-xs.text-center strong");
  totalElement.text("Tổng tiền " + total.toLocaleString() + " đ");
}
