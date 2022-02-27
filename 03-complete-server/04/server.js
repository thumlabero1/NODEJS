const express = require('express')

const api = require('./api')

const port = process.env.PORT || 1337

const app = express()

app.get('/Products',
    async function listProducts(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        const { offset = 0, limit = 25, tag } = req.query

        try {

            res.json(await Products.list({

                offset: Number(offset),

                limit: Number(limit),

                tag

            }))

        } catch (err) {

            res.status(500).json({ error: err.message })

        }

    })

app.listen(port, () => console.log(`Server listening on port ${port}`))