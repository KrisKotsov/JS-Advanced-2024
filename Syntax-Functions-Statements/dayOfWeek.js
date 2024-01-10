function dayOfWeek(str) {

    if (str == "Monday") {
        return 1
    } else if (str == "Tuesday") {
        return 2
    } else if (str == "Wednesday") {
        return 3
    } else if (str == "Thursday") {
        return 4
    } else if (str == "Friday") {
        return 5
    } else if (str == "Saturday") {
        return 6
    } else if (str == "Sunday") {
        return 7
    } else {
        return "error"
    }
}

console.log(dayOfWeek("das"))