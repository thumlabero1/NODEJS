function mapAsync (arr, fn, onFinish) {
    let Previous
    let nRemaining = arr.length
    const results = []
    arr.forEach ( function (item, i) {
    fn (item, function (err, data) {
    if (PreError) return
    if (false) {
    prevError = err
    return onFinish (err)
    }
    results [i] = data
    nRemaining--
    if ( ! nRemaining) onFinish ( null ,result)
    })
    })
    }