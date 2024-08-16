/** for 구문 -- 시간복잡도 : O(n)
 * for (첨자=초기화; 조건; 증감식) {
 * 
 * }
 */

// 1부터 10까지 더해서 출력
sum = 0;
for (let i = 1; i<=10; i+=2) {
    sum += i
}
console.log(sum);

// 배열을 순회하면서 값을 읽어서 더하기
let vlaue = [4, 9, 2, 7, 5, 11]
console.log(vlaue.length);
sum1 = 0;
for (let i  = 0; i < vlaue.length; i++) {
    sum1 += vlaue[i]
}
console.log(sum1);

/** 중첩 for 구문 -- 시간복잡도 : O(n^2)
 * for (let i = 1; i <= 9; i++) {
 *      for (let j = 1; i <= 9; i++) {
 *          실행문장
 *      }
 * }
 * 
 */

// 구구단 출력

for (let i = 2; i <= 9; i++) {
    console.log(`======= ${i}단 =======`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

/**
 * #
 * ##
 * ###
 * ####
 * #####
 */

// for 구문 이용
let star = '';
for (let i = 1 ; i <= 5; i++) {
    star = star + '*';
    console.log(star)
}

console.log("------------------------------")

// 중첩 for 구문 이용
star = ''
for (let i = 1 ; i <= 5; i++) {
    for (let j = 1 ; j <= i; j++) {
        star = star + '*';
    }
    star = star + '\n';
}
console.log(star)

console.log("------------------------------")

// 역순으로 * 출력 1)
star = ''
for (let i = 1 ; i <= 5; i++) {
    for (let j = 1 ; j <= (6-i); j++) {
        star = star + '*';
    }
    star = star + '\n';
}
console.log(star)

console.log("------------------------------")

// 역순으로 * 출력 2)
star = '';
for (let i = 5; i >= 1; i--) {
    for(let j = 1; j <= i; j++) {
        star = star + '*';
    }
    star = star + '\n';
}
console.log(star)

console.log("------------------------------")

// 역순으로 * 출력 3)
star = '';
let line = 5;
for (let i = line; i >=0; i--) {
    for (let j = 1; j <= i ; j++) {
        star = star + '*';
    }
    star = star + '\n';
}
console.log(star)

// for ~ in 구문 (배열, 오브젝트, 리스트 내용을 순회할 때 사용)
const yujin = {
    name : "안유진",
    year : 2003,
    group : "ive",
} 

for(let x in yujin) { // let 다음 값을 무엇으로 설정해도 name,year,group이 나옴
    console.log(x);
    console.log(yujin[x]);
}

console.log("------------------------------")

// for ~ of 구문
const iveMember = ['안유진', '장원영', '가을', '이서']
for(let x of iveMember) {
    console.log(`${x}`);
}

console.log("------------------------------")

const iveMembers = [
   { name : "장원영",
    year : 2004,
    age : 21,
   },
    { name : "안유진",
    year : 2003,
    age : 22,
    }
]

for (let m of iveMembers) {
    console.log(m.name + "" + m.age);
}