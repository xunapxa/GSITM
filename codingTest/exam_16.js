// 주사위 두 개를 36,000번 던져서 나오는 모든 경우의 수

let diceSum = new Array(11).fill(0);
console.log(diceSum);
let dice_1 = 0;
let dice_2 = 0;

for (let i = 1; i < 36000; i++) {
    dice_1 = Math.floor(Math.random()*6) + 1;
    dice_2 = Math.floor(Math.random()*6) + 1;
    diceSum[dice_1 + dice_2 - 2] ++;
}

console.log(diceSum);
console.log("Output : ")
for (let i = 0; i < diceSum.length; i++) {
    console.log(`${i + 2} : ${diceSum[i]} (${(diceSum[i]/36000).toFixed(6)})`);
}





