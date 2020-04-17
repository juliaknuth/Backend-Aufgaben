const http = require('http')

const server = http.createServer()
server.listen(7513)
server.on('request', (req, res) => {
    const {url} = req
   

    if (url == '/andreas') {
        res.end(`Hallo Andreas`)
    } else if (url == '/') {
        res.end("Hallo ihr Lieben! Naaaaaa")
    } else {
        res.end(`Hallo ${url}`)
    }
})