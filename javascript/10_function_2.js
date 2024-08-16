// 두 수를 받아서 곱한 후 결과 리턴
function multiple(a , b) {
    return a * b
}
let result = multiple(10 , 20)
console.log(result);

// 1) 명시적 함수 선언 방법
const multi_01 = function(x , y) {
    return x * y
}
console.log(multi_01(3 , 4))

// 2) 화살표 함수 (Arrow Function)
const multi_02 = (x , y) => {
    return x * y
}
console.log(multi_02(2 , 4))

// 3) 가장 간단한 방법 (단 리턴이 한 줄일 때)
const multi_03 = (x , y) => x * y;

// 4) 즉시 실행 함수 
(function (x , y) {
    console.log(x * y);
})(4 , 5);

// 5) 즉시 실행 함수 => 화살표 함수
((x, y) => {
    console.log(x*y)
}) (4 , 5);


