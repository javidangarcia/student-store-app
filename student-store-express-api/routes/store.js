const express = require("express");
const router = express.Router();
const Store = require("../models/store")

router.get("/", async (req, res) => {
    const products = Store.listProducts();
    res.status(200).json(products);
})

router.get("/:productId", async (req, res) => {
    const {productId} = req.params;
    const product = Store.getProductById(productId);
    res.status(200).json(product);
})

module.exports = router;