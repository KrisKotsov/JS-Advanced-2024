function biggestElement(matrix) {

    let num = Number.NEGATIVE_INFINITY

    for (let row of matrix) {
        for (let col of row) {
            if (col > num) {
                num = col
            }
        }
    }

    return num
}

biggestElement([[20, 50, 10],

[8, 33, 145]])