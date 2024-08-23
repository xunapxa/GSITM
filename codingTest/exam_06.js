let fs = require('fs');
let input = fs.readFileSync('input_06.txt')
            .toString().split('\n')
console.log(input);

let data = input[0].split(' ').map((x) => Number(x))
let data1 = input[1].split(' ').map((x) => Number(x))
console.log(data, data1);

let hour = data[0];
let minute = data[1];
let time = data1[0];

minute = minute + time;

if (minute > 60) {
    hour = hour + 1
    minute = minute - 60
    if (minute >= 60) {
        hour = hour + 1
        minute = minute - 60
    }
}

if (hour >= 24) {
    hour = hour - 24
 }

console.log(hour , minute);

// 선생님께서 사용하신 방법

// let totalTime = (hour * 60) + minute + time;
// hour = parseInt(totalTime / 60) % 24;
// minute = totalTime % 60;
// console.log(hour + ' ' + minute)

