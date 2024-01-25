function heroicInventory(arr) {

    let heroes = {}
    let result = []

    for (let el of arr) {
        let tokens = el.split(" / ")
        let name = tokens.shift()
        let level = Number(tokens.shift())
        let someItems = tokens[0] ? tokens[0].split(", ") : []

        heroes["name"] = name
        heroes["level"] = level
        heroes["items"] = someItems

        result.push(heroes)

        heroes = {}
    }
    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'])