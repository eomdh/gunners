/* 
    node.js / express 를 사용하여 server 구축
    netlify 서버를 사용하여 호스팅하였기 때문에 server.js 로 구동하지 않음 
    (server.js로 구동하기 위해서는 css, js, img 경로 변경 해야함)
*/

const express = require('express');
const server = express();

// 3000 포트로 서버 실행 
server.listen(3000, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("The server is listening on port 3000")
});

// middleware
server.use(express.static(__dirname + "/public"))

// html page 전송
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

server.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
})

server.get("/legend", (req, res) => {
    res.sendFile(__dirname + "/legend.html");
})

server.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/gallery.html");
})

server.use((req, res) => {
    res.sendFile(__dirname + "/404.html")
})