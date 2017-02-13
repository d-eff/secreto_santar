const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const config = require('../config/config.js');
const app = express();

MongoClient.connect(config.mongoURL, function(err, db) {
  if (err) return console.log(err);
  console.log("connected to db");

  db.close();
});

app.use(require('./routes.js'));

app.listen(3000, () => {
  console.log(__dirname);
  console.log("listening on 3000");
});
