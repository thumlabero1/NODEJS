const express = require('express')

const bodyParser = require('body-parser')

const pinoLogger = require('express-pino-logger')

const cookieParser = require('cookie-parser')

const api = require('./api')

const auth = require('./auth')

const middleware = require('./middleware')

const port = process.env.PORT || 1337

const app = express()

app.use(pinoLogger())

app.use(middleware.cors)

app.use(bodyParser.json())

app.use(cookieParser())

app.get('/health', api.checkHealth)