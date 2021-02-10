const http = require("http")

const server = http.createServer((req, res)=> {
    res.statusCode = 200
    res.setHeader("Content-Type","text/html")
    res.write(`<h1>Hello, World The current time is ${new Date()}</h1>`)
    res.end()
})
server.listen(8080, ()=>{
    console.log("server started at http://localhost:8080")
})