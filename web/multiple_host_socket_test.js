/**
 * Created by john on 11/17/16.
 */
net = require('net');
var eachOfSeries = require('async/eachOfSeries');

client = new net.Socket;
hosts = {'google.com': '443'};



eachOfSeries(hosts, function(port,host,callback) {
    client.connect(port, host, function() {
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



