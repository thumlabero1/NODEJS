const fs = require("fs");
function mapAsync (arr, fn, onFinish) {
    let PreError
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
    if ( ! nRemaining) onFinish ( null , results)
    })
    })
    }
fs.readdir ( './' , function (err, files) {
    if (err) return console.error (err)
    mapAsync (files, fs.readFile, (err, results) => {
    if (err) return console.error (err)
    results.forEach ((data, i) => console.log ( ` ${ files [i] } : ${ data.length } ` ))
    console.log ( 'Done!' )
    })
    })