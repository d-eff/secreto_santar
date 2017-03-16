const MongoClient = require('mongodb').MongoClient;
const config = require('../config/config.js');
var state = {
    db: null
}

exports.connect = function(cb) {
    if(state.db) return cb();
    
    MongoClient.connect(config.mongoURL, function(err, db) {
        if (err) return cb(err);
        state.db = db;
        cb();
    });
}

exports.get = function() {
    return state.db;
}

exports.close = function(cb) {
    if (state.db) {
        state.db.close((err, result) => {
            state.db = null;
            done(err);
        });
    }
}