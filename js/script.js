document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. TÍNH NĂNG ẨN/HIỆN NỘI DUNG ---
    const toggleBtn = document.getElementById("toggle-btn");
    const moreContent = document.getElementById("more-content");

    toggleBtn.addEventListener("click", function () {
        // Kiểm tra xem nội dung có đang bị ẩn hay không
        if (moreContent.classList.contains("hidden")) {
            moreContent.classList.remove("hidden");
            toggleBtn.textContent = "Thu gọn nội dung";
        } else {
            moreContent.classList.add("hidden");
            toggleBtn.textContent = "Xem thêm chi tiết";
        }
    });

    // --- 2. KIỂM TRA DỮ LIỆU FORM (VALIDATION) ---
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

    contactForm.addEventListener("submit", function (event) {
        // Sử dụng event.preventDefault() để ngăn form reload lại trang web khi nhấn submit
        event.preventDefault();

        // Biến đánh dấu form có hợp lệ hay không
        let isValid = true;

        // Kiểm tra ô Tên có bị trống không
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Vui lòng không để trống Họ và tên.";
            isValid = false;
        } else {
            nameError.textContent = ""; // Xóa thông báo lỗi nếu đã nhập
        }

        // Kiểm tra ô Email có bị trống không
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Vui lòng không để trống Email.";
            isValid = false;
        } else {
            emailError.textContent = ""; // Xóa thông báo lỗi nếu đã nhập
        }

        // Nếu tất cả dữ liệu đều hợp lệ
        if (isValid) {
            alert("Gửi form thành công! Cảm ơn bạn đã liên hệ.");
            contactForm.reset(); // Xóa sạch dữ liệu trên form sau khi gửi thành công
        }
    });
});
