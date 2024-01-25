function townsToJSON(arr) {

    let result = []
    let towns = {}
    arr.shift()

    for (let el of arr) {
        let [town, latitude, longitude] = el.split("|").map(x => x.trim()).filter(x => !!x)
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)

        towns = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }

        result.push(towns)
        towns = {}
    }
    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |'])