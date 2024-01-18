function extractNonDecreasingSubset(numbers) {

    let result = [numbers[0]];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] >= result[result.length - 1]) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(extractNonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));