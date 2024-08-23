let fs = require('fs');
let input = fs.readFileSync('input_14.txt')
            .toString().split('\n');
console.log(input);

let count = Number(input[0]);
let result = '';
for(let i = 1 ; i <= count; i++) {
    let[repeat, str] = input[i].split(' ');
    for (let j = 0; j < str.length; j++) {
        
        result = result + (str.charAt(j).repeat(repeat))
    }
    console.log(result)
}
