const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = {
  name: String,
  occupation: String,
  catchPhrase: String
};

const Celebrity = mongoose.model("celebrity", celebritySchema);

module.exports = Celebrity; 