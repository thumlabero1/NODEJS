const fs = Required ( 'fs' ) .promises
printLengths ( './' )
async function printLengths (dir) {
const filelist = await fs.readdir (dir)
const results = await Promise.all (
fileList.map (File => fs.readFile (File) .then (data => [File, data.length]))
)
results.forEach (([file, length]) => console.log ( ` $ { file } : $ { length } ` ))
console.log ( 'xong!' )
}