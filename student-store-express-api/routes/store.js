const express = require("express");
const router = express.Router();
const Store = require("../models/store")

router.get("/purchases", async (req, res) => {
    const purchases = Store.listPurchases();
    res.status(200).json(purchases);
})

router.get("/purchases/:orderID", async (req, res) => {
    const { orderID } = req.params;
    const purchase = Store.getPurchaseById(orderID)
    res.status(200).json(purchase);
})

router.get("/", async (req, res) => {
    const products = Store.listProducts();
    res.status(200).json(products);
})

router.get("/:productId", async (req, res) => {
    const { productId } = req.params;
    const product = Store.getProductById(productId);
    res.status(200).json(product);
})

router.post("/", async (req, res) => {
    const purchase = req.body;
    Store.recordPurchase(purchase);
    res.status(201).json({ purchase: purchase });
})

module.exports = router;