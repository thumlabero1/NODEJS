const EventEmitter = require('events');
const chatEmitter = new EventEmitter();
const fs = require('fs')
const express = require('express')
const app = express();
const http = require('http')
const querystring = require('querystring')
const port = process.env.PORT || 1337
const onMessage = msg => res.write(`data: ${msg}\n\n`)

chatEmitter.on('message', onMessage)
const server = http.createServer(function (req, res) { if (req.url === '/') return respondText(req, res)
if (req.url === '/json') return respondJson(req, res)

if (req.url.match(/^\/echo/)) return respondEcho(req, res)

if (req.url.match(/^\/static/)) return respondStatic(req, res)

respondNotFound(req, res)

})


function respondText (req, res) { res.setHeader('Content-Type', 'text/plain')
res.end('hi')

}

function respondJson (req, res) {

res.setHeader('Content-Type', 'application/json')

res.end(JSON.stringify({ text: 'hi', numbers: [1, 2, 3] }))

}

function respondEcho (req, res) {

const { input = '' } = querystring.parse(

req.url

.split('?')

.slice(1)

.join('')

)

res.setHeader('Content-Type', 'application/json')

res.end(

JSON.stringify({

normal: input,

shouty: input.toUpperCase(),

characterCount: input.length,
backwards: input

.split('')

.reverse()

.join('')

})

)

}

function respondStatic (req, res) {

const filename = `${__dirname}/public${req.url.split('/static')[1]}`
fs.createReadStream(filename)
.on('error', () => respondNotFound(req, res))

.pipe(res)

}

function respondNotFound (req, res) {

res.writeHead(404, { 'Content-Type': 'text/plain' })

res.end('Not Found')

}
function respondSSE (req, res) {

    res.writeHead(200, {
    
    'Content-Type': 'text/event-stream',
    
    'Connection': 'keep-alive'
    
    })
    
    const onMessage = msg => res.write(`data: ${msg}\n\n`)
    
    chatEmitter.on('message', onMessage)
    
    res.on('close', function () {
    
    chatEmitter.off('message', onMessage)
    
    })
    
    }
    
    
    
    function respondChat (req, res) {

        const { message } = req.query
        
        chatEmitter.emit('message', message)
        
        res.end()
        
        }
app.get('/', respondText)

app.get('/json', respondJson)

app.get('/echo', respondEcho)

app.get('/static/*', respondStatic)
app.get('/chat',respondChat)
app.get('/sse',respondSSE)
app.listen(port, () => console.log(`Server listening on port ${port}`))



chatEmitter.on('message', console.log);