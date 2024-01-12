function roadRadar(speed, area) {

    let residentialLimit = 20
    let cityLimit = 50
    let interstateLimit = 90
    let motorwayLimit = 130

    if (area == 'residential' && speed <= 20) {
        console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
    } else if (area == 'residential' && speed - residentialLimit <= 20) {
        console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - speeding`);
    } else if (area == 'residential' && speed - residentialLimit <= 40) {
        console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - excessive speeding`);
    } else if (area == 'residential' && speed - residentialLimit > 40) {
        console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - reckless driving`);
    }

    if (area == 'city' && speed <= 50) {
        console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
    } else if (area == 'city' && speed - cityLimit <= 20) {
        console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - speeding`);
    } else if (area == 'city' && speed - cityLimit <= 40) {
        console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - excessive speeding`);
    } else if (area == 'city' && speed - cityLimit > 40) {
        console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - reckless driving`);
    }

    if (area == 'interstate' && speed <= 90) {
        console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
    } else if (area == 'interstate' && speed - interstateLimit <= 20) {
        console.log(`The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - speeding`);
    } else if (area == 'interstate' && speed - interstateLimit <= 40) {
        console.log(`The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - excessive speeding`);
    } else if (area == 'interstate' && speed - interstateLimit > 40) {
        console.log(`The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - reckless driving`);
    }

    if (area == 'motorway' && speed <= 130) {
        console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
    } else if (area == 'motorway' && speed - motorwayLimit <= 20) {
        console.log(`The speed is ${speed - motorwayLimit} km/h faster than the allowed speed of ${motorwayLimit} - speeding`);
    } else if (area == 'motorway' && speed - motorwayLimit <= 40) {
        console.log(`The speed is ${speed - motorwayLimit} km/h faster than the allowed speed of ${motorwayLimit} - excessive speeding`);
    } else if (area == 'motorway' && speed - motorwayLimit > 40) {
        console.log(`The speed is ${speed - motorwayLimit} km/h faster than the allowed speed of ${motorwayLimit} - reckless driving`);
    }
}

roadRadar(200, "motorway")