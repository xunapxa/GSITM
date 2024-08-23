function recursion(n) {
    if (n==0) {
        return;
    }
    recursion(n-1);
    console.log(n)
}

recursion(3);
console.log('재귀함수 종료')

function a () {
    b();
    console.log('function a');
}
function b () {
    c()
    console.log('function b');
}
function c () {
    console.log('function c');
}

a()



