async function checkHealth(req, res, next) {
    await db.checkHealth()

    res.json({ status: 'OK' })

}