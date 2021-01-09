const mongoose = require("mongoose");
const { Schema, model, ObjectId } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 200,
      required: true,
    },
    description: {
        type: String,
        trim: true,
        minlength: 6,
        maxlength: 2000,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    photo: {
      data: Buffer,
      contentType:String,
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true,
    },
    shipping: {
        type: Boolean,
        default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", ProductSchema);
