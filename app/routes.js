const express = require('express');
const router = express.Router();
const db = require('./db.js');

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/web/index.html');
});

router.get('/api/gifts', (req, res) => {
  var collection = db.get().collection('Gifts');  
  collection.find({}).toArray(function(err, docs) {
    if (!err) {
      res.send(docs);
    }
  });
});

module.exports = router;