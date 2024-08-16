/** if 구문
 * if ( 조건 ) {
 *  참일 때 실행할 문장;
 *  } else {
 *  거짓일 때 실행할 문장;
 *  }
 **/

// 문제1. number = 5, 출력 : 5 = 홀수 입니다

let number = 5;
if (number % 2 == 0) {
    console.log(`${number} = 짝수입니다`);
} else {
    console.log(`${number} = 홀수입니다`);
}

/** 다중 if 구문 
 * if ( 조건1 ) {
 *  참
 * } else if ( 조건2 ) {}
 * 
 * } else {
 * 
 * }
 */

// score = 83, 수우미양가 중 결과 출력

let score = 65;

if (score >= 90) {
    console.log(`점수가 ${score}점으로 수 입니다`);
} else if (score >= 80) {
    console.log(`점수가 ${score}점으로 우 입니다`);
} else if (score >= 70) {
    console.log(`점수가 ${score}점으로 미 입니다`);
} else if (score >= 60) {
    console.log(`점수가 ${score}점으로 양 입니다`);
} else {
    console.log(`점수가 ${score}점으로 가 입니다`);
}
// 수우미양가를 result에 대입해서 마지막에서 출력해도 Ok

/** swich case 구문
 * swich ( 검사할 값 ) {
 * case 조건 :
 *      실행 문장;
 *      break;
 *  
 * case 조건 :
 *      실행 문장;
 *      break;
 * defalt :
 *      실행 문장;
 *      break;
 * }
 */

const englishDay = 'TUE';
let koreanDay = '';

switch (englishDay) {
    case 'MON':
        koreanDay = '월요일';
        break;
    case 'TUE':
        koreanDay = '화요일';
        break;        
    case 'WEN':
        koreanDay = '수요일';
        break;   
    case 'THU':
        koreanDay = '목요일';
        break;
    case 'FRI':
        koreanDay = '금요일';
        break;
    default:
        koreanDay = '주말';
}
console.log(koreanDay);

let score1 = 90;
let result = '';

switch (score1) {
    case score >= 90:
        result = '수';
        break;
    case score1 >= 80:
        result = '우';
        break;        
    case score1 >= 70:
        result = '미';
        break;   
    case score1 >= 60:
        result = '양';
        break;
    default:
        result = '가';
}
console.log(`${score1}점 으로 ${result}입니다`);
// 자바스크립트에서는 관계연산자를 조건으로 허용 안함 (자바는 됨)