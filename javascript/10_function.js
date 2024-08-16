// 1) 함수의 생성
function oneValuePrint(don) {
    console.log(don); // 리턴값 없음
}

oneValuePrint();
console.log('작업 끝');

// 2) 두 개의 수를 전달해서 곱한 결과를 받는 함수
function multiply(x, y) {
    return x * y; // 리턴값 존재
}

let result = multiply(10, 20);
console.log("출력 : " + result);

// 3) default 파라미터 사용
// x와 y를 비교해서 큰 값에서 작은 값을 빼서 리턴
function minus(x,y) {
    if (x > y) {
        return x - y
    } else if (y > x) {
       return  y - x
    }
}

console.log(minus(2, 5));
console.log(minus(4, 2));









