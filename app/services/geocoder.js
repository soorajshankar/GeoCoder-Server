module.exports = {
  parseResults: (results=[]) =>
    results.map(i => ({
      // _id: i.place_id,
      name: i.formatted_address,
      ...i.geometry.location
    }))
};
// // TEST Data
// const testData = [
//   {
//     address_components: [
//       {
//         long_name: "Leipzig",
//         short_name: "Leipzig",
//         types: ["locality", "political"]
//       },
//       {
//         long_name: "Leipzig",
//         short_name: "Leipzig",
//         types: ["administrative_area_level_2", "political"]
//       },
//       {
//         long_name: "Saxony",
//         short_name: "SN",
//         types: ["administrative_area_level_1", "political"]
//       },
//       {
//         long_name: "Germany",
//         short_name: "DE",
//         types: ["country", "political"]
//       }
//     ],
//     formatted_address: "Leipzig, Germany",
//     geometry: {
//       bounds: {
//         northeast: { lat: 51.448026, lng: 12.5506377 },
//         southwest: { lat: 51.235539, lng: 12.2366321 }
//       },
//       location: { lat: 51.3396955, lng: 12.3730747 },
//       location_type: "APPROXIMATE",
//       viewport: {
//         northeast: { lat: 51.448026, lng: 12.5506377 },
//         southwest: { lat: 51.235539, lng: 12.2366321 }
//       }
//     },
//     place_id: "ChIJcywPIBj4pkcRUvW0udKA35M",
//     types: ["locality", "political"]
//   },
//   {
//     address_components: [
//       {
//         long_name: "Leipzig",
//         short_name: "Leipzig",
//         types: ["locality", "political"]
//       },
//       {
//         long_name: "Leipzig",
//         short_name: "Leipzig",
//         types: ["administrative_area_level_2", "political"]
//       },
//       {
//         long_name: "Saxony",
//         short_name: "SN",
//         types: ["administrative_area_level_1", "political"]
//       },
//       {
//         long_name: "Germany",
//         short_name: "DE",
//         types: ["country", "political"]
//       }
//     ],
//     formatted_address: "Test, Germany",
//     geometry: {
//       bounds: {
//         northeast: { lat: 51.448026, lng: 12.5506377 },
//         southwest: { lat: 51.235539, lng: 12.2366321 }
//       },
//       location: { lat: 51.33969556, lng: 12.3730745 },
//       location_type: "APPROXIMATE",
//       viewport: {
//         northeast: { lat: 51.448026, lng: 12.5506377 },
//         southwest: { lat: 51.235539, lng: 12.2366321 }
//       }
//     },
//     place_id: "ChIJcywPIBj4pkcRUvW0udKA35L",
//     types: ["locality", "political"]
//   }
// ];
