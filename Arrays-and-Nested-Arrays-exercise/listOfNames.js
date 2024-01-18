function listOfNames(arr) {

    let n = 1
    arr = arr.sort((a, b) => a.localeCompare(b))

    for (let el of arr) {
        console.log(`${n}.${el}`);
        n++
    }
}

listOfNames(["John",

    "Bob",

    "Christina",

    "Ema"])