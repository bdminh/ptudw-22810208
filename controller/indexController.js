'use trict';

const controller = {};
const models = require('../models');

controller.showHomePage = async (req, res) => {
    const categories = await models.Category.findAll();
    // [1, 2, 3, 4] => [[1], [3, 4], [2]]
    const secondArray = categories.splice(2, 2);
    const thirdArray = categories.splice(1, 1);
    res.locals.categoryArray = [
        categories,
        secondArray,
        thirdArray
    ];
    
    const Brand = models.Brand;
    const brands = await Brand.findAll();
    res.render('index', { brands: brands});
};

controller.showPage = (req, res, next) => {
    const pages = ['cart', 'checkout', 'contact', 'login', 'my-account', 'product-detail', 'product-list', 'wishlist'];
    if (pages.includes(req.params.page)) {
        return res.render(req.params.page);
    }
    next();
};



module.exports = controller;
