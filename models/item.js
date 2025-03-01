const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
  content: { type: 'string' },
});

module.exports = mongoose.model('Item', ItemSchema);