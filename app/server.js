const express = require('express');
const config = require('../config/config.js');
const bodyParser = require('body-parser');
// const db = require('./db');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('web'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./routes.js'));

mongoose.connect(config.mongoURL, (err, db) => {
        if (err) return cb(err);

  if (err) { 
    process.exit(1); 
  } else {
    app.listen(3000, () => {
      console.log("listening on 3000");
    });
  }
});

