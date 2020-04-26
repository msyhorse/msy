let http = require('http');
let fs = require('fs');
http.createServer((req, res) => {
    // 给用户模拟一个id
    var userid = parseInt(Math.random() * 89999) + 10000;
    console.log("欢迎ID为" + userid + "的用户");
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    fs.writeFile('./home.html', function(err, data) {
        if (err) {
            console.log(333333333);
            throw err;
        }
        console.log(userid + "读取完毕");
        res.end(data);
    },function (err) {
        if (err) console.error(err);
        console.log('数据写入的数据');
        console.log('-------------------');
    })

    res.end();
}).listen(5000);