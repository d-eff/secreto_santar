const express = require('express');
const router = express.Router();
const Player = require('../models/playerModel.js');

router.get('/api/players', (req, res) => {
  Player.find((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    }
  });
});

router.post('/api/player', (req, res) => {
  new Player({
    name: req.body.name,
    email: req.body.email,
    gifts_given: [],
    gifts_received: [],
    likes: [],
    badges: []
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