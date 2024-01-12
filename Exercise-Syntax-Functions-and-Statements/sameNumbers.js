function sameNumbers(num) {

    let sum = 0
    let flag = false

    num = String(num)

    for (let i = 0; i < num.length - 1; i++) {
        if (num[i] === num[i + 1]) {
            flag = true
        } else {
            flag = false
            break
        }
    }

    for (let char of num) {
        sum += Number(char)
    }

    console.log(flag);
    console.log(sum);
}

sameNumbers(1224)