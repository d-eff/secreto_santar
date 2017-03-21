const express = require('express');
const router = express.Router();
const Gift = require('../models/giftModel.js');

router.get('/api/gifts', (req, res) => {
  Gift.find((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
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

module.exports = router;