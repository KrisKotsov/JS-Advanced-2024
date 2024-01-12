function checkDistanceValidity(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    function isValid(distance) {
        return Number.isInteger(distance);
    }

    let distanceToOrigin1 = calculateDistance(x1, y1, 0, 0);
    let distanceToOrigin2 = calculateDistance(x2, y2, 0, 0);
    let distanceBetweenPoints = calculateDistance(x1, y1, x2, y2);

    let printResult = (point1, point2, distance) => {
        let validity = isValid(distance) ? 'valid' : 'invalid';
        console.log(`{${point1}} to {${point2}} is ${validity}`);
    };

    printResult(`${x1}, ${y1}`, '0, 0', distanceToOrigin1);
    printResult(`${x2}, ${y2}`, '0, 0', distanceToOrigin2);
    printResult(`${x1}, ${y1}`, `${x2}, ${y2}`, distanceBetweenPoints);
}

let x1 = 3;
let y1 = 4;
let x2 = 6;
let y2 = 8;

checkDistanceValidity(x1, y1, x2, y2);
