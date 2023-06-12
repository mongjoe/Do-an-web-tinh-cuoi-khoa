// Đoạn mã JavaScript tại đây

// Hàm xử lý sự kiện đăng nhập
function handleLogin(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của form

  // Lấy giá trị từ các trường thông tin đăng nhập
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Kiểm tra hợp lệ
  if (username === "" || password === "") {
    alert("Vui lòng nhập đầy đủ thông tin đăng nhập!");
    return;
  }

  // Gửi yêu cầu đăng nhập đến máy chủ hoặc xử lý xác thực ngay trên trang web
  // Viết mã xử lý đăng nhập ở đây

  // Sau khi xử lý thành công, bạn có thể thực hiện các hành động khác như chuyển hướng người dùng, lưu thông tin đăng nhập vào bộ nhớ cục bộ, vv.
}

// Gán hàm xử lý sự kiện cho biểu mẫu đăng nhập
var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleLogin);
