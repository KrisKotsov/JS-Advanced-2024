function pieceOfPie(arr, firstPie, secondPie) {

    let start = arr.indexOf(firstPie)
    let end = arr.indexOf(secondPie)

    return arr.slice(start, end + 1)
}

pieceOfPie(['Pumpkin Pie',

    'Key Lime Pie',

    'Cherry Pie',

    'Lemon Meringue Pie',

    'Sugar Cream Pie'],

    'Key Lime Pie',

    'Lemon Meringue Pie')

