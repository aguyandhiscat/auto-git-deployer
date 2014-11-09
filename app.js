// Auto deployment
var http = require("http");
var querystring = require('querystring');

var exec = require('child_process').exec;

var git_dir = "/home/mmcconfe/node-apps/mmc";

function doDeploy() {
    exec("cd "+git_dir+" && git pull");
}

var server = http.createServer(function(req, res) {
    var data = "";

    req.on("data", function(chunk) {
        data += chunk;
    });
    req.on("end", function() {
        var decodedBody = querystring.parse(data);
        decodedBody = JSON.parse(decodedBody.payload);
        
        if(decodedBody && decodedBody.repository) {
            doDeploy();

            res.end("");
        }
    });
});
server.listen(3000);