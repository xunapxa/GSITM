let fs = require('fs');
let input = fs.readFileSync('input_05.txt')
            .toString().split('\n')
console.log(input);

let data = input[0].split(' ').map((x) => Number(x))
console.log(data);



let hour = data[0];       // 첫번째 입력값을 시(hour)
let minute = data[1];     // 두번째 입력값을 분(munute)  


minute = minute - 45;

if (minute < 0) {
    hour = hour - 1
    minute = minute + 60
 }

 if (hour < 0) {
    hour = hour + 24
 }

console.log(hour + " " + minute);

// 선생님께서 사용하신 방법

// if(minute >= 45) {
//    minute = minute - 45
// } else if (hour > 0 && minute < 45) {
//    hour = hour -1
//    minute = minute + 15
// } else if (hour == 0 && minute < 45) {
//    hour = 23;
//    minute = minute + 15
// }




