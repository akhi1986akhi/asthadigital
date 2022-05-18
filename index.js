const express = require('express');
const app = express();
var fs = require('fs');
const http =require('http');
const home = fs.readFileSync('index.html','utf-8');
const about = fs.readFileSync('./about.html','utf-8');
const services = fs.readFileSync('./services.html','utf-8');
const contact = fs.readFileSync('./contact.html','utf-8');
const hostname = '159.223.224.249';
const portname = process.env.PORT || 3000;

// var file = fs.readFileSync('index.html', 'utf-8');
app.get('/',function(req,res){
    res.end("Hellow this is first page of digital ocean page");
})
// const  server = http.createServer(function(req, res){
//     console.log(req.url);
//     url = req.url;
//     res.writeHead(200, {'Content-Type':'text/html'});
//     if(url== '/'){
//         res.end(home);
//     }
//     else if(url =='/about'){
//         res.end(about);

//     }
//     else if(url =='/services'){
//         res.end(services);

//     }
//     else if(url =='/contact'){
//         res.end(contact);

//     }
//     else{
//         res.statusCode = 404;
//         res.end("<h1>404 Not found!/h1>")
//     }
//     // res.end(home);
// });
// server.listen(portname);
// console.log(`Server running at http://${hostname}:${portname}/`);

app.listen(portname,()=>{
    console.log(`Applicatio started successfully on port ${portname}`);
});