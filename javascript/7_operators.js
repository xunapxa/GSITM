// 1) 산술연산자
console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/3);
// 나머지연산자 %
console.log(10%3);
console.log(3%7);

console.log("--------------------------");

// 2) 증감연산자
let number = 1;
number = number +1;
console.log(`number = ${number}`);
number ++;
console.log(`number = ${number}`);
number --;
console.log(`number = ${number}`);

number = 1;
let result = 1;
result = number ++; // 증감연산자 ++은 현재 행이 진행된 이후 연산됨
console.log(result,number); // 때문에 결과가 1,2
result = ++ number;
console.log(result,number);

console.log("--------------------------");

// 숫자가 아닌 곳에 +,- 사용
let sample = '99';
console.log(+sample);
console.log(typeof sample);
console.log(typeof +sample);

sample = true;
console.log(typeof sample);
console.log(typeof +sample, +sample);

sample = '안유진';
console.log(+sample);
// NaN 숫자가 아님 문자열이라 연산처리 불가

// 3) 할당연산자
number = 100;
number = number + 10;
number += 10;

console.log("--------------------------");

// 4) 비교연산자
console.log(5 == 5);
console.log(5 == '5'); // ==은 값만 비교
console.log(5 === '5'); // ===은 타입과 값 모두 비교
console.log(0 == '');
console.log(1 == true);
console.log(false == 0);
console.log(true == '1');
console.log(true == '박선아'); // 문자는 false로 인식

// 5) 관계연산자
// > < >= <= != !==(타입과 값 모두 같지 않음)

// 6) 삼항연산자
console.log(10 > 0? '참' : '거짓');

let a = 10;
if(a > 11) {
    console.log('참');
} else {
    console.log('거짓');
};

// 7) 논리연산자 (And - &&, Or - ||, Not - !)
let x = 3;
console.log(x>=2 && x<= 5);

console.log("--------------------------");

// 8) 단축평가
console.log(true || "박선아");
console.log(false || "박선아");

console.log(true && "박선아");
console.log(false && "박선아");

console.log(true && true && "박선아");
console.log(true && false && "박선아");

console.log(true || true || "박선아");
console.log(false || false || "박선아");

// 9) 지수 연산자 : ** ex) 2의 세제곱 = 2**

console.log("--------------------------");

// 10) null 연산
let myName;
console.log(myName);
myName = myName ?? '박선아'; // ??: 변수 값이 null 이면 우측 값 삽입
console.log(myName);
myName = myName && '아이브'; // myName이 false이므로 우측으로 넘어감
console.log(myName);             // -> 아이브도 false값 이지만 무조건 하나는 출력해야 함