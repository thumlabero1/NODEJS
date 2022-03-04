async function create(fields) {

    const product = await new Product(fields).save()

    return product

}
module.exports = {

    get,

    list,

    create

}