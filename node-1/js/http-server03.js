let http = require('http');
// console.log(http);
var i = 0;
let server = http.createServer((req, res) => {
    // console.log(req);
    i++;
    // res.write(22222222);
    res.end("node http-server123123"+i );
    
    console.log('A');
})
console.log('B');
server.listen(5000);