let county = 0

setInterval(() => console.log(`${++county} mississippi`), 1000)

setTimeoutSync(5500)

console.log('hello from the past!')

process.exit()

function setTimeoutSync (ms) {

const t0 = Date.now()

while (Date.now() - t0 < ms) {}

}
