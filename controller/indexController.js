'use trict';

const controller = {};
const models = require('../models');

controller.showHomePage = async (req, res) => {
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
