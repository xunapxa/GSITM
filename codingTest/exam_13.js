let fs = require('fs');
let input = fs.readFileSync('input_13.txt')
            .toString().split('\n');
console.log(input);

// 1. 최고점 찾기
// 2. 상대점수 구하기
// 3. 평균 다시 구하기

let count = Number(input[0]);
let data = input[1].split(' ').map(Number);
console.log(count , data);

let updatedScore = [];
let max = Math.max(...data);

for(let i = 0; i < count; i++) {
    updateAvg = (data[i]/max) * 100;
    updatedScore.push(updateAvg)
}

console.log(updatedScore.reduce(((x,y) => x + y ))/ count);
