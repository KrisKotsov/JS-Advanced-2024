class WineSelection {
    wines = []
    bill = 0
    constructor(space) {
        this.space = Number(space)
    }

    reserveABottle(wineName, wineType, price) {
        price = Number(price)
        if (this.space == this.wines.length) {
            throw new Error("Not enough space in the cellar.");
        } else {
            this.wines.push({
                wineName,
                wineType,
                price,
                paid: false
            })
        }
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        price = Number(price)
        let currentWine = this.wines.find(wine => wine.wineName == wineName)
        if (!currentWine) {
            throw new Error(`"${wineName} is not in the cellar.`)
        }

        if (currentWine.paid == true) {
            throw new Error(`${wineName} has already been paid.`)
        }

        currentWine.paid = true
        this.bill += currentWine.price
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        let currentWine = this.wines.find(wine => wine.wineName == wineName)
        if (!currentWine) {
            throw new Error("The wine, you're looking for, is not found.")
        }

        if (!currentWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        this.wines = this.wines.filter(wine => wine.wineName !== wineName)

        return `You drank a bottle of ${wineName}.`

    }

    cellarRevision(wineType) {
        if (wineType) {
            let currentWine = this.wines.find(wine => wine.wineType == wineType)

            if (!currentWine) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
            return `${currentWine.wineName} > ${wineType} - ${currentWine.paid ? "Has Paid" : "Not Paid"}.`
        }
        let buff = `You have space for ${this.space - this.wines.length} bottles more.\n`
        buff += `You paid ${this.bill}$ for the wine.\n`
        this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName)).forEach(x => {
            buff += `${x.wineName} > ${x.wineType} - ${x.paid ? "Has Paid" : "Not Paid"}.\n`
        })
        return buff.trim()
    }
}

const selection = new WineSelection(2)

console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose',

    144));

console.log(selection.cellarRevision('Rose'));