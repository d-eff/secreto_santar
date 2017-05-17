const express = require('express');
const router = express.Router();
const Year = require('../models/yearModel.js');

router.get('/api/years', (req, res) => {
  Year.find((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    }
  });
});

router.post('/api/year', (req, res) => {
  new Year({
    year: req.body.year,
    gifts: [],
    players: req.body.players
    //add year to each players years array
  }).save((err) => {
    if (err) {
      console.log(err);
      req.sendStatus(500);
    } else {
      req.sendStatus(200);
    }
  });
});

module.exports = router;