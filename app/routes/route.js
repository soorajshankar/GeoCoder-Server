var Marker = require("../models/marker");
var request = require("../services/request-client");
var config = require("../../config/cloudConfig");
var geocoder = require("../services/geocoder");
var markerController = require("../controllers/marker.controller");
var addressController = require("../controllers/address.controller");
function getAddresses({ _address, _country }, res) {
  request
    .get(config.getURL(_address, _country))
    .then((axiosResponse, err) => {
      if (axiosResponse.data.status === "OK") {
        const data = geocoder.parseResults(
          axiosResponse.data.results,
          _country
        );
        res.json({ success: true, data });
      } else if (axiosResponse.data.status === "ZERO_RESULTS") {
        res.json({ success: false, data: [] });
      } else {
        res.status(500);
        res.render("error", { error: err });
      }
    })
    .catch(err => {
      res.send(geocoder.parseResults());
      console.error("err", err);
    });
}

module.exports = function(app) {
  // api ---------------------------------------------------------------------
  // get all markers
  app.get("/api/markers", markerController.getMarkers);

  // create marker and send back all markers after creation
  app.post("/api/markers", markerController.addMarker);
  app.put("/api/markers/:_id", markerController.editMarker);
  // delete a marker
  app.delete("/api/markers/:_id", markerController.deleteMarker);
  // // delete a marker
  app.get("/api/geocoder/:_address/:_country", addressController.getAddresses);

  // application -------------------------------------------------------------
  app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });
};
