const fs = require ('fs');
const http = require('http');
const { Server } = require('tls');

const hostName = '127.0.0.1';
const home = fs.readFileSync('index.html');

const port = 3000;

const server = http.createServer((req,res)=>{

    res.statusCode = 200;
    // res.setHeader('Content-Type','');
    res.end(home);

});

server.listen(port,hostName,()=>{
    console.log(`Server running at http://${hostName}:${port}/`);
});