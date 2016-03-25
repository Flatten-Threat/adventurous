var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
  title: String,
  description: String,
  image: String
});

module.exports = mongoose.model( 'Activity', activitySchema );