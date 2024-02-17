class FashionRetailInventory {
    productStock = []
    constructor(storehouse, location) {
        this.storehouse = storehouse
        this.location = location
    }

    addProduct(productName, size, quantity, price) {
        let products = {
            productName,
            size,
            quantity,
            price
        }
        const existingProduct = this.productStock.find(product => product.productName === productName && product.size === size);

        if (existingProduct) {
            products.quantity += quantity
            return `You added ${quantity} more pieces of product ${productName} size ${size}`
        } else {
            this.productStock.push(products)
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    }

    sendProduct(productName, size) {
        const existingProduct = this.productStock.find(product => product.productName === productName && product.size === size);

        if (!existingProduct) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`
            )
        }

        this.productStock = this.productStock.filter(x => x.productName !== productName && x.size !== size)
        return `The product ${productName}, size ${size} was successfully removed from the inventory`
    }

    findProductsBySize(size) {
        let matchingProducts = this.productStock.filter(product => product.size == size)
        if (matchingProducts == 0) {
            return `There are no products available in that size`
        }
        let formattedList = matchingProducts.map(product => `${product.productName}-${product.quantity} pieces`)
        return formattedList.join(", ")
    }

    listProducts() {
        if (this.productStock.length <= 0) {
            return `${this.storehouse} storehouse is empty`
        } else {
            let buff = `${this.storehouse} storehouse in ${this.location} available products:\n`
            this.productStock.sort((a, b) => a.productName.localeCompare(b.productName))
            let formattedList = this.productStock.map(product => `${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$\n`)
            buff += formattedList.join("")
            return buff
        }
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());


