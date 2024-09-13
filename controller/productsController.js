let controller = {};
const models = require('../models');

controller.show = async (req, res) => {
    let category = isNaN(req.query.category) ? 0 : parseInt(req.query.category);
    let brand = isNaN(req.query.brand) ? 0 : parseInt(req.query.brand);

    let categories = await models.Category.findAll({
        include: [{
            model: models.Product
        }]
    });
    res.locals.categories = categories;

    let brands = await models.Brand.findAll({
        include: [{
            model: models.Product
        }]
    });
    res.locals.brands = brands;

    let options = {
        attributes: ['id', 'name', 'imagePath', 'stars', 'price', 'oldPrice'],
        where: {}
    }
    if (category > 0) {
        options.where.categoryId = category;
    }
    if (brand > 0) {
        options.where.brandId = brand;
    }

    let products = await models.Product.findAll(options);
    res.locals.products = products;
    res.render('product-list');
};

module.exports = controller;