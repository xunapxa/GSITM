let fs = require('fs');
let input = fs.readFileSync('exam_sort_04.txt')
            .toString().split('').map(Number)
console.log(input);

// 0으로 채워진 빈배열 10개 선언
let arraySum = new Array(10).fill(0)
console.log(arraySum);

// for를 돌리며 해당하는 인덱스에 입력
for(let i = 0; i < input.length; i++) {
    arraySum[input[i]] ++;
}
console.log(arraySum);

let result = '';
// arraySum 배열을 뒤에서 인덱스의 갯수만큼 출력
for (let i = 9 ; i >= 0; i--) {
    for (let j = 0; j < arraySum[i]; j++) {
        result = result + i +' '
    }
}


console.log(result);