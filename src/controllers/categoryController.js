// LIBS
const _ = require('lodash');

// Models
const Category = require('../models/category');

exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((error, category) => {
        if(error) {
            return res.status(400).json({
                error: error.message,
            });
        };
        res.json(category);
    });
};

exports.updateCategory = (req, res) => {
    const { categoryId } = req.params;
    Category.findById(categoryId).exec((error, category) => {
        if(error || !category) {
            return res.status(404).json({
                error: "Category not found."
            });
        };
        let newCategory = category;
        newCategory = _.extend(newCategory, req.body);

        newCategory.save((error, result) => {
            if(error) {
                return res.status(400).json({
                    error: error.message,
                });
            };
            res.json(result);
        });
    });
};

exports.getCategories = async(req, res) => {
    let { sortBy='_id', order='asc', limit = 2, page = 1 } = req.query;

    const count = await Category.countDocuments();

    const query = Category.find({})
        .sort([[sortBy, order]])
        .limit(limit * 1)
        .skip((page - 1) * limit);

    query.exec(function (error, categories) {
        if(error) {
            return res.status(400).json({
                error: error.message,
            });
        };
        res.json({
            total_elements: count,
            total_pages: Math.ceil(count / limit),
            current_page: +page,
            categories,
        });
    });
};

exports.getCategory = (req, res) => {

    const { categoryId } = req.params;

    Category.findById(categoryId).exec((error, category) => {
        if(error || !category) {
            return res.status(404).json({
                error: "Category not found."
            });
        };
        res.json(category);
    });
};

exports.deleteCategory = (req, res) => {
    const { categoryId } = req.params;
    Category.findOneAndRemove(categoryId).exec((error, category) => {
        if(error || !category) {
            return res.status(404).json({
                error: "Category not found."
            });
        };
        res.status(204).json({});
    });
};