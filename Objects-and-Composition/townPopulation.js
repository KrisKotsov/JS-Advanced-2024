function townPopulation(input) {

    let register = {}

    for (let el of input) {
        let tokens = el.split(" <-> ")
        let city = tokens[0]
        let popultaion = Number(tokens[1])

        if (register.hasOwnProperty(city)) {
            register[city] += popultaion
        } else {
            register[city] = popultaion
        }
    }

    let entries = Object.entries(register)

    for (let el of entries) {
        let [key, value] = el
        console.log(`${key} : ${value}`);
    }
}

townPopulation(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000'])