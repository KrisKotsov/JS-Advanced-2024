function getPreviousDay(year, month, day) {

    let currentDate = new Date(year, month - 1, day);

    currentDate.setDate(currentDate.getDate() - 1);

    let newYear = currentDate.getFullYear();
    let newMonth = currentDate.getMonth() + 1;
    let newDay = currentDate.getDate();

    let result = `${newYear}-${newMonth}-${newDay}`;

    return result;
}

console.log(getPreviousDay(2022, 2, 5))
