const express = require('express')
const expressSession = require('express-session')
const app = express()
const passport = require('passport')
const LocalStratgy = require('passport-local').Strategy;

const sessionSecret = process.env.SESSION_SECRET || 'mark it zero'
const adminPassword = process.env.ADMIN_PASSWORD || 'iamthewalrus'
passport.use(

    new Strategy(function(username, password, cb) {

        const isAdmin = (username === 'admin') && (password === adminPassword)

        if (isAdmin) cb(null, { username: 'admin' })

        cb(null, false)

    })

)
passport.serializeUser((user, cb) => cb(null, user))

passport.deserializeUser((user, cb) => cb(null, user))
app.use(cookieParser())

app.use(

    expressSession({

        secret: sessionSecret,

        resave: false,

        saveUninitialized: false

    })

)
app.post('/login', passport.authenticate('local'), (req, res) => res.json({ success: true })

)

app.post('/products', ensureAdmin, api.createProduct)

app.put('/products/:id', ensureAdmin, api.editProduct)

app.delete('/products/:id', ensureAdmin, api.deleteProduct)

app.get('/orders', ensureAdmin, api.listOrders)

app.post('/orders', ensureAdmin, api.createOrder)

function ensureAdmin(req, res, next) {

    const isAdmin = req.user && req.user.username === 'admin'
    if (isAdmin) return next()

    res.status(401).json({ error: 'Unauthorized' })

}
app.use(passport.initialize());
app.use(passport.session());