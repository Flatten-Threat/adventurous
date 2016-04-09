var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
  title: String,
  description: String,
  image: String,
  category: String,
  region: {
    longitude: Number,
    latitude: Number
  }
});

module.exports = mongoose.model( 'Activity', activitySchema );