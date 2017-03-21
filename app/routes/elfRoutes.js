const express = require('express');
const router = express.Router();
const Elf = require('../models/elfModel.js');

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

module.exports = router;