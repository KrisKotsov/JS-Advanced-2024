function lastKNumbersSequence(n, k) {

    let sequence = [1]

    for (let i = 1; i < n; i++) {
        const startIndex = Math.max(0, i - k);
        const sum = sequence.slice(startIndex, i).reduce((acc, num) => acc + num, 0);
        sequence.push(sum);
    }

    return sequence;
}


console.log(lastKNumbersSequence(6, 3))