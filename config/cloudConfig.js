module.exports = {
  GCP_KEY: "AIzaSyAMQ_lokx5I3FFYafAuC1B2VcxCIuX13Gs", // can be used with a secure gcp key and server ip can be whitelisted for api access
  MAP_HOST: "https://maps.googleapis.com",
  MAP_PREFIX: "/maps/api/geocode/json",
  getURL: function(address, country) {
    return (
      this.MAP_PREFIX +
      `?address=${address}${country && `&components=country:'${country}`}&key=${
        this.GCP_KEY
      }`
    );
  }
};
