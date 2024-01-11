function aggregateElements(arr) {

    let sum = 0
    let inverseSum = 0
    let strSum = ""

    for (let el of arr) {
        sum += el
    }
    console.log(sum);

    for (let el of arr) {
        inverseSum += 1 / el
    }
    console.log(inverseSum);

    arr = arr.map(String)

    for (let el of arr) {
        strSum += el
    }

    console.log(strSum);
}

aggregateElements([1, 2, 3])