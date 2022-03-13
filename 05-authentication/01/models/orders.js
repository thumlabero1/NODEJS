const cuid = require('cuid')
const db = require('../../../04-persistence/03/db')

const { isEmail } = require('validator')



const Order = db.model('Order', {

    _id: { type: String, default: cuid },

    buyerEmail: EmailSchema({ required: true }),

    products: [

        {

            type: String,

            ref: 'Product',

            index: true,

            required: true

        }

    ],

    status: {

        type: String,

        index: true,

        default: 'CREATED',

        enum: ['CREATED', 'PENDING', 'COMPLETED']

    }

})

async function get(_id) {

    const order = await Order.findById(_id)

    .populate('products')

    .exec()

    return order

}