const mongoose = require('mongoose')
      Schema = mongoose.Schema;

const year = new Schema({
    year: String,
    gifts: [Schema.Types.ObjectId],
    players: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Year', year, 'Years');