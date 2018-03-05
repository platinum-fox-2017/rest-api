const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    email: { type: Schema.Types.String, lowercase: true, unique: true },
    password: String
  }, {
    timestamps: true
  });
  
module.exports = mongoose.model('user', userSchema);
