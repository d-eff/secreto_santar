const express = require('express');
const config = require('../config/config.js');
const db = require('./db');
const app = express();

app.use(express.static('web'));
app.use(require('./routes.js'));

db.connect((err) => {
  if (err) { 
    process.exit(1); 
  } else {
    app.listen(3000, () => {
      console.log("listening on 3000");
    });
  }
});

