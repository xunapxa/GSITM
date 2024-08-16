// console.log("setTimeout-------------------")
// setTimeout(function(){
//     console.log("3초가 지났습니다.");
// },3000)

// console.log("setInterval-------------------")
// let i = 1;
// let timeInterval = setInterval(function () {
//     console.log("i =" + i ++)
//     if (i == 5) clearInterval(timeInterval)
// },1000)

// 숫자인지 판단
let age = "1";
if(isNaN(age)) {
    console.log("숫자로 입력하세요")
} else {
    console.log("나이는 " + age + "세 입니다." )
}

// toFixed() 소수점 자리 나타냄
let num = 123.5678;
console.log(num.toFixed(2))

// indexOf()
let email = "abc@kkk.co.kr"
let atSignLocation = email.indexOf('@' , 0)
console.log(email.substring(0,atSignLocation))
console.log(email.substring(0,email.indexOf('@' , 0)))

// split() 주민번호를 문자로 입력 받아서 배열로 반환
let jumin = "0408314187816";
let juminArrary = jumin.split('')
console.log(juminArrary);

// 현재 날짜와 시간 출력
console.log(new Date());

// 연도, 월, 일 값만 출력
let now = new Date
console.log(now.getFullYear() + "년");
console.log((now.getMonth() + 1) + "월");
console.log(now.getDate() + "일");

// Math 함수 - 버림: floor(), 반올림: round(), max(), min(), random()

// floor() : 잘라버림
let a = 123.456;
console.log(Math.floor(a/10)*10);

// max(), min()
console.log(Math.max(1,2,3,5))

// reduce((p, x) => p + x , 0)
// p = p + x, 0은 p의 초기 값
let number = [3, 5, 7, 9]
// 합계 구하기
console.log(number.reduce((x, y) => x + y));
// 최댓값, 최솟값 구하기
console.log("최댓값 : " +
    number.reduce((x , y) => Math.max(x , y)));
console.log("최솟값 : " +
    number.reduce((x , y) => Math.min(x , y)));

// 랜덤값 구하기 : random()
console.log(Math.floor(Math.random()*45));

// 로또 번호 만들기
let lotto = new Array(6);
lotto.fill(0);
console.log(lotto);

console.log("로또 번호---------------------------");

// 중복되는 수 없이 로또 번호 6개 출력 하기 숙제@@@@@@
// console.log(lotto.map((x) => Math.floor(Math.random()*45)))

let i = 0;
lotto1 = lotto.map((x) => Math.floor(Math.random()*45))
while (lotto1) {
         if (lotto[i+1] == lotto[i]) {
            lotto[i] = lotto1
        }
}
console.log(lotto1)










