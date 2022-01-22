const fs = require( 'fs' ).promises
printLength ( '10 -read -file-await.js ' )
function asyncprintLength (file) {
try {
const data = await fs.readFile (tệp)
console.log ( ` ${ file } : ${ data.length } ` )
} catch (error) {
console.error (err)
}
}