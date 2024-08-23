let fs = require('fs');
let input = fs.readFileSync('input_07.txt')
            .toString().split(' ').map((x) => Number(x))
console.log(input);

let sec1 = input[0]
let sec2 = input[1]
let sec3 = input[2]

console.log(sec1 , sec2, sec3);

let prize = 0;

if (sec1 == sec2 && sec2 == sec3) {
    prize = 10000 + sec1 * 1000
} else if (sec1 == sec2 || sec2 == sec3 || sec1 == sec3) {
    if (sec1 == sec2 || sec1 == sec3) {
        prize = 1000 + sec1 * 100
    } else {
        prize = 1000 + sec2 * 100
    }
} else {
    prize = Math.max(sec1,sec2,sec3) * 100
}

console.log(prize);

// 선생님께서 사용하신 방법

let dice = input[0].split(' ').map(Number);
console.log(dice);
// 가장 큰 수 구하기
let maxNumber = Math.max(...dice)
// 중복 수의 개수
let sameNumCount = 0;
// 중복 주사위 값
let sameNumber = 0;

// for로 각 값을 찾음
for(let i = 0; i < dice.length - 1; i++) {
    for (let j = i+1 ; j < dice.length; j++) {
        if (dice[i] == dice[j]) {
            sameNumCount ++;
            sameNumber = dice[i];
        }
    }
}
// 중복에 따른 보장 금액 구하기
let money = 0;
// 3개 중복, 2개 중복, 모두 다른 경우
if(sameNumCount >= 2) {
    money = 10000 + (sameNumber) * 1000
} else if (sameNumCount == 1) {
    money = 1000 + (sameNumber) * 100
} else {

}    money = maxNumber * 100






