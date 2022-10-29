var http = require('http'); // Import Node.js core module
const { exec } = require('child_process');

var server = http.createServer(function (req, res) {   //create web server
    
    const headers = {
        'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
      };


    if (req.url == "/sendtx") {
        exec('cargo test', {
            cwd: '/Users/meir/Desktop/ETHLisbon22/contracts'
          }, function(error, stdout, stderr) {
            console.log("RES", error, stdout, stderr);
            res.writeHead(200, headers)
            res.write('<html><body><p>This is student Page.</p></body></html>');
            res.end();
          });
    }
    else
        res.end('Invalid Request!');

});

server.listen(5005); //6 - listen for any incoming requests

console.log('Node.js web server at port 5005 is running..')