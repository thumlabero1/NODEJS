const cuid = require('cuid')

const db = require('./db')

const Product = db.model('Product', {

    _id: { type: String, default: cuid },

    description: String,

    imgThumb: String,

    img: String,

    link: String,

    userId: String,

    userName: String,

    userLink: String,

    tags: { type: [String], index: true }

})
async function create(fields) {

    const product = await new Product(fields).save()

    return product

}
module.exports = {

    get,

    list,

    create

}
async function list(opts = {}) {

    const { offset = 0, limit = 25, tag } = opts

    const query = tag ? { tags: tag } : {}

    const products = await Product.find(query)

    .sort({ _id: 1 })

    .skip(offset)

    .limit(limit)
    return products

}
async function get(_id) {

    const product = await Product.findById(_id)

    return product

}
async function remove(_id) {

    await Product.deleteOne({ _id })

}