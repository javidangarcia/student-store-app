const { storage } = require("../data/storage")

class Store {
    static listProducts() {
        const products = storage.get("products").value();
        return products;
    }

    static getProductById(id) {
        const products = Store.listProducts();
        const product = products[id - 1];
        return product;
    }
}

module.exports = Store;