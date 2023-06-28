const { storage } = require("../data/storage")

class Store {
    static listProducts() {
        const products = storage.get("products");
        return products;
    }

    static getProductById(id) {
        const products = storage.get("products").value();
        const product = products[id - 1];
        return product;
    }
}

module.exports = Store;