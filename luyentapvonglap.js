// bai1 ok
// for (let index = 1; index < 100; index++) {
//   console.log(`lan lap thu ${i}:${i}`);
//   if (i == 99) {
//     alert("đã hoàn thành");
//   }
// }

// bai2
// let N1 = 0;
// let N2 = 1;
// let N;
// for (let num = 0; num < 20; num++) {
//   if (num == 1 || num == 0) {
//     console.log(N1);
//   } else {
//     N = N1 + N2;
//     console.log(N);
//     N1 == N2;
//     N2 == N;
//   }
// }

// bai3
// let N1 = 0;
// let N2 = 1;
// let N;
// let state = True;
// while (state) {
//   let N = N1 + N2;
//   N1 = N2;
//   N2 = N;
//   if (N % 5 == 0) {
//     console.log(N1);
//     state = false;
//   }
// }

// bai4
// let N1 = 0;
// let N2 = 1;
// let sum = 0;
// for (let num = 0; num < 20; num++) {
//   if (num == 1 || num == 0) {
//     console.log("1");
//   } else {
//     N = N1 + N2;
//     sum = sum + N1;
//     N1 == N2;
//     N2 == N;
//   }
// }
// console.log(sum);

// bai5 ok
// let num = 0;
// for (let index = 0; index < 30; index++) {
//   if (index % 7 == 0) {
//     num = num + index;
//   }
// }
// console.log(num);

// bai6
// for (let index = 1; index < 101; index++) {
//   console.log(index);
// }
// if (index % 3 == 0 && index % 5 == 0) {
//   console.log("FizzBuzz");
// } else if (index % 5 == 0) {
//   console.log("Buzz");
// } else if (index % 3 == 0) {
//   console.log("Fizz");
// } else {
//   console.log(index);
// }
// }

// bai7 ok
// debugger;
// let input = Number(prompt("Nhập số muốn tính giai thừa"));
// let giaithua = 1;
// for (let index = 1; index <= input; index++) {
//   giaithua = giaithua * index;
//   console.log(giaithua);
// }
