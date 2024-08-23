let fs = require('fs');
let input = fs.readFileSync('input_03.txt')
            .toString().split('\n')
console.log(input);

let fir = input[0].split(' ').map((x) => Number(x))
console.log(fir);

let sec = input[1].split('').map((x) => Number(x))
let sec1 = input[1].split(' ').map((x) => Number(x))
console.log(sec);
console.log(sec1);

// data[0] = 472 , sec = 3 , 8 , 5

let sum = 0 ;
for (let i = sec.length-1; i >= 0 ; i--) {
    sum = fir * sec[i]
    console.log(sum)
}
console.log((fir * sec1));



