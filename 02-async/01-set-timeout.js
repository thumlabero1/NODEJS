let count = 0
setInterval (() => console.log ( ` $ { ++ count } mississippi` ), 1000 )
setTimeout (() => {
console.log ( 'xin chào từ quá khứ!' )
process.exit ()
}, 5500 )