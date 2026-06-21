// Đợi DOM tải xong hoàn toàn
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. Sự kiện 'click': bấm nút -> hiện thông báo hoặc đổi chữ
    // ==========================================
    const btnClick = document.getElementById("btnClick");
    const clickResult = document.getElementById("clickResult");

    btnClick.addEventListener("click", () => {
        clickResult.innerText = "🎉 Bạn vừa click vào nút thành công!";
        clickResult.style.color = "purple";
    });


    // ==========================================
    // 2. Sự kiện 'change': chọn màu -> đổi văn bản kết quả
    // ==========================================
    const colorSelect = document.getElementById("colorSelect");
    const changeResult = document.getElementById("changeResult");

    colorSelect.addEventListener("change", (event) => {
        // Lấy giá trị màu được chọn
        const selectedColor = event.target.value;
        // Đổi màu chữ của văn bản kết quả
        changeResult.style.color = selectedColor;
    });


    // ==========================================
    // 3. Sự kiện 'keyup': gõ tên -> hiển thị xem trước
    // ==========================================
    const nameInput = document.getElementById("nameInput");
    const keyupResult = document.getElementById("keyupResult");

    nameInput.addEventListener("keyup", (event) => {
        const inputValue = event.target.value;
        // Hiển thị trực tiếp những gì người dùng đang gõ
        keyupResult.innerText = `Xem trước tên: ${inputValue}`;
    });


    // ==========================================
    // 4. Sự kiện 'submit': gửi form -> chặn mặc định bằng preventDefault()
    // ==========================================
    const myForm = document.getElementById("myForm");
    const submitResult = document.getElementById("submitResult");

    myForm.addEventListener("submit", (event) => {
        // Chặn hành vi tải lại trang mặc định của form
        event.preventDefault();

        const formInputValue = document.getElementById("formInput").value;
        // Hiển thị thông báo xử lý thành công ngay trên trang thay vì bị load lại trang
        submitResult.innerText = `🚀 Form đã được gửi (preventDefault thành công)! Dữ liệu: "${formInputValue}"`;
    });

});
