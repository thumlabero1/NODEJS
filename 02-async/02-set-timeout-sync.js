let count = 0
setInterval (() => console.log ( ` $ { ++ count } mississippi` ), 1000 )
setTimeoutSync ( 5500 )
console.log ( 'xin chào từ quá khứ!' )
process.exit ()
function setTimeoutSync (milisecond) {
const t0 = Date.now ()
while ( Date.now () - t0 < ms) {}
}