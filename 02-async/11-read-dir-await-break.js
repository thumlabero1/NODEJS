const fs = require('fs').promises
printLengths ( './' )
async function printLengths(dir) {
const filelist = await fs.readdir (dir)
const results = filelist.map (
async file => await fs.readFile (file) .then (data => [file, data.length])
)
results.forEach (result => console.log ( ` $ { result [ 0 ] } : $ { result [ 1 ] } ` ))
console.log ( 'xong!' )
}