let fs = require('fs');
let input = fs.readFileSync('input_10.txt')
            .toString().split('\n')
console.log(input);

// reduce 사용 X

let count = Number(input[0])
let data = input[1].split(' ').map(Number)
console.log(count + ' ' + data)

let maxNum = Number.MIN_VALUE;
let minNum = Number.MAX_VALUE;

for (let i = 0; i < count -1; i++) {
    if (data[i] > maxNum) maxNum = data[i]
    if (data[i] < minNum) minNum = data[i]
}
console.log(`max : ${maxNum} , min : ${minNum}`);

// reduce 이용
rmaxNum = data.reduce((x, y) => Math.max(x,y));
rminNum = data.reduce((x, y) => Math.min(x,y));
console.log(`max : ${maxNum} , min : ${minNum}`);
