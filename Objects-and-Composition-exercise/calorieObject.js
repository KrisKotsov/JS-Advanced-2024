function calorieObject(arr) {

    let foods = {}

    for (let i = 0; i < arr.length; i += 2) {
        foods[arr[i]] = Number(arr[i + 1])
    }
    console.log(foods);
}

calorieObject(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52'])