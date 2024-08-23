let fs = require('fs');
let input = fs.readFileSync('input_15.txt')
            .toString().split('\n')
console.log(input);

let data = input[0].split(' ');
console.log(data);
let newX = '';
let newY = '';
for (let i = 2; i >= 0; i--) {
    newX = newX + data[0].charAt(i)
    newY = newY + data[1].charAt(i)
}

console.log(Math.max(Number(newX),(Number(newY))));