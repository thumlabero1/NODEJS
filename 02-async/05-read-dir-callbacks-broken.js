const fs = require('fs');
const seconds = [5, 2];

fs.readdir('./', (err, files) => {

if (err) return console.error(err)

files.forEach(function (file) {

fs.readFile(file, (err, fileData) => {

if (err) return console.error(err)

console.log(`${file}: ${fileData.length}`)

})

})

seconds.forEach(s => {

    setTimeout(() => console.log(`Waited ${s} seconds`), 1000 * s)
    console.log('done!');
    })
    
    

})