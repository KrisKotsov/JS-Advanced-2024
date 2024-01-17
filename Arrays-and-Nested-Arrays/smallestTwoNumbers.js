function smallestTwoNumbers(arr) {

    arr = arr.sort((a, b) => a - b).splice(0, 2)
    console.log(...arr);
}

smallestTwoNumbers([30, 15, 50, 5])