
// 1.040831 4187816
// 2.23456789 23456을 자리에 곱하고 곱한 값을 모두 더함
// 3. 2번 결과를 11로 나눈 나머지를 구함
// 4. 3번을 11에서 뺀다
// 5. 4번을 10으로 나눈 나머지를 구함 => 주민번호 마지막 자리

let jumin = [0, 4, 0, 8, 3, 1, 4, 1, 8, 7, 8, 1, 6]
let check = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5 ]

function juminCheck(jumin) {
    let sum = 0;
    for (let i =0; i < check.length; i++) { // 2번 과정
        sum = sum + (jumin[i] * check[i]);
    }

    sum = sum % 11; // 3번
    sum = 11 - sum; // 4번
    sum = sum % 10; // 5번

    if (sum == jumin[12]) { // 구한 값이 주민번호 마지막과 일치하면 ture를 리턴
        return true 
    } else {
        return false
    }

    // if (sum == jumin[12]) { 2번째 if 참거짓 출력방법
    //      true 
    // } else {
    //      false
    // }

    return sum // 결과를 리턴
}
let total = juminCheck(jumin); // total에 function 값을 대입

console.log(total);

console.log(total == true? "맞음" : "틀림");

// console.log(total == jumin[12]? "맞음" : "틀림"); 2번째 if 참거짓 출력방법

