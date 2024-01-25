function storeCatalogue(arr) {
    const sortedProducts = arr.sort((a, b) => a.localeCompare(b));

    const groupedProducts = {};

    sortedProducts.forEach(product => {
        const [name, price] = product.split(' : ');
        const initial = name[0]

        if (!groupedProducts[initial]) {
            groupedProducts[initial] = [];
        }

        groupedProducts[initial].push({ name, price });
    });

    for (const initial in groupedProducts) {
        console.log(initial);

        groupedProducts[initial].forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    }
}

storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])