const http = require('http')
//const function = require('./fibonacci')
const fibonacci = require('./fibonacci')


http.createServer((request, response) => 
    {const {url, method} = request;
    console.log('Access-Log', method, url);
    if (url == '/') 
        {response.writeHead(200);
response.end(JSON.stringify(fibonacci(100)));
}   
    response.writeHead(404, {'Content-Type': 'text/plain'});   
response.end('Page does not exist.')})
.listen(9615);



