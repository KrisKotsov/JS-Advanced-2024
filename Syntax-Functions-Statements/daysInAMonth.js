function getDaysInMonth(month, year) {

    let nextMonthFirstDay = new Date(year, month, 1);
    let lastDayOfMonth = new Date(nextMonthFirstDay.getTime() - 1);

    return lastDayOfMonth.getDate();
}

console.log(getDaysInMonth(2, 2021));