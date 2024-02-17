class BookClub {
    books = []
    members = []
    constructor(library) {
        this.library = library
    }

    addBook(title, author) {
        let book = {
            title,
            author
        }

        const existingBook = this.books.find(book => book.title == title && book.author == author)

        if (existingBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        } else {
            this.books.push(book)
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }

    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`
        } else {
            this.members.push(memberName)
            return `Member ${memberName} has been joined to the book club.`
        }
    }

    assignBookToMember(memberName, bookTitle) {
        if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`)
        }
        const existingBook = this.books.find(book => book.title == bookTitle)
        if (!existingBook) {
            throw new Error(`Book "${bookTitle}" not found.`)
        }

        this.books = this.books.filter(x => x.title !== bookTitle)
        const author = existingBook.author
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${author}.`
    }

    generateReadingReport() {
        if (this.members.length <= 0) {
            return "No members in the book club."
        }
        if (this.books.length <= 0) {
            return "No available books in the library."
        }

        let buff = `Available Books in ${this.library} library:\n`
        let formattedBooksList = this.books.map(book => `"${book.title}" by ${book.author}\n`)
        buff += formattedBooksList.join("").trim()
        return buff
    }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());
