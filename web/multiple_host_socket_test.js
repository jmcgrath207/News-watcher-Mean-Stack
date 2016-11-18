/**
 * Created by john on 11/17/16.
 */
net = require('net');
async = require("async");

client = new net.Socket;
hosts = ['google.com','yahoo.com',''];



async.eachSeries(hosts, function(host,callback) {
    client.connect(443, host, function() {
        console.log('Connected to : ' + host);
        client.destroy();
        callback()
    });
});


client.setTimeout(1000, function () {
    console.log("Timeout has occurred")
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    client.destroy(); // kill client after server's response
});

client.on('timeout', function() {
    console.log('client has timed out');
    client.destroy(); // kill client after server's response
});

client.on('close', function() {
    console.log('Connection closed');
});

client.on('error', function (err) {
    console.log('there was a error' + err);
    client.destroy(); // kill client after server's response

});



