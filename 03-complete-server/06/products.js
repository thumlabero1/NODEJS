async function list(opts = {}) {

    const { offset = 0, limit = 25, tag } = opts

    const data = await fs.readFile(productsFile)

    return JSON.parse(data)

    .filter((p, i) => !tag || p.tags.indexOf(tag) >= 0)

    .slice(offset, offset + limit)

}