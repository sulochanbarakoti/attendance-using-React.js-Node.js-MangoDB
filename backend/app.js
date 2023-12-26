const { error } = require('console')
const http = require('http')


var server = http.createServer((req,res)=>{
    console.log(res)
})

server.listen(4000, (req,res)=>{
    console.log('Server started at 4000')
})