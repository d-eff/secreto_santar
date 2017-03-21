const express = require('express');
const router = express.Router();
const Gift = require('./models/gift.js');

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/web/index.html');
});

router.get('/api/gifts', (req, res) => {
  Gift.find((err, threads) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(threads);
    }
  });
});

router.post('/api/gift', (req, res) => {
  console.log(req.body);
  new Gift({
    name: req.body.name,
    year: req.body.year,
    year_id: req.body.year_id,
    from: req.body.from,
    from_id: req.body.from_id,
    to: req.body.to,
    to_id: req.body.to_id
  }).save((err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else { 
      res.sendStatus(200);
    }
  }); 
});

// router.get('/api/elves', (req, res) => {
//   var collection = db.get().collection('Players');
//   collection.find({}).toArray(function(err, docs) {
//     if (!err) {
//       // res.send(docs);
//       res.setHeader('Content-Type', 'application/json');
//       res.json(docs);
//     }
//   });
// });

// router.get('/api/years', (req, res) => {
//   var collection = db.get().collection('Years');
//   collection.find({}).toArray(function(err, docs) {
//     if (!err) {
//       // res.send(docs);
//       res.setHeader('Content-Type', 'application/json');
//       res.json(docs);
//     }
//   });
// });

module.exports = router;