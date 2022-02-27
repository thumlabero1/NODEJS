const express = require('express')

const api = require('./api-01')

const port = process.env.PORT || 1337

const app = express()

app.get('/products', api.listProducts)

app.get('/products/:id', api.getProduct)

const server = app.listen(port, () => console.log(`Server listening on port ${port}`))