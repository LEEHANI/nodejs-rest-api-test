var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
      user: { type: String },
      info: {
            username: String,
            password: String
      }
});

module.exports = mongoose.model('Userdb', UserSchema);