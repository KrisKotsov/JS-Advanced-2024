function tickets(arrOfTickets, sortCriteria) {
    let result = []

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    for (let el of arrOfTickets) {
        let [destination, price, status] = el.split("|")
        let myTicket = new Ticket(destination, price, status)
        result.push(myTicket)
    }

    if (sortCriteria == "destination") {
        result.sort((a, b) => a.destination.localeCompare(b.destination))
    } else if (sortCriteria == "price") {
        result.sort((a, b) => a.price - b.price)
    } else if (sortCriteria == "status") {
        result.sort((a, b) => a.status.localeCompare(b.status))
    }

    return result
}

tickets(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'destination')