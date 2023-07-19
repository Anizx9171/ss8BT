const PI = 3.141;
let O = +prompt("Nhập bán kính \(cm\):");
console.log(O);
let SO = O * PI * O;
console.log(SO);
let CO = O * 2 * PI;
console.log(CO);
document.write(`S và C đường tròn là: ${SO}\(cm\) và ${CO}\(cm\)`)