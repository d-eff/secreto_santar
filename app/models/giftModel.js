const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const gift = new Schema({
    name: String,
    year: Number,
    year_id: Schema.Types.ObjectId,
    from: String,
    from_id: Schema.Types.ObjectId,
    to: String,
    to_id: Schema.Types.ObjectId
});

module.exports = mongoose.model('Gift', gift, 'Gifts');