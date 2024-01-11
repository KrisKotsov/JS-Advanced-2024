function squareOfStars(num) {

    let star = "*"
    let buff = " "

    for (let i = 1; i <= num; i++) {
        let row = star + buff
        console.log(row.repeat(num));
    }
}

squareOfStars(7)