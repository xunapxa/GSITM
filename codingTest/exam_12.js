let fs = require('fs');
let input = fs.readFileSync('input_12.txt')
            .toString().split('\n');
console.log(input);

let rowCount = Number(input[0])

for (let i = 1; i <= rowCount; i++) {
    let data = input[i].split(' ').map(Number);
    let dataSize = data[0];
    let sum = 0;
    let count = 0;
    for(let j = 1; j <= dataSize; j++) {
        sum = sum + data[j];
    }
    let avg = sum / dataSize;
    for (let k = 1; k <= dataSize; k++) {
        if(data[k] > avg) {
            count = count + 1;
        }
    }
    console.log((count / dataSize * 100).toFixed(3) + '%')
}