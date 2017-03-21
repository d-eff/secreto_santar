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

module.exports = router;