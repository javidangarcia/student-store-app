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

    static listPurchases() {
        const purchases = storage.get("purchases").value();
        return purchases;
    }

    static getPurchaseById(orderID) {
        const purchases = Store.listPurchases();
        const purchase = purchases[orderID - 1];
        return purchase;
    }

    static recordPurchase(purchase) {
        storage.get("purchases").push(purchase).write();
        return purchase;
    }

    static deletePurchase(orderID) {
        const adjustedOrderID = orderID - 1;
        const purchases = Store.listPurchases();
        const purchaseIndex = purchases.findIndex(purchase => (purchase.orderID === adjustedOrderID));
        storage.get("purchases").splice(purchaseIndex, 1).write();
    }
}

module.exports = Store;