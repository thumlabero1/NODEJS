const express = require('express')

const api = require('./api-02')

const port = process.env.PORT || 1337

const app = express()

const middleware = require('./middleware')

app.use(middleware.cors)

app.get('/products', api.listProducts)

app.get('/products/:id', api.getProduct)

app.use(middleware.handleError)

app.use(middleware.notFound)
const server = app.listen(port, () => console.log(`Server listening on port ${port}`))