var Marker = require("./models/marker");
var request = require("./services/request-client");
var config = require("../config/cloudConfig");
var geocoder = require("./services/geocoder");
function getMarkers(res) {
  Marker.find(function(err, markers) {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err) {
      res.send(err);
    }
    res.json(markers); // return all markers in JSON format
  });
}
function getAddresses({ _address, _country }, res) {
  console.log(config);
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
      console.log("err", err);
    });
}

module.exports = function(app) {
  // api ---------------------------------------------------------------------
  // get all markers
  app.get("/api/markers", function(req, res) {
    // use mongoose to get all markers in the database
    getMarkers(res);
  });

  // create marker and send back all markers after creation
  app.post("/api/markers", function(req, res) {
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
        getMarkers(res);
      }
    );
  });
  app.put("/api/markers/:_id", function(req, res) {
    const { __v, _id, ...update } = req.body;
    Marker.update({ _id: req.params._id }, update, { upsert: true }, err => {
      if (err) res.send(err);
      getMarkers(res);
    });
  });
  // delete a marker
  app.delete("/api/markers/:_id", function(req, res) {
    Marker.remove({ _id: req.params._id }, (err, marker) => {
      if (err) res.send(err);
      getMarkers(res);
    });
  });
  // delete a marker
  app.get("/api/geocoder/:_address/:_country", function(req, res) {
    console.log(req.params);
    getAddresses(req.params, res);
  });

  // application -------------------------------------------------------------
  app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });
};
