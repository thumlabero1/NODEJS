const express = require('express')

const bodyParser = require('body-parser')

const api = require('./api')

const middleware = require('./middleware')

const port = process.env.PORT || 1337

const app = express()
app.use(middleware.cors)

app.use(bodyParser.json())

app.get('/products', api.listProducts)

app.post('/products', api.createProduct)
const server = app.listen(port, () => console.log(`Server listening on port ${port}`))