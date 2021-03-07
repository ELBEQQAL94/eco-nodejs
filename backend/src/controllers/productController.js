// Libs
const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");

// utils
const { validateImageType, validateProduct } = require("../utils");

// Models
const Product = require("../models/Product");

exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
    let product = new Product(fields);
    if (files.photo) {
      if (files.photo.size > Math.pow(10, 6)) {
        return res.status(400).json({
          error: "Photo should be less than 1mb.",
        });
      }

      // check type
      let isValidImageType = validateImageType(files);

      if (!isValidImageType) {
        return res.status(400).json({
          error: "Photo should be valid type.",
        });
      }

      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
      product.imageUrl = `http://localhost:4444/api/v1/products/photo/${product._id}`;
    }

    const schema = validateProduct();

    const { error } = schema.validate(fields);

    if (error) {
      console.log(error.details)
      return res.status(400).json({
        error: error.details[0].message,
      });
    }

    product.save((err, product) => {
      if (err) {
        return res.status(400).json({
          error: err.message,
        });
      }
      res.json(product);
    });
  });
};

exports.getProducts = async (req, res) => {
  let { sortBy = "_id", order = "asc", limit = 6, page = 1 } = req.query;

  const count = await Product.countDocuments();

  const query = Product.find({})
    .select("-photo")
    .populate("category", "name")
    .sort([[sortBy, order]])
    .limit(limit * 1)
    .skip((page - 1) * limit);

  query.exec(function (error, products) {
    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
    res.json({
      total_elements: count,
      total_pages: Math.ceil(count / limit),
      current_page: +page,
      products,
    });
  });
};

exports.getProduct = (req, res) => {
  const { productId } = req.params;
  Product.findById(productId).exec((error, product) => {
    if (error || !product) {
      return res.status(404).json({
        error: "Product not found.",
      });
    }
    product.photo = undefined;
    res.json(product);
  });
};

exports.deleteProduct = (req, res) => {
  const { productId } = req.params;
  Product.findOneAndRemove(productId).exec((error, product) => {
    if (error || !product) {
      return res.status(404).json({
        error: "Product not found.",
      });
    }
    res.status(204).json({});
  });
};

exports.updateProduct = (req, res) => {
  const { productId } = req.params;

  Product.findById(productId).exec((error, product) => {
    if (error || !product) {
      return res.status(404).json({
        error: "Product not found.",
      });
    }

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: err.message,
        });
      }

      let newProduct = product;
      newProduct = _.extend(newProduct, fields);

      if (files.photo) {
        if (files.photo.size > Math.pow(10, 6)) {
          return res.status(400).json({
            error: "Photo should be less than 1mb.",
          });
        }

        // check type
        let isValidImageType = validateImageType(files);

        if (!isValidImageType) {
          return res.status(400).json({
            error: "Photo should be valid type.",
          });
        }

        newProduct.photo.data = fs.readFileSync(files.photo.path);
        newProduct.photo.contentType = files.photo.type;
      }

      const schema = validateProduct();

      const { error } = schema.validate(fields);

      if (error) {
        return res.status(400).json({
          error: error.details[0].message,
        });
      }

      newProduct.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: err.message,
          });
        }
        res.json(result);
      });
    });
  });
};

exports.relatedProducts = async (req, res) => {
  const { productId } = req.params;

  let { sortBy = "_id", order = "asc", limit = 4, page = 1 } = req.query;

  const relatedProduct = await Product.findById(productId);

  if (!relatedProduct) {
    return res.status(404).json({
      message: "Product not found!",
    });
  }

  const count = await Product.countDocuments({
    category: relatedProduct.category,
    _id: { $ne: relatedProduct._id },
  });

  const query = Product.find({
    category: relatedProduct.category,
    _id: { $ne: relatedProduct._id },
  })
    .select("-photo")
    .populate("category", "name")
    .sort([[sortBy, order]])
    .limit(limit * 1)
    .skip((page - 1) * limit);

  query.exec(function (error, products) {
    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
    res.json({
      total_elements: count,
      total_pages: Math.ceil(count / limit),
      current_page: +page,
      products,
    });
  });
};

exports.searchProduct = async (req, res) => {
  let { sortBy = "_id", order = "asc", limit = 6, page = 1 } = req.query;
  let newFilters = {};
  const filters = req.body.filters;

  if (Object.keys(filters).length > 0) {
    for (let filter in filters) {
      if (filter === "price") {
        newFilters[filter] = {
          $gte: filters[filter][0],
          $lte: filters[filter][1],
        };
      } else {
        newFilters[filter] = filters[filter];
      }
    }
  }

  const count = await Product.countDocuments(newFilters);

  const query = Product.find(newFilters)
    .select("-photo")
    .populate("category", "name")
    .sort([[sortBy, order]])
    .limit(limit * 1)
    .skip((page - 1) * limit);

  query.exec(function (error, products) {
    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
    res.json({
      total_elements: count,
      total_pages: Math.ceil(count / limit),
      current_page: +page,
      products,
    });
  });
};


exports.photoProduct = async(req, res) => {
    const { productId } = req.params;
    const {photo} = await Product.findById(productId);

    if(photo.data) {
        res.set('Content-Type', photo.contentType);
        res.send(photo.data);
    } else {
        return res.status(404).json({
            message: "Photo not found",
        });
    };
};