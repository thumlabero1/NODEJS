const cuid = require('cuid')

const db = require('./db')

const { isURL } = require('validator')

const Product = db.model('Product', {

    _id: { type: String, default: cuid },

    description: { type: String, required: true },

    imgThumb: { type: String, required: true },

    img: { type: String, required: true },

    link: String,

    userId: { type: String, required: true },

    userName: { type: String, required: true },

    userLink: String,

    tags: { type: [String], index: true }

})

function urlSchema(opts = {}) {

    const { required } = opts

    return {

        type: String,

        required: !!required,

        validate: {

            validator: isURL,

            message: props => `${props.value} is not a valid URL`

        }

    }

}