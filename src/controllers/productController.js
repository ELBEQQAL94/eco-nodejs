// Libs
const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');

// utils
const {validateImageType, validateProduct} = require('../utils');

// Models
const Product = require('../models/Product');

exports.createProduct = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: err.message,
            });
        };
        let product = new Product(fields);
        if(files.photo) {
            if(files.photo.size > Math.pow(10, 6)) {
                return res.status(400).json({
                    error: 'Photo should be less than 1mb.',
                });
            };

            // check type
            let isValidImageType = validateImageType(files);

            if(!isValidImageType) {
                return res.status(400).json({
                    error: 'Photo should be valid type.',
                });
            };

            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        };

        const schema = validateProduct();

        const { error } = schema.validate(fields);

        if(error) {
            return res.status(400).json({
                error: error.details[0].message,
            });
        };

        product.save((err, product) => {
            if(err) {
                return res.status(400).json({
                    error: err.message,
                });
            };
            res.json(product);
        });
    });
};

exports.getProducts = async(req, res) => {
    let { sortBy='_id', order='asc', limit = 6, page = 1 } = req.query;

    const count = await Product.countDocuments();
    
    const query = Product.find({})
        .select('-photo')
        .sort([[sortBy, order]])
        .limit(limit * 1)
        .skip((page - 1) * limit);

    query.exec(function (error, products) {
        if(error) {
            return res.status(400).json({
                error: error.message,
            });
        };
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
        if(error || !product) {
            return res.status(404).json({
                error: "Product not found."
            });
        };
        product.photo = undefined;
        res.json(product);
    });
};

exports.deleteProduct = (req, res) => {
    const { productId } = req.params;
    Product.findOneAndRemove(productId).exec((error, product) => {
        if(error || !product) {
            return res.status(404).json({
                error: "Product not found."
            });
        };
        res.status(204).json({});
    });
};

exports.updateProduct = (req, res) => {

    const { productId } = req.params;

    Product.findById(productId).exec((error, product) => {
        if(error || !product) {
            return res.status(404).json({
                error: "Product not found."
            });
        };
        
        let form = new formidable.IncomingForm();
        form.keepExtensions = true;

        form.parse(req, (err, fields, files) => {

            if(err) {
                return res.status(400).json({
                    error: err.message,
                });
            };

            let newProduct = product;
            newProduct = _.extend(newProduct, fields);

            if(files.photo) {
                if(files.photo.size > Math.pow(10, 6)) {
                    return res.status(400).json({
                        error: 'Photo should be less than 1mb.',
                    });
                };
    
                // check type
                let isValidImageType = validateImageType(files);
    
                if(!isValidImageType) {
                    return res.status(400).json({
                        error: 'Photo should be valid type.',
                    });
                };
    
                newProduct.photo.data = fs.readFileSync(files.photo.path);
                newProduct.photo.contentType = files.photo.type;
            };
    
            const schema = validateProduct();
    
            const { error } = schema.validate(fields);
    
            if(error) {
                return res.status(400).json({
                    error: error.details[0].message,
                });
            };
    
            newProduct.save((err, result) => {
                if(err) {
                    return res.status(400).json({
                        error: err.message,
                    });
                };
                res.json(result);
            });
        });
    });
};