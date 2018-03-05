const mongoose        = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    email: { type: Schema.Types.String, lowercase: true, unique: true },
    password: String,
    role: String
  }, {
    timestamps: true
  });

userSchema.plugin(uniqueValidator, { message: 'Error, {VALUE} already used.' });
module.exports = mongoose.model('user', userSchema);
