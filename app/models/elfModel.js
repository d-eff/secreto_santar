const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const elf = new Schema({
    name: String,
    email: String,
    gifts_given: [Schema.Types.ObjectId],
    gifts_received: [Schema.Types.ObjectId],
    likes: [String],
    badges: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Elf', elf, 'Players');