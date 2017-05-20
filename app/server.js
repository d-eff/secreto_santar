const express = require('express');
const config = require('../config/config.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'web')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes.js'));
app.use(require('./routes/playerRoutes.js'));
app.use(require('./routes/giftRoutes.js'));
app.use(require('./routes/yearRoutes.js'));

mongoose.connect(config.mongoURL, (err, db) => {
  if (err) { 
    console.log("app going down on boot. is mongo running?");
    process.exit(1); 
  } else {
    app.listen(3000, () => {
      console.log("listening on 3000");
    });
  }
});

