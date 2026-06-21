let score = 7.2;

// TODO 1: dùng if...else if...else để in ra xếp loại
if (score >= 8.0) {
    console.log("Xếp loại: Giỏi");
} else if (score >= 6.5) {
    console.log("Xếp loại: Khá");
} else if (score >= 5.0) {
    console.log("Xếp loại: Trung bình");
} else {
    console.log("Xếp loại: Yếu");
}

console.log("In các số từ 1 đến 5 bằng vòng for:");
// TODO 2: viết vòng for in các số từ 1 đến 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let total = 0;
// TODO 3: viết vòng for tính tổng từ 1 đến 5
for (let i = 1; i <= 5; i++) {
    total += i; // Cộng dồn i vào biến total
}
console.log("Tổng =", total); // Kết quả sẽ in ra: Tổng = 15
