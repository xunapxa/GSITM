// Arrary function 배열 조작 함수
let iveMembers = [
    "안유진",
    "장원영",
    "레이",
    "가을"
]
console.log(iveMembers)
// push() : iveMembers 끝에 "이서" 추가
iveMembers.push("이서");
console.log(iveMembers);

// pop() : 배열의 맨 뒤의 아이템 반환 -> 삭제
console.log(iveMembers.pop())

// 맨 앞에 추가
iveMembers.unshift("박선아");
console.log(iveMembers)

// 맨 앞 자료 삭제
console.log(iveMembers.shift());

// splice(시작위치, 삭제할 item 수)
iveMembers.splice(0 , 2)
console.log(iveMembers);

iveMembers = [
    "안유진",
    "장원영",
    "레이",
    "가을",
    "이서"
]

console.log("----------------------------------");

// concat() : 새로운 item을 맨 뒤에 삽입 - 원본 수정 X
console.log(iveMembers.concat("박선아"));

// slice() : 삭제할 index, 몇 번 index 앞까지 - 원본 수정 X
console.log(iveMembers.slice(0,3));

// spread operator(...) : 기존 배열을 몽땅 가져옴 (배열 복사 시 사용)
let iveMembers2 = [...iveMembers]
console.log(iveMembers2)

// join() : 배열 자료를 join(구분자)로 구분해서 문자열로 반환
let iveMembersString = iveMembers.join(' / ');
console.log(iveMembersString);

console.log("---------------------------------");

// *** sort() : 오름차순으로 정렬
iveMembers.sort();
console.log(iveMembers);
// reverse() : 내림차순 정렬
iveMembers.reverse();
console.log(iveMembers);

// *** sort() 주의! 실행 전 숫자를 문자열로 바꿈
console.log("number sort ---------------------------");
let numbers = [11, 1, 5, 4, 3]
console.log(numbers.sort((a,b) => a-b));
//a-b) a가 음수면 배열의 앞에, 양수면 뒤로 보냄
console.log(numbers.sort((a,b) => a < b? -1 : 1));

console.log("String sort ---------------------------");
let stringData = ["D" , "A" , "C" , "B"]
console.log(stringData.sort((x,y) => x < y ? -1 : 1));
// 대소 비교 후 음수면 -1 양수면 1

// *** map() : 원래 배열을 변형시켜 새로운 배열을 돌려 줌 (원본 유지) : mapping
console.log("map ---------------------------");
console.log(iveMembers.map((member) => `아이브 : ${member}`))
console.log(iveMembers)

console.log("map(장원영 모자씌우기)-------------------------");
let mapive = iveMembers.map((x) => {
    if (x === "장원영") {
        return `모자 쓴 ${x}`;
    } else {
        return x;
    }
})
console.log(mapive)

// 오름차순 정렬 후 안유진 모자 씌우기 (sort -> map 이어 작업하기 : 체인)
console.log(iveMembers.sort().map((x) => {
    if (x === "안유진") {
        return `모자 쓴 ${x}`;
    } else {
        return x;
    }
}));

// *** filter() : 원하는 자료만 선택적으로 가져오기 (원본 수정 X)
numbers = [11, 1, 5, 4, 3, 6]
console.log("짝수 값만 출력 하기 ----------");
// console.log(numbers.filter((x) => {
//     // return (x % 2) == 0;
//     return x > 3 ;
// }));
console.log(numbers.filter((x) => x > 3)); // 리턴할 값이 한줄이므로 요약 가능

// 문제. 3보다 큰 수를 찾아서 내림차순 정렬
console.log("문제---------------------------");
const num = numbers.filter((x) => {return x > 3})
                  .sort((a,b) => a < b? -1 : 1)
console.log(num)

// 문제. 위 배열에서 가장 큰 수와 가장 작은 수를 찾아 출력
console.log("문제---------------------------");
let maxNumber=Number.MIN_VALUE;
let minNumber=Number.MAX_VALUE;
numbers = [11, 1, 5, 4, 3, 6]
for (i = 0; i < numbers.length - 1 ; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i]
        } else if (numbers[i] < minNumber) {
            minNumber = numbers[i]
        }
}
console.log(maxNumber , minNumber)