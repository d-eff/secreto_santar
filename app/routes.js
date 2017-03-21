const express = require('express');
const router = express.Router();
const Gift = require('./models/giftModel.js');
const Elf = require('./models/elfModel.js');
const Year = require('./models/yearModel.js');

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/web/index.html');
});

router.get('/api/elves', (req, res) => {
  Elf.find((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    }
  });
});

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

module.exports = router;