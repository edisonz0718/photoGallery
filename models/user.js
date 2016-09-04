var mongoose = require("mongoose");
var ppLcMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
   username : String,
   password : String
  
});

UserSchema.plugin(ppLcMongoose);

module.exports = mongoose.model("User",UserSchema);