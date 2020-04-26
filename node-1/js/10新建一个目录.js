let http = require('http');
let fs = require('fs');
// console.log(fs)
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return;
    }
    // 给用户模拟一个id
    var userid = parseInt(Math.random() * 89999) + 10000;
    //fs.mkdir()表示新建文件夹
    fs.mkdir('./test/' + userid);
    


fs.mkdir('./test/creatdirrr/'+userid, 0777, function(err){

 if(err){

  console.log(err);

 }else{

  console.log("creat done!");

 }

})
    res.end("success");
}).listen(3000);