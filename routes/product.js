const express = require("express");
const router = express.Router();

const ProductSchema = require("../models/product");

// GET PRODUCT DATA
router.get("/", async (req, res) => {
  ProductSchema.find({})
    .then((docs) => res.json(docs))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
