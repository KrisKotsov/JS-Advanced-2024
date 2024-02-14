function getPersons() {
    let personsArray = []

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email
        }
    }

    let anna = new Person("Anna", "Simpson", 22, "anna@yahoo.com")
    let softuni = new Person("SoftUni")
    let stephan = new Person("Stephan", "Johnson", 25)
    let gabriel = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com")

    personsArray.push(anna, softuni, stephan, gabriel)
    return personsArray
}

getPersons()