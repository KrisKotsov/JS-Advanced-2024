function processOddPositions(arr) {

    let newArr = []

    arr.filter((el, i) => {
        if (i % 2 != 0) {
            newArr.push(el * 2)
        }
    })

    return newArr.reverse().join(" ")
}

console.log(processOddPositions([10, 15, 20, 25]))