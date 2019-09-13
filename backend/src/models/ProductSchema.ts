import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gronies: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  barcode: {
    type: String,
    required: Number
  }
});

module.exports = mongoose.model("Post", productSchema);
