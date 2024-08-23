let fs = require('fs');
let input = fs.readFileSync('input_01.txt')
            .toString().split('\n')
console.log(input);

let data = input[0].split(' ').map((x) => Number(x))
console.log(data);
console.log(data.reduce((x,y) => x + y));


















