var Marker = require("../models/marker");
var request = require("../services/request-client");
var config = require("../../config/cloudConfig");
var geocoder = require("../services/geocoder");
module.exports.getMarkers = (req, res) => {
  getAllMarkers(res);
};
const getAllMarkers = res => {
  Marker.find(function(err, markers) {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err) {
      res.send(err);
    }
    res.json(markers); // return all markers in JSON format
  });
};
module.exports.getAddresses = ({ _address, _country }, res) => {
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
};
module.exports.addMarker = (req, res) => {
  // create a marker, information comes from AJAX request from React App
  Marker.create(
    {
      name: req.body.name,
      country: req.body.country,
      lat: req.body.lat || Number(0),
      lng: req.body.lng || Number(0)
    },
    (err, marker) => {
      if (err) res.send(err);
      // get and return all the markers after you create another
      getAllMarkers(res);
    }
  );
};
module.exports.editMarker = function(req, res) {
  const { __v, _id, ...update } = req.body;
  Marker.update({ _id: req.params._id }, update, { upsert: true }, err => {
    if (err) res.send(err);
    getAllMarkers(res);
  });
};
module.exports.deleteMarker = function(req, res) {
  Marker.remove({ _id: req.params._id }, (err, marker) => {
    if (err) res.send(err);
    getAllMarkers(res);
  });
};
