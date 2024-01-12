function cookingByNumbers(num, op1, op2, op3, op4, op5) {

    num = Number(num)
    let operation = [op1, op2, op3, op4, op5]

    for (let i = 0; i < operation.length; i++) {
        switch (operation[i]) {
            case "chop": num /= 2
                break
            case "dice": num = Math.sqrt(num)
                break
            case "spice": num += 1
                break
            case "bake": num *= 3
                break
            case "fillet": num *= 0.80
                break
        }
        console.log(num);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake',

    'fillet')