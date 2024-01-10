function strLen(strOne, strTwo, strThree) {

    let strTotal = strOne.length + strTwo.length + strThree.length

    console.log(strTotal)
    console.log(Math.floor(strTotal / 3));
}

strLen('chocolate', 'ice cream', 'cake')