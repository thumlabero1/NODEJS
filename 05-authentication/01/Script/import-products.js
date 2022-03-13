const db = require('../db')

const Products = require('../models/products')

const products = require('../products')

;
(async function() {

    for (var i = 0; i < products.length; i++) {
        console.log(await Products.create(products[i]))
    }

    db.disconnect()

})()