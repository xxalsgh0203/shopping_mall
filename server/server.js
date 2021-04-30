const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
    console.log('listening on 8080')
});

// app.use(express.static(path.join(__dirname, 'public'))); // 미들웨어. html css js img 파일 담긴곳 명시 (__dirname:현재경로 안에 public 폴더의 static 파일을 사용하겠다)
app.use(express.static(path.join(__dirname, 'shoppingmall_app/build'))); 

app.get('/', function(request, response){
    response.sendFile( path.join(__dirname, 'shoppingmall_app/build/index.html')) // '/' 로 접속하면 main.html 갖다줌
})

app.get('*', function(request, response){
    response.sendFile( path.join(__dirname, 'shoppingmall_app/build/index.html')) // '/' 로 접속하면 main.html 갖다줌
})