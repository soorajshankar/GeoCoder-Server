var mongoose = require("mongoose");

module.exports = mongoose.model("Marker", {
  name: String,
  country: String,
  lat: Number,
  lng: Number
});
