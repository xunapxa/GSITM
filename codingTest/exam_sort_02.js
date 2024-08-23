let fs = require('fs');
let input = fs.readFileSync('exam_sort_02.txt')
            .toString().split('\n')

let n = Number(input[0])
let data = [];
for (let i  = 1; i <= n; i++) {
    data.push(input[i]);
}

console.log('소스 : ');
console.log(data);

// 중복 제거 - set에 집어놓가
data = [...new Set(data)]
console.log(data);

// 정렬 작업
// 길이의 오름차순, 같은 길이 - 오름차순
data.sort(compare)

function compare(a,b) {
    // 길이의 오름차순
    if(a.length != b.length) {
        return a.length -b.length;
    } else {
        // 사전식 오름차순
        if(a < b) return -1;
        if(a > b) return 1;
        else return 0;
    }
}

// 출력
for (let item of data) {
    console.log(item);
}
