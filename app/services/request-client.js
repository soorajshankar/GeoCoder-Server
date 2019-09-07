var axios = require("axios");
var config = require("../../config/cloudConfig");

var client = axios.create({
  baseURL: config.MAP_HOST
});

module.exports = client;
