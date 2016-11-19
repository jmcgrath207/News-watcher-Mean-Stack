/**
 * Created by john on 11/18/16.
 */


(function() {
    var EventEmitter = require('events').EventEmitter;
    var inspect = require('util').inspect;
    var emit_ = EventEmitter.prototype.emit;
    EventEmitter.prototype.emit = function(name) {
        var args = Array.prototype.slice.call(arguments);
        if (!(this === process.stderr && name === 'drain')) {
            console.error("Event '%s', arguments: %s",
                name, inspect(args.slice(1), false, 1));
        }
        return emit_.apply(this, args);
    };
})();