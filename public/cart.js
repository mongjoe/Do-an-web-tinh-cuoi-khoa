// Lấy tất cả các hàng trong bảng giỏ hàng
const cartRows = $("#cart tbody tr");
// Sử dụng $("#cart tbody tr") để lấy tất cả các hàng trong phần tbody của bảng có id "cart".

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
// Sử dụng $("#cart input[type='number']") để lấy tất cả các input có type là "number" trong phần tử có id "cart".
function updateSubtotal(event) {
  const input = $(event.target);
  const row = input.closest("tr");
  // Sử dụng .on("input", updateSubtotal) để gắn sự kiện input cho từng input.
  // Khi số lượng sản phẩm được chỉnh sửa, sự kiện "input" sẽ kích hoạt và gọi hàm updateSubtotal().
  const priceElement = row.find("td[data-th='Đơn giá']");
  const subtotalElement = row.find("td[data-th='Tổng tiền']");

  const price = parseFloat(priceElement.text().replace(/\D/g, ""));
  const quantity = parseFloat(input.val());

  const subtotal = price * quantity;

  subtotalElement.text(subtotal.toLocaleString() + " đ");

  calculateTotal();
}
// Kết quả được lưu trữ trong biến cartRows.
// Tạo sự kiện cho nút chỉnh sửa số lượng sản phẩm:

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
