// 변수 Hoisting

console.log(name)
var name = "김형민";
console.log(name); // 변수 var - 출력 후 선언해도 에러없이 진행 -> 사용 지양하는 추세

console.log(myName)
let myName = "박선아"
console.log(myName) // 에러 