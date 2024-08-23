let fs = require('fs');
let input = fs.readFileSync('input_09.txt')
            .toString().split('\n')
console.log(input);

let data = input[0].split(' ').map((x) => Number(x))
console.log(data);


let star = ''
for (let i = 0; i < data; i++) {
    star = star + '*'
    console.log(star);
}

// 선생님께서 사용하신 방법

// star = ''
// for (let i = 0; i < data; i++) {
//     for (let j = 1; j <= i ; j++) {
//     star = star + '*'
//     }
//     star = star +'\n'
// }
// console.log(star);




