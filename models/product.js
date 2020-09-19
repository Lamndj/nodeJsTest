const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  chinaWarehouse: {
    type: Boolean,
  },
  productName: {
    type: String,
  },
  category: {
    type: String,
  },
  subCategory: {
    type: String,
  },
  subSubCategory: {
    type: String,
  },
  skuCode: {
    type: String,
  },
  hsnCode: {
    type: Number,
  },
  brand: {
    type: String,
  },
  indianQuantity: {
    type: Number,
  },
  chinaQuantity: {
    type: Number,
  },
  indianPriceMRP: {
    type: Number,
  },
  indianPriceSales: {
    type: Number,
  },
  chinaPriceMRP: {
    type: Number,
  },
  chinaPriceSales: {
    type: Number,
  },
  taxClass: {
    type: String,
  },
  shipmentLandStatus: {
    type: Boolean,
  },
  shipmentAirStatus: {
    type: Boolean,
  },
  chinaShipment: {
    type: Array,
  },
  weight: {
    type: Number,
  },
  volumetricWeight: {
    type: Number,
  },
  weightUnit: {
    type: String,
  },
  length: {
    type: Number,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  dimensionUnit: {
    type: String,
  },
  codStatus: {
    type: Boolean,
  },
  allRelatedProducts: {
    type: Array,
  },
  attributes: {
    type: Array,
  },
  variation: {
    type: Object,
  },
  keyFeatures: {
    type: String,
  },
  description: {
    type: String,
  },
  features: {
    type: String,
  },
  downloads: {
    type: String,
  },
  packageIncludes: {
    type: String,
  },
});

module.exports = Product = mongoose.model("e_products", ProductSchema);
