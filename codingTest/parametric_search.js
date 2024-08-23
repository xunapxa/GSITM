let fs = require('fs');
let input = fs.readFileSync('parametric_search.txt')
            .toString().split('\n')
console.log(input);

// 전체 데이터 수
let jibang = Number(input[0]);
// 지방 요청예산
let yesan = input[1].split(' ').map(Number);
// 총 예산
let sumYesan = Number(input[2])
// 시작값, 종료값
let start = 1;
let end = yesan.reduce((a,b) => Math.max(a,b));
console.log(yesan,start,end)
// 결과 담을 변수
let result = 0;

while (start <= end) {
    // 중간값 찾기
    let mid = parseInt((start+end)/2);
    // 임시예산의 합을 구할 변수
    let total = 0;
    for (let x of yesan) {
        total = total + Math.min(x,mid)
    }
    if (total <= sumYesan) {
        // 찾는 값이 오른쪽에 있는 경우
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(result)