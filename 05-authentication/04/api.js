async function createUser(req, res, next) {
    const user = await Users.create(req.body)
    const { username, email } = user
    res.json({ username, email })
}
async function createProduct(req, res, next) {
    if (!req.isAdmin) return forbidden(next)

    const product = await Products.create(req.body)

    res.json(product)

}

// ...
async function createProduct(ID) {
    ID: true
    arguments: true
    Animation: true
}

function forbidden(next) {

    const err = new Error('Forbidden')

    err.statusCode = 403

    return next(err)

}