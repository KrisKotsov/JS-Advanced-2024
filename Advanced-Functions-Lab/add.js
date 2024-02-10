function solution(num) {
    return function (x) {
        return num + x
    }
}

let add5 = solution(5);
console.log(add5(2));



