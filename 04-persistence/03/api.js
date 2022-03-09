const Products = require('./products')
async function getProduct(req, res, next) {
    const { id } = req.params

    const product = await Products.get(id)

    if (!product) return next()

    res.json(product)

}

async function listProducts(req, res) {

    const { offset = 0, limit = 25, tag } = req.query

    const products = await Products.list({

        offset: Number(offset),

        limit: Number(limit),

        tag

    })

    res.json(products)

}
async function createProduct(req, res, next) {
    const product = await Products.create(req.body)
    res.json(product)

}
async function editProduct(req, res, next) {

    //console.log(req.body)

    res.json(req.body)

}
async function deleteProduct(req, res, next) {
    res.json({ success: true })

}
module.exports = {

    getProduct,

    listProducts,
    createProduct,
    editProduct,
    deleteProduct
}
async function createOrder(req, res, next) {
    const order = await Orders.create(req.body)
    res.json(order)
}

async function listOrders(req, res, next) {

    const { offset = 0, limit = 25, productId, status } = req.query

    const orders = await Orders.list({

        offset: Number(offset),

        limit: Number(limit),

        productId,

        status

    })
    res.json(orders)

}