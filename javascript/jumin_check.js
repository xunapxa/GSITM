let jumin = [0, 4, 0, 8, 3, 1, 4, 1, 8, 7, 8, 1, 6];
let checkArr = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

function check (jumin) {
    let total = 0;

    // 1)
    // for(let i = 0; i < checkArr.length; i++) {
    //     total = total + (jumin[i] * checkArr[i]);
    // }
    
    // 2)
    for(let i = 0; i<jumin.length-1; i++) {
        if (i<=7) {
            total = total + (jumin[i] * (i+2));
        } else {
            total = total + (jumin[i] * (i-6));
        }
    }

    total = total % 11;
    total = 11 - total;
    total = total % 10;

    if(total == jumin[12]) {
        return true
    } else {
        return false
    }

    return total;
}

let result = check(jumin);
console.log(result);
console.log(result == true? "맞음" : "틀림");