let fs = require('fs');
let input = fs.readFileSync('input_02.txt')
            .toString().split('\n')
console.log(input);

let data = input[0].split(' ').map(((x) => Number(x)))
console.log(data);

let x = data[0]; // 첫번째로 받을 값
let y = data[1]; // 두번째로 받을 값
let z = 0;
let sum = 0;

if (x > y) {
    z = x
    x = y       // 7 2일 때 x와 y값 자리 바꾸기
    y = z 
}

for (let i = x + 1;  i < y ; i++) {     // x부터 y 사이의 정수를 모두 더함
    sum = sum + i
    console.log(sum)
}