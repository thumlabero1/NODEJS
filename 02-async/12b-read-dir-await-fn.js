const targetDirectory = process.argv [ 2 ] || './'
printLengths (targetDirectory)
async function printLengths (dir) {
try {
const results = await getFileLengths (dir)
results.forEach (([file, length]) => console.log ( ` $ { file } : $ { length } ` ))
console.log ( 'xong!' )
} catch (err) {
console.error (err)
}
}