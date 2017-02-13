const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/web/index.html');
});

app.listen(3000, function() {
  console.log(__dirname);
  console.log("listening on 3000");
});
