const express = require('express')

const bodyParser = require('body-parser')

const api = require('./api')

const middleware = require('./middleware')

const orders = require('./models/orders')

const port = process.env.PORT || 1337

const app = express()
app.use(middleware.cors)

app.use(bodyParser.json())

app.get('/products', api.listProducts)

app.post('/products', api.createProduct)

app.get('/orders', api.listOrders)

app.post('/orders', api.createOrder)

const server = app.listen(port, () => console.log(`Server listening on port ${port}`))