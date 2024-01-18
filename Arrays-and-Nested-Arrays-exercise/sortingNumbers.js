function sortingNumbers(arr) {

    let result = []
    arr.sort((a, b) => a - b)

    while (arr.length > 0) {
        let first = arr.shift()
        let last = arr.pop()

        result.push(first, last)
    }
    return result
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])