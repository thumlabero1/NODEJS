const express = require('express')

const api = require('./api')

const port = process.env.PORT || 1337

const app = express()

const middleware = require('./middleware')

app.use(middleware.cors)

app.get('/products', api.listProducts)

app.get('/products/:id', api.getProduct)

app.use(middleware.handleError)

app.use(middleware.notFound)
app.post('/products', api.createProduct)
const server = app.listen(port, () => console.log(`Server listening on port ${port}`))