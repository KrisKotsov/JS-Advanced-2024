function evenPosition(arr) {

    let buff = ""

    for (let i = 0; i < arr.length; i += 2) {
        buff += arr[i]
        buff += " "
    }
    console.log(buff);
}

evenPosition(['20', '30', '40',

    '50', '60'])