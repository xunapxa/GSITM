let fs = require('fs');
let input = fs.readFileSync('input_11.txt')
            .toString().split('\n').map(Number)
console.log(input);

// 가장 큰 값
let maxNum = Number.MIN_VALUE;
let maxIndex = 0;
for (let i = 0; i < input.length; i++) {
    if(input[i] > maxNum) {
        maxNum = input[i];
        maxIndex = i;
    }
}

console.log(`maxNum : ${maxNum} , maxIndex : ${maxIndex+1}`);

let otherMax = Math.max(...input);
let otherIndex = input.indexOf(otherMax);
console.log(`maxNum : ${maxNum} , maxIndex : ${maxIndex+1}`);