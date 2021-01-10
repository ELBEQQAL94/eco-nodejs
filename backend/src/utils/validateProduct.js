const Joi = require('joi');

function validateProduct() {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string(),
        imageUrl: Joi.string(),
        price: Joi.number(),
        quantity: Joi.number(),
        category: Joi.string().required(),
    });

    return schema;
};

module.exports = validateProduct;