var mongoose = require("mongoose");

module.exports = mongoose.model("Marker", {
  name: String,
  lat: Number,
  lng: Number
});
