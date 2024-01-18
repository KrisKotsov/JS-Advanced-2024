function addAndRemoveElements(arr) {

    let n = 1
    let newArr = []

    for (let el of arr) {
        if (el == "add") {
            newArr.push(n)
            n++
        } else {
            newArr.pop()
            n++
        }
    }
    return newArr.length ? newArr.join("\n") : "Empty"
}

console.log(addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']))