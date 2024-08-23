let fs = require('fs');
let input = fs.readFileSync('input_04.txt')
            .toString().split('\n')
console.log(input);

let data = input[0].split(' ').map((x) => Number(x)) //psrseInt로 처리 가능
console.log(data);

if (data >= 90) {
    console.log("A");
} else if (data >= 80) {
    console.log("B");
} else if (data >= 70) {
    console.log("C");
} else if (data >= 60) {
    console.log("D");
} else {
    console.log("F");
}