/**
 * Created by john on 11/17/16.
 */

var async = require('async');
var net = require('net');

hosts = { 'msn.com': '444', 'google.com': '443', 'yahoo.com': '81' };

var timeout;

async.eachOfSeries(hosts, function (port, host, callback) {
    client = new net.Socket;

    timeout = client.setTimeout(1000, function () {
        console.log("Timeout has occurred")
    });

    client.connect(port, host, function () {
        clearTimeout(timeout);
        console.log('Connected to  ' + host + " on port " + port);
        client.destroy();
        callback();
    }).on('timeout', function () {
        console.log('client has timed out');
        client.destroy();
        callback();
    });
});



