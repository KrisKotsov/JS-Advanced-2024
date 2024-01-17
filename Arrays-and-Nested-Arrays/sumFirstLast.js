function sumFirstLast(arr) {

    let first = Number(arr.shift())
    let last = Number(arr.pop())

    return first + last
}

sumFirstLast(['20', '30', '40'])