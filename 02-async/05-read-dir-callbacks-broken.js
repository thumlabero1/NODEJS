const seconds = [ 5 , 2 ]
seconds.forEach (s => {
setTimeout (() => console.log ( `Đã đợi $ { s } giây` ), 1000 * s)
})
console.log ( 'xong!' )