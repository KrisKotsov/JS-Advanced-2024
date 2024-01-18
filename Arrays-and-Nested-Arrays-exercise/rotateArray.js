function rotateArray(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let el = arr.pop()
        arr.unshift(el)
    }
    console.log(arr.join(" "));
}

rotateArray(['1',

    '2',

    '3',

    '4'],

    2)