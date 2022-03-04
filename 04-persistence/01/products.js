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