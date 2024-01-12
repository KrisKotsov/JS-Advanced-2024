function fruit(type, weight, money) {

    let weightInKilos = weight / 1000
    let moneyNeeded = weightInKilos * money

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80)