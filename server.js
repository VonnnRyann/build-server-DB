const http = require('http')

const server = http.createServer(function(req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello!!!!')
})

server.listen(5000, () => {
    console.log('Server is running at 5000');
});