let physics = +prompt("Nhập điểm vật lí");
console.log(physics);
let chemistry = +prompt("Nhập điểm hóa học");
console.log(chemistry);
let biology = +prompt("Nhập điểm sinh học");
console.log(biology);

let sum = (+physics + chemistry + biology)/3;
console.log(sum);
document.write("diem trung binh: ", sum)