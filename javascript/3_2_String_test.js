const codeTest = "코드테스트"
console.log(codeTest);

let ive = "아이브' 장원영"
console.log(ive);

let iveYuJin = "아이브 \n 안유진"
iveYuJin = "아이브 \t 안유진"
console.log(iveYuJin);

const iveGaeul = '아이브 \'가을'
console.log(iveGaeul);

const groupName = "아이브"
console.log(groupName + "안유진");
console.log(groupName, "안유진");

// 백틱(`)을 사용해 변수를 문자열에 삽입할 수 있음
console.log(`${groupName} 장원영`);

let camp = "부트캠프"
const name = "박선아"
console.log(`안녕하세요 저는 ${camp} ${name} 입니다`);

// null 값 확인
let init = null
console.log(init);
console.log(typeof init);