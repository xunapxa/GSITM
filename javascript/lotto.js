// 로또 번호를 담을 배열 생성
let lotto = new Array(6);
lotto.fill(0);
console.log(lotto);

// 배열의 인덱스를 지정하는 변수
let index = 0;

do {
    // 임의의 로또 번호 생성
    lottoNum =  Math.floor((Math.random()*45)+1);
    // 중복유무 확인 변수 선언 (flag기법)
    let flag = true;
    // 기존 배열에 중복번호 유무 확인
    for (let i = 0; i < index; i++) {
        if (lotto[i] == lottoNum) {
            // 중복번호가 있을 때
            flag = false;
        }
    }
    if (flag == true) {
        // flag = true : 중복안됨
        lotto[index] = lottoNum;
        index ++;
    }
} while (index < lotto.length);
// 오름차순으로 출력
console.log(lotto.sort((x,y) => x < y? -1 :1));









