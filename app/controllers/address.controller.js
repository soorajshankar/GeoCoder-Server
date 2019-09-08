var request = require("../services/request-client");
var config = require("../../config/cloudConfig");
var geocoder = require("../services/geocoder");
module.exports.getAddresses = ({ params: { _address, _country } }, res) => {
  console.log(_address, _country);
  if (!(_address || _country)) {
    res.status(500);
    res.render("error", { error: "Please check your request parameters" });
  }
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
