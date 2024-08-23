let fs = require('fs');
let input = fs.readFileSync('input_08.txt')
            .toString().split('\n')
console.log(input);

let data = input[0].split(' ').map((x) => Number(x))
console.log(data);

console.log(`---------- ${data} 단 ----------`);
for (let i = 1; i <= 9; i++) {
    console.log(`${data} x ${i} = ${data*i}`);
}