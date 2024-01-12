function timeToWalk(steps, footprintLength, speed) {

    let distance = steps * footprintLength;
    let totalTimeInHours = distance / (speed * 1000);
    let restTimeInMinutes = Math.floor(distance / 500);
    let totalTimeInMinutes = totalTimeInHours * 60 + restTimeInMinutes;

    let hours = Math.floor(totalTimeInMinutes / 60);
    let minutes = Math.floor(totalTimeInMinutes % 60);
    let seconds = Math.round((totalTimeInMinutes * 60) % 60);

    let result = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    console.log(result);
}

timeToWalk(4000, 0.60, 5)